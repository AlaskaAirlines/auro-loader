// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";
// If use litElement base class
import { html, LitElement } from "lit";
import colorCss from "./styles/color.scss";
import styleCss from "./styles/style.scss";
import tokensCss from "./styles/tokens.scss";

/**
 * @private
 */
const DEFAULT_MESSAGE_INTERVAL_MS = 5000;

/**
 * @private
 */
const DEFAULT_MESSAGE_POSITION = "bottom";

/**
 * @private
 */
const VALID_MESSAGE_POSITIONS = new Set(["top", "right", "bottom", "left"]);

/**
 * The `auro-loader` element displays a loading animation to indicate a loading state to users.
 * @customElement auro-loader
 *
 * @slot - Fallback text shown under `prefers-reduced-motion: reduce`. Not shown for the `laser` type.
 * @slot message - Optional message(s) to show alongside the animation, rotating at `messageInterval` when more than one is provided. Not shown for `laser`. See the docs for reduced-motion behavior.
 * @csspart element - Apply style to adjust speed of animation.
 * @csspart message - Apply style to the message region wrapping the `message` slot.
 */
export class AuroLoader extends LitElement {
  constructor() {
    super();

    this._initializeDefaults();

    this._advanceMessage = this._advanceMessage.bind(this);
    this._handleReducedMotionChange =
      this._handleReducedMotionChange.bind(this);
  }

