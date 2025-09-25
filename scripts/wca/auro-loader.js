import { AuroLoader } from "../../src/auro-loader.js";

/**
 * The auro-loader element is an easy to use animated loader component.
 *
 * @attr {Boolean} ondark - Sets color of loader for dark backgrounds.
 * @attr {Boolean} onlight - sets color of loader for light backgrounds.
 * @attr {Boolean} xs - Sets size to extra small.
 * @attr {Boolean} sm - Sets size to small.
 * @attr {Boolean} md - Sets size to medium.
 * @attr {Boolean} lg - Sets size to large.
 * @csspart element - Apply style to adjust speed of animation.
 */
class AuroLoaderWCA extends AuroLoader {}

if (!customElements.get("auro-loader")) {
  customElements.define("auro-loader", AuroLoaderWCA);
}
