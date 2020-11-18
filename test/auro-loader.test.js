import { fixture, html, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/auro-loader.js';

describe('auro-loader', () => {
  it('sets the CSS class on auro-loader > div element', async () => {
    const el = await fixture(html`
      <auro-loader cssclass="testClass"></auro-loader>
    `);

    const div = el.shadowRoot.querySelector('div');
    expect(div.className).to.equal('testClass');
  });

  it('auro-loader is accessible', async () => {
    const el = await fixture(html`
      <auro-loader cssclass="testClass"></auro-loader>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-loader custom element is defined', async () => {
    const el = await !!customElements.get("auro-loader");

    await expect(el).to.be.true;
  });
});