  _initializeDefaults() {
    this.orbit = false;
    this.ringworm = false;
    this.laser = false;
    this.pulse = false;
    this.appearance = "default";
    this.messageInterval = DEFAULT_MESSAGE_INTERVAL_MS;
    this.messagePosition = DEFAULT_MESSAGE_POSITION;

    /**
     * @private
     */
    this.keys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    /**
     * @private
     */
    this.mdCount = 3;

    /**
     * @private
     */
    this.smCount = 2;

    /**
     * @private
     */
    this.runtimeUtils = new AuroLibraryRuntimeUtils();

    /**
     * @private
     */
    this._messages = [];

    /**
     * @private
     */
    this._activeMessageIndex = 0;

    /**
     * @private
     */
    this._messageCycleTimer = undefined;

    /**
     * @private
     */
    this._prefersReducedMotion = false;
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      /**
       * Defines whether the loader is intended for lighter or darker backgrounds, or if it should use the brand color regardless of the background.
       * @type {'default' | 'inverse' | 'brand'}
       * @default 'default'
       */
      appearance: {
        type: String,
        reflect: true,
      },

      /**
       * Sets loader to laser type. Note: the default and `message` slots are not shown for this type, in any motion state — `laser` has no room for accompanying text.
       */
      laser: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Sets the interval, in milliseconds, between automatic rotations of the messages slotted into the `message` slot. Only applies when more than one message is slotted.
       * @type {number}
       * @default 5000
       */
      messageInterval: {
        type: Number,
        reflect: true,
        attribute: "message-interval",
      },

      /**
       * Sets the position of the `message` slot content relative to the loading animation. An invalid value falls back to `bottom`.
       * @type {'top' | 'right' | 'bottom' | 'left'}
       * @default 'bottom'
       */
      messagePosition: {
        type: String,
        reflect: true,
        attribute: "message-position",
      },

      /**
       * Sets size to large.
       */
      lg: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Sets size to medium.
       */
      md: {
        type: Boolean,
        reflect: true,
      },

      /**
       * DEPRECATED - use `appearance="inverse"`.
       * @deprecated Use `appearance="inverse"` instead.
       */
      onDark: {
        type: Boolean,
        reflect: true,
        attribute: "ondark",
      },

      /**
       * DEPRECATED - use `appearance="brand"`.
       * @deprecated Use `appearance="brand"` instead.
       */
      onLight: {
        type: Boolean,
        reflect: true,
        attribute: "onlight",
      },

      /**
       * Sets loader to orbit type.
       */
      orbit: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Sets loader to pulse type.
       */
      pulse: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Sets loader to ringworm type.
       */
      ringworm: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Sets size to small.
       */
      sm: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Sets size to extra small.
       */
      xs: {
        type: Boolean,
        reflect: true,
      },
    };
  }

  static get styles() {
    return [styleCss, colorCss, tokensCss];
  }

  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-loader"] - The name of the element that you want to register.
   *
   * @example
   * AuroLoader.register("custom-loader") // this will register this element to <custom-loader/>
   *
   */
  static register(name = "auro-loader") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroLoader);
  }

  firstUpdated() {
    // Add the tag name as an attribute if it is different than the component name
    this.runtimeUtils.handleComponentTagRename(this, "auro-loader");
  }

  connectedCallback() {
    super.connectedCallback();

    this._reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    this._prefersReducedMotion = this._reducedMotionQuery.matches;
    this._reducedMotionQuery.addEventListener(
      "change",
      this._handleReducedMotionChange,
    );

    this._startMessageCycle();
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    this._stopMessageCycle();
    this._reducedMotionQuery?.removeEventListener(
      "change",
      this._handleReducedMotionChange,
    );
  }

  willUpdate(changedProperties) {
    super.willUpdate(changedProperties);

    // Self-correct invalid values back to their defaults *before* this
    // render, rather than leaving e.g. `message-interval="NaN"` or
    // `message-position="buttom"` (a typo) reflected into the DOM
    // indefinitely. Doing this in `updated()` instead would mutate a
    // property after the update already completed, triggering Lit's
    // "scheduled an update ... after an update completed" warning and an
    // extra, unnecessary render pass (https://lit.dev/msg/change-in-update).
    if (
      changedProperties.has("messageInterval") &&
      !(Number.isFinite(this.messageInterval) && this.messageInterval > 0)
    ) {
      this.messageInterval = DEFAULT_MESSAGE_INTERVAL_MS;
    }

    if (
      changedProperties.has("messagePosition") &&
      !VALID_MESSAGE_POSITIONS.has(this.messagePosition)
    ) {
      this.messagePosition = DEFAULT_MESSAGE_POSITION;
    }
  }

  updated(changedProperties) {
    super.updated(changedProperties);

    // `messageInterval` only reschedules a cycle that is *already* running.
    // A cycle that is not running is started by `handleMessageSlotChange` or
    // `connectedCallback` instead — starting one here would begin rotating
    // before any message has been slotted.
    const rescheduleRunningCycle =
      changedProperties.has("messageInterval") && this._messageCycleTimer;

    // `laser` never renders the message region, so entering or leaving that
    // type has to stop or restart the cycle outright rather than reschedule it.
    if (rescheduleRunningCycle || changedProperties.has("laser")) {
      this._startMessageCycle();
    }
  }

  /**
   * @private
   * @returns {Array} Numbered array for template map.
   */
  defineTemplate() {
    let nodes = Array.from(Array(this.mdCount).keys());

    if (this.orbit || this.laser) {
      nodes = Array.from(Array(this.smCount).keys());
    } else if (this.ringworm) {
      nodes = Array.from(Array(0).keys());
    }

    return nodes;
  }

  /**
   * Tracks whether the default slot has consumer-provided content (as opposed to its fallback text), so the reduced-motion fallback only takes priority over the `message` slot when it has real content of its own.
   * @private
   * @param {Event} event - The `slotchange` event from the default slot.
   * @returns {void}
   */
  handleDefaultSlotChange(event) {
    const slot = event.target;

    // `assignedNodes({ flatten: true })` returns the slot's own *fallback*
    // content (the built-in "Loading..." text) whenever nothing is assigned, so
    // reading it unconditionally would report consumer content even when the
    // consumer has none — including after a framework removes content it had
    // previously rendered. Only flatten once something is actually assigned,
    // which keeps nested-slot forwarding working without the fallback leaking in.
    const assignedNodes = slot.assignedNodes();
    const nodes = assignedNodes.length
      ? slot.assignedNodes({ flatten: true })
      : [];

    // Whitespace-only text nodes exist between tags in virtually every
    // multi-line usage, so they must not count as consumer content.
    // (Comment nodes, which some frameworks leave behind as placeholders,
    // are never assigned to a slot in the first place — only Element and
    // Text nodes are slottable per spec — so they don't need handling here.)
    const hasContent = nodes.some(
      (node) =>
        node.nodeType !== Node.TEXT_NODE || node.textContent.trim() !== "",
    );

    this.toggleAttribute("has-default-content", hasContent);
  }

  /**
   * Reads the elements assigned to the `message` slot and (re)starts message cycling from the beginning.
   * @private
   * @param {Event} event - The `slotchange` event from the `message` slot.
   * @returns {void}
   */
  handleMessageSlotChange(event) {
    this._messages = event.target.assignedElements({ flatten: true });

    this.toggleAttribute("has-message", this._messages.length > 0);

    this._activeMessageIndex = 0;
    this._syncMessageVisibility();
    this._startMessageCycle();
  }

  /**
   * @private
   * @returns {void}
   */
  _syncMessageVisibility() {
    this._messages.forEach((message, index) => {
      message.hidden = index !== this._activeMessageIndex;
    });
  }

  /**
   * @private
   * @returns {void}
   */
  _advanceMessage() {
    // Defensive: a modulo against an empty list yields `NaN`, which would stick
    // as the active index and permanently hide every message.
    if (this._messages.length === 0) {
      return;
    }

    this._activeMessageIndex =
      (this._activeMessageIndex + 1) % this._messages.length;
    this._syncMessageVisibility();
  }

  /**
   * @private
   * @returns {void}
   */
  _stopMessageCycle() {
    clearInterval(this._messageCycleTimer);
    this._messageCycleTimer = undefined;
  }

  /**
   * @private
   * @returns {void}
   */
  _startMessageCycle() {
    this._stopMessageCycle();

    // `laser` hides the message region outright, so cycling there would burn a
    // timer and mutate consumer-owned nodes with no visible or audible effect.
    if (
      this._messages.length > 1 &&
      !this._prefersReducedMotion &&
      !this.laser
    ) {
      const interval =
        Number.isFinite(this.messageInterval) && this.messageInterval > 0
          ? this.messageInterval
          : DEFAULT_MESSAGE_INTERVAL_MS;

      this._messageCycleTimer = setInterval(this._advanceMessage, interval);
    }
  }

  /**
   * @private
   * @param {MediaQueryListEvent} event - The `change` event from the reduced-motion media query.
   * @returns {void}
   */
  _handleReducedMotionChange(event) {
    this._prefersReducedMotion = event.matches;
    this._startMessageCycle();
  }

  // When using auroElement, use the following attribute and function when hiding content from screen readers.
  // aria-hidden="${this.hideAudible(this.hiddenAudible)}"

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      <div class="loader-shape">
        ${this.defineTemplate().map(
          (idx) => html`
          <span part="element" class="loader node-${idx}"></span>
        `,
        )}

        ${
          this.ringworm
            ? html`
          <svg part="element" class="circular" viewBox="25 25 50 50">
            <circle class="path" cx="50" cy="50" r="20" fill="none"/>
          </svg>`
            : ""
        }
      </div>

      <div class="no-animation body-default">
        <slot @slotchange="${this.handleDefaultSlotChange}">Loading...</slot>
      </div>

      <div class="message-region body-default" part="message" role="status" aria-live="polite" aria-atomic="false">
        <div class="message-list">
          <slot name="message" @slotchange="${this.handleMessageSlotChange}"></slot>
        </div>
      </div>
    `;
  }
}
