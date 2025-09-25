import { expect, fixture, html } from "@open-wc/testing";
import "../index.js";

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

  it("auro-loader custom element is defined", async () => {
    const el = await !!customElements.get("auro-loader");

    await expect(el).to.be.true;
  });
});
