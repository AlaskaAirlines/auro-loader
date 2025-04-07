
import { AuroLoader } from '../../src/auro-loader.js';

/**
 * The auro-loader element is an easy to use animated loader component.
 *
 * @attr {Boolean} ondark - sets color of loader to auro-color-ui-default-on-dark
 * @attr {Boolean} onlight - sets color of loader to auro-color-ui-default-on-light
 * @attr {Boolean} xs - sets size to extra small
 * @attr {Boolean} sm - sets size to small
 * @attr {Boolean} md - sets size to medium
 * @attr {Boolean} lg - sets size to large
 * @csspart element - apply style to adjust speed of animation
 */
class AuroLoaderWCA extends AuroLoader {}

if (!customElements.get("auro-loader")) {
  customElements.define("auro-loader", AuroLoaderWCA);
}
