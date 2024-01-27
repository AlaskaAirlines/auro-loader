import { AuroLoader } from './src/auro-loader.js';

/**
 * Register Custom Element.
 * @param {Object} name - Name to use for custom element.
 * @returns {void}
 */
 const registerComponent = (name = 'custom-loader') => {
  // alias definition
  if (!customElements.get(name)) {
    customElements.define(name, class extends AuroLoader {});
  }
}

export { registerComponent }
