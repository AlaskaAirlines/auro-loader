import { aTimeout, expect, fixture, html, waitUntil } from "@open-wc/testing";
import "../src/registered";

/**
 * Replaces `window.matchMedia` for reduced-motion queries only, so the rest of
 * the page (Lit, webcorestylesheets) keeps the real implementation. Returns a
 * handle that can flip the preference and fire `change`, which is the only way
 * to exercise the component's media-query listener — WTR/headless Chrome cannot
 * be made to actually match `prefers-reduced-motion: reduce`.
 */
function stubReducedMotion(initialMatches) {
  const original = window.matchMedia;
  const listeners = new Set();

  const query = {
    matches: initialMatches,
    media: "(prefers-reduced-motion: reduce)",
    onchange: null,
    addEventListener: (_type, callback) => listeners.add(callback),
    removeEventListener: (_type, callback) => listeners.delete(callback),
    addListener: (callback) => listeners.add(callback),
    removeListener: (callback) => listeners.delete(callback),
    dispatchEvent: () => true,
  };

  window.matchMedia = (media) =>
    media.includes("prefers-reduced-motion")
      ? query
      : original.call(window, media);

  return {
    set(matches) {
      query.matches = matches;
      for (const callback of listeners) {
        callback({ matches });
      }
    },
    restore() {
      window.matchMedia = original;
    },
  };
}

/** Index of the single message that is currently not hidden. */
function visibleIndex(items) {
  return Array.from(items).findIndex((item) => !item.hidden);
}

