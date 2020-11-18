import { fixture, html, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/auro-loader.js';

describe('auro-loader', () => {
  it('auro-loader is accessible', async () => {
    const el = await fixture(html`
      <auro-loader></auro-loader>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-loader custom element is defined', async () => {
    const el = await !!customElements.get("auro-loader");

    await expect(el).to.be.true;
  });
});
