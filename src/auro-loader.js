// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If use litElement base class
import { LitElement, html, css } from "lit";

// If using auroElement base class
// See instructions for importing auroElement base class https://git.io/JULq4
// import { html, css } from "lit";
// import AuroElement from '@alaskaairux/orion-web-core-style-sheets/dist/auroElement/auroElement';

// Import touch detection lib
import styleCss from "./style-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-loader element is an easy to use animated loader component.
 *
 * @attr {Boolean} pulse - sets loader type
 * @attr {Boolean} ringworm - sets loader type
 * @attr {Boolean} laser - sets loader type
 * @attr {Boolean} orbit - sets loader type
 * @attr {Boolean} white - sets color of loader to white
 * @attr {Boolean} ondark - sets color of loader to auro-color-ui-default-on-dark
 * @attr {Boolean} onlight - sets color of loader to auro-color-ui-default-on-light
 * @attr {Boolean} xs - sets size to extra small
 * @attr {Boolean} sm - sets size to small
 * @attr {Boolean} md - sets size to medium
 * @attr {Boolean} lg - sets size to large
 * @csspart element - apply style to adjust speed of animation
 */

// build the component class
export class AuroLoader extends LitElement {
  constructor() {
    super();

    /* eslint array-element-newline: ["warn", "always"] */
    /* eslint no-magic-numbers: "warn" */
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

    this.orbit = false;
    this.ringworm = false;
    this.laser = false;
    this.pulse = false;
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      pulse: {
        type: Boolean,
        reflect: true
      },
      orbit: {
        type: Boolean,
        reflect: true
      },
      ringworm: {
        type: Boolean,
        reflect: true
      },
      laser: {
        type: Boolean,
        reflect: true
      }
    };
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  /**
   * @private
   * @returns {array} Numbered array for template map.
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
      ${this.defineTemplate().map((idx) => html`
        <span part="element" class="loader node-${idx}"></span>
      `)}

      <div class="no-animation">Loading...</div>

      ${this.ringworm ? html`
        <svg  part="element" class="circular" viewBox="25 25 50 50">
          <circle class="path" cx="50" cy="50" r="20" fill="none"/>
        </svg>`
        : ``
      }
    `;
  }
}

// default internal definition
if (!customElements.get("auro-loader")) {
  customElements.define("auro-loader", AuroLoader);
}
