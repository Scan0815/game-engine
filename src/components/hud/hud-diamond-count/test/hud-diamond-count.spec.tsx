import { newSpecPage } from '@stencil/core/testing';
import { HudDiamondCount } from '../hud-diamond-count';

describe('hud-diamond-count', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HudDiamondCount],
      html: `<hud-diamond-count></hud-diamond-count>`,
    });
    expect(page.root).toEqualHtml(`
      <hud-diamond-count>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hud-diamond-count>
    `);
  });
});
