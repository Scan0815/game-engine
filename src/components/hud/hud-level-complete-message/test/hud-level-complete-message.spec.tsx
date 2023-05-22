import { newSpecPage } from '@stencil/core/testing';
import { HudLevelCompleteMessage } from '../hud-level-complete-message';

describe('hud-level-complete-message', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HudLevelCompleteMessage],
      html: `<hud-level-complete-message></hud-level-complete-message>`,
    });
    expect(page.root).toEqualHtml(`
      <hud-level-complete-message>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hud-level-complete-message>
    `);
  });
});