describe("auro-loader", () => {
  it("auro-loader is accessible", async () => {
    const el = await fixture(html`
      <auro-loader></auro-loader>
    `);

    await expect(el).to.be.accessible();
  });

  it("auro-loader custom element uses inline SVG", async () => {
    const el = await fixture(html`
      <auro-loader ringworm></auro-loader>
    `);

    const root = el.shadowRoot.querySelectorAll("svg");
    const length = 1;

    await expect(root.length).to.equal(length);
  });

  it("auro-loader should have two elements", async () => {
    const el = await fixture(html`
      <auro-loader laser></auro-loader>
    `);

    const root = el.shadowRoot.querySelectorAll("span");
    const length = 2;

    await expect(root.length).to.equal(length);
  });

  it("auro-loader should have three elements", async () => {
    const el = await fixture(html`
      <auro-loader pulse></auro-loader>
    `);

    const root = el.shadowRoot.querySelectorAll("span");
    const length = 3;

    await expect(root.length).to.equal(length);
  });

  it("positions pulse dots in normal flow rather than stacked absolutely", async () => {
    const el = await fixture(html`
      <auro-loader pulse></auro-loader>
    `);

    const spans = el.shadowRoot.querySelectorAll(".loader-shape > span");

    for (const span of spans) {
      await expect(getComputedStyle(span).position).to.equal("relative");
    }
  });

  it("auro-loader custom element is defined", async () => {
    const el = await !!customElements.get("auro-loader");

    await expect(el).to.be.true;
  });

  describe("message slot", () => {
    it("renders a single slotted message statically without hiding it", async () => {
      const el = await fixture(html`
        <auro-loader><span slot="message">Loading...</span></auro-loader>
      `);

      const items = el.querySelectorAll('[slot="message"]');

      await expect(items.length).to.equal(1);
      await expect(items[0].hidden).to.be.false;
    });

    it("shows only the first of multiple messages initially", async () => {
      const el = await fixture(html`
        <auro-loader>
          <span slot="message">First</span>
          <span slot="message">Second</span>
        </auro-loader>
      `);

      const items = el.querySelectorAll('[slot="message"]');

      await expect(items[0].hidden).to.be.false;
      await expect(items[1].hidden).to.be.true;
    });

    it("cycles to the next message after the interval elapses", async () => {
      const el = await fixture(html`
        <auro-loader message-interval="20">
          <span slot="message">First</span>
          <span slot="message">Second</span>
        </auro-loader>
      `);

      const items = el.querySelectorAll('[slot="message"]');

      await waitUntil(
        () => items[1].hidden === false,
        "message did not advance",
        { timeout: 1000 },
      );

      await expect(items[0].hidden).to.be.true;
      await expect(items[1].hidden).to.be.false;
    });

    it("wraps around to the first message after the last one", async () => {
      const el = await fixture(html`
        <auro-loader message-interval="20">
          <span slot="message">First</span>
          <span slot="message">Second</span>
        </auro-loader>
      `);

      const items = el.querySelectorAll('[slot="message"]');

      await waitUntil(
        () => items[1].hidden === false,
        "first advance did not happen",
        { timeout: 1000 },
      );
      await waitUntil(
        () => items[0].hidden === false,
        "message did not wrap around",
        { timeout: 1000 },
      );

      await expect(items[0].hidden).to.be.false;
      await expect(items[1].hidden).to.be.true;
    });

    it("stops cycling once the element is removed", async () => {
      const el = await fixture(html`
        <auro-loader message-interval="20">
          <span slot="message">First</span>
          <span slot="message">Second</span>
        </auro-loader>
      `);

      const items = el.querySelectorAll('[slot="message"]');

      el.remove();
      await aTimeout(50);

      await expect(items[0].hidden).to.be.false;
      await expect(items[1].hidden).to.be.true;
    });

    it("resets to the first message when slotted content changes mid-cycle", async () => {
      const el = await fixture(html`
        <auro-loader message-interval="20">
          <span slot="message">First</span>
          <span slot="message">Second</span>
        </auro-loader>
      `);

      await aTimeout(30);

      const replacement = document.createElement("span");
      replacement.slot = "message";
      replacement.textContent = "Third";
      el.querySelectorAll('[slot="message"]').forEach((node) => {
        node.remove();
      });
      el.append(replacement);

      await waitUntil(
        () => replacement.hidden === false,
        "replacement message was not shown",
        { timeout: 1000 },
      );

      await expect(replacement.hidden).to.be.false;
    });

    // These reduced-motion tests only prove the JS cycling timer respects
    // the preference — they do not assert the CSS
    // `@media (prefers-reduced-motion: reduce)` gating in
    // src/styles/style.scss that actually swaps in `.no-animation` and
    // hides `.message-region`. That gating has regressed twice already
    // (see Root Cause #1 in docs/post-mortem/1391812.md) but can't be
    // exercised here: `auro test` runs against auro-cli's bundled
    // web-test-runner config, which doesn't register
    // `@web/test-runner-commands`'s `emulateMediaPlugin` needed to force
    // real reduced-motion rendering in headless Chrome. Real coverage of
    // this invariant needs a Playwright/CDP-based test setup — tracked as
    // a follow-up, not something fixable from this test file alone.
    it("does not cycle when the user prefers reduced motion", async () => {
      const reducedMotion = stubReducedMotion(true);

      try {
        const el = await fixture(html`
          <auro-loader message-interval="20">
            <span slot="message">First</span>
            <span slot="message">Second</span>
          </auro-loader>
        `);

        const items = el.querySelectorAll('[slot="message"]');

        await aTimeout(50);

        await expect(items[0].hidden).to.be.false;
        await expect(items[1].hidden).to.be.true;
      } finally {
        reducedMotion.restore();
      }
    });

    it("stops cycling when the reduced-motion preference is turned on mid-cycle", async () => {
      const reducedMotion = stubReducedMotion(false);

      try {
        const el = await fixture(html`
          <auro-loader message-interval="20">
            <span slot="message">First</span>
            <span slot="message">Second</span>
          </auro-loader>
        `);

        const items = el.querySelectorAll('[slot="message"]');

        await waitUntil(() => items[1].hidden === false, "never started", {
          timeout: 1000,
        });

        reducedMotion.set(true);

        const frozenAt = visibleIndex(items);
        await aTimeout(100);

        await expect(visibleIndex(items)).to.equal(frozenAt);
      } finally {
        reducedMotion.restore();
      }
    });

    it("resumes cycling when the reduced-motion preference is turned back off", async () => {
      const reducedMotion = stubReducedMotion(true);

      try {
        const el = await fixture(html`
          <auro-loader message-interval="20">
            <span slot="message">First</span>
            <span slot="message">Second</span>
          </auro-loader>
        `);

        const items = el.querySelectorAll('[slot="message"]');

        await aTimeout(50);
        await expect(items[1].hidden).to.be.true;

        reducedMotion.set(false);

        await waitUntil(() => items[1].hidden === false, "did not resume", {
          timeout: 1000,
        });
      } finally {
        reducedMotion.restore();
      }
    });

    it("exposes the message region as an accessible live region", async () => {
      const el = await fixture(html`
        <auro-loader><span slot="message">Loading...</span></auro-loader>
      `);

      const region = el.shadowRoot.querySelector(".message-region");

      await expect(region.getAttribute("role")).to.equal("status");
      await expect(region.getAttribute("aria-live")).to.equal("polite");
      await expect(el).to.be.accessible();
    });

    it("never shows the message region for the laser type", async () => {
      const el = await fixture(html`
        <auro-loader laser><span slot="message">Loading...</span></auro-loader>
      `);

      const region = el.shadowRoot.querySelector(".message-region");

      await expect(getComputedStyle(region).display).to.equal("none");
    });

    it("does not mark has-default-content when relying on the built-in fallback text", async () => {
      const el = await fixture(html`
        <auro-loader>
          <span slot="message">Loading...</span>
        </auro-loader>
      `);

      await expect(el.hasAttribute("has-default-content")).to.be.false;
    });

    it("marks has-default-content when the default slot has consumer-provided content", async () => {
      const el = await fixture(html`
        <auro-loader>Custom fallback text<span slot="message">Loading...</span></auro-loader>
      `);

      await expect(el.hasAttribute("has-default-content")).to.be.true;
    });

    it("clears has-default-content when the consumer removes that content again", async () => {
      const el = await fixture(html`
        <auro-loader>Custom fallback text<span slot="message">Loading...</span></auro-loader>
      `);

      await expect(el.hasAttribute("has-default-content")).to.be.true;

      // A framework un-rendering conditional default-slot content. The slot
      // falls back to its built-in "Loading..." text, which must not be
      // mistaken for consumer content.
      el.firstChild.remove();
      await aTimeout(0);

      await expect(el.hasAttribute("has-default-content")).to.be.false;
    });

    it("toggles has-message as message content comes and goes", async () => {
      const el = await fixture(html`
        <auro-loader><span slot="message">Loading...</span></auro-loader>
      `);

      await expect(el.hasAttribute("has-message")).to.be.true;

      el.querySelector('[slot="message"]').remove();
      await aTimeout(0);

      await expect(el.hasAttribute("has-message")).to.be.false;
    });

    it("rotates content slotted into the message slot regardless of element type", async () => {
      const el = await fixture(html`
        <auro-loader message-interval="20">
          <span slot="message">First</span>
          <div slot="message">Second</div>
        </auro-loader>
      `);

      const items = el.querySelectorAll('[slot="message"]');

      await expect(el.hasAttribute("has-message")).to.be.true;
      await expect(items[0].hidden).to.be.false;
      await expect(items[1].hidden).to.be.true;

      await waitUntil(
        () => items[1].hidden === false,
        "message did not advance",
        {
          timeout: 1000,
        },
      );

      await expect(items[0].hidden).to.be.true;
      await expect(items[1].hidden).to.be.false;
    });

    it("restarts cycling after the element is detached and re-attached", async () => {
      const el = await fixture(html`
        <auro-loader message-interval="20">
          <span slot="message">First</span>
          <span slot="message">Second</span>
        </auro-loader>
      `);

      const items = el.querySelectorAll('[slot="message"]');
      const parent = el.parentElement;

      el.remove();
      await aTimeout(50);

      // A plain DOM move (re-parent, keyed-list reorder, portal relocation)
      // fires disconnectedCallback -> connectedCallback without re-firing
      // slotchange, so the cycle has to be restarted on connect.
      parent.append(el);

      await waitUntil(
        () => visibleIndex(items) === 1,
        "cycling did not restart after re-attach",
        { timeout: 1000 },
      );
    });

    it("reschedules a running cycle when messageInterval changes", async () => {
      const el = await fixture(html`
        <auro-loader message-interval="10000">
          <span slot="message">First</span>
          <span slot="message">Second</span>
        </auro-loader>
      `);

      const items = el.querySelectorAll('[slot="message"]');

      await expect(items[1].hidden).to.be.true;

      el.messageInterval = 20;
      await el.updateComplete;

      // Without the reschedule this would not advance for another 10 seconds.
      await waitUntil(
        () => visibleIndex(items) === 1,
        "interval change did not reschedule the cycle",
        { timeout: 1000 },
      );
    });

    it("falls back to the default interval when messageInterval is not a positive finite number", async () => {
      const el = await fixture(html`
        <auro-loader message-interval="abc">
          <span slot="message">First</span>
          <span slot="message">Second</span>
        </auro-loader>
      `);

      const items = el.querySelectorAll('[slot="message"]');

      // A NaN/zero delay would be clamped by the browser to ~4ms and flood the
      // live region; the 5000ms default means nothing advances this soon.
      await aTimeout(150);

      await expect(items[0].hidden).to.be.false;
      await expect(items[1].hidden).to.be.true;

      // The invalid value should not linger in the DOM as `message-interval="NaN"`.
      await el.updateComplete;
      await expect(el.messageInterval).to.equal(5000);
      await expect(el.getAttribute("message-interval")).to.equal("5000");
    });

    it("does not cycle for the laser type", async () => {
      const el = await fixture(html`
        <auro-loader laser message-interval="20">
          <span slot="message">First</span>
          <span slot="message">Second</span>
        </auro-loader>
      `);

      const items = el.querySelectorAll('[slot="message"]');

      await aTimeout(100);

      await expect(items[0].hidden).to.be.false;
      await expect(items[1].hidden).to.be.true;
    });
  });

  describe("message position", () => {
    it("defaults to bottom", async () => {
      const el = await fixture(html`
        <auro-loader><span slot="message">Loading...</span></auro-loader>
      `);

      await expect(el.messagePosition).to.equal("bottom");
      await expect(el.getAttribute("message-position")).to.equal("bottom");
    });

    it("falls back to bottom for an invalid value", async () => {
      const el = await fixture(html`
        <auro-loader message-position="buttom"><span slot="message">Loading...</span></auro-loader>
      `);

      await el.updateComplete;

      await expect(el.messagePosition).to.equal("bottom");
      await expect(el.getAttribute("message-position")).to.equal("bottom");
    });

    it("stacks the message below the animation by default", async () => {
      const el = await fixture(html`
        <auro-loader><span slot="message">Loading...</span></auro-loader>
      `);

      const shape = el.shadowRoot.querySelector(".loader-shape");
      const region = el.shadowRoot.querySelector(".message-region");

      await expect(
        region.getBoundingClientRect().top >=
          shape.getBoundingClientRect().bottom,
      ).to.be.true;
    });

    it("moves the message above the animation when set to top", async () => {
      const el = await fixture(html`
        <auro-loader message-position="top"><span slot="message">Loading...</span></auro-loader>
      `);

      const shape = el.shadowRoot.querySelector(".loader-shape");
      const region = el.shadowRoot.querySelector(".message-region");

      await expect(
        region.getBoundingClientRect().bottom <=
          shape.getBoundingClientRect().top,
      ).to.be.true;
    });

    it("moves the message to the left of the animation when set to left", async () => {
      const el = await fixture(html`
        <auro-loader message-position="left"><span slot="message">Loading...</span></auro-loader>
      `);

      const shape = el.shadowRoot.querySelector(".loader-shape");
      const region = el.shadowRoot.querySelector(".message-region");

      await expect(
        region.getBoundingClientRect().right <=
          shape.getBoundingClientRect().left,
      ).to.be.true;
    });

    it("moves the message to the right of the animation when set to right", async () => {
      const el = await fixture(html`
        <auro-loader message-position="right"><span slot="message">Loading...</span></auro-loader>
      `);

      const shape = el.shadowRoot.querySelector(".loader-shape");
      const region = el.shadowRoot.querySelector(".message-region");

      await expect(
        region.getBoundingClientRect().left >=
          shape.getBoundingClientRect().right,
      ).to.be.true;
    });
  });
});
