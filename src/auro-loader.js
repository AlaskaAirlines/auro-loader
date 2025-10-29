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
 * @attr {Boolean} ondark - DEPRECATED - use `appearance="inverse"`.
 * @attr {Boolean} onlight - DEPRECATED - use `appearance="brand"`.
 * @attr {Boolean} xs - Sets size to extra small.
 * @attr {Boolean} sm - Sets size to small.
 * @attr {Boolean} md - Sets size to medium.
 * @attr {Boolean} lg - Sets size to large.
 * @slot - Default slot for text that replaces `auro-loader` component when user has the "Reduce Motion" a11y feature enabled.
 * @csspart element - Apply style to adjust speed of animation.
 */
export class AuroLoader extends LitElement {
  constructor() {
    super();


    this.appearance = "default";
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

    this.orbit = false;
    this.ringworm = false;
    this.laser = false;
    this.pulse = false;
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {

      /**
       * Defines whether the loader is intended for lighter or darker backgrounds, or if it should use the brand color regardless of the background.
       * @property {'default', 'inverse', 'brand'}
       * @default 'default'
       */
      appearance: {
        type: String,
        reflect: true
      },

      /**
       * Sets loader to laser type.
       */
      laser: {
        type: Boolean,
        reflect: true,
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
    };
  }

  static get styles() {
    return [styleCss, colorCss, tokensCss];
  }

  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-loader"] - The name of element that you want to register to.
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

  // When using auroElement, use the following attribute and function when hiding content from screen readers.
  // aria-hidden="${this.hideAudible(this.hiddenAudible)}"

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      ${this.defineTemplate().map(
        (idx) => html`
        <span part="element" class="loader node-${idx}"></span>
      `,
      )}

      <div class="no-animation body-default">
        <slot>Loading...</slot>
      </div>

      ${
        this.ringworm
          ? html`
        <svg  part="element" class="circular" viewBox="25 25 50 50">
          <circle class="path" cx="50" cy="50" r="20" fill="none"/>
        </svg>`
          : ""
      }
    `;
  }
}
