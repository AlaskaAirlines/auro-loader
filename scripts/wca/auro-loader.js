
import { AuroLoader } from '../../src/auro-loader.js';

/**
 * The auro-loader element is an easy to use animated loader component.
 */
class AuroLoaderWCA extends AuroLoader {}

if (!customElements.get("auro-loader")) {
  customElements.define("auro-loader", AuroLoaderWCA);
}
