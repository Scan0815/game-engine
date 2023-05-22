import { newSpecPage } from '@stencil/core/testing';
import { RenderElevatedSprite } from '../render-elevated-sprite';

describe('render-elevated-sprite', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RenderElevatedSprite],
      html: `<render-elevated-sprite></render-elevated-sprite>`,
    });
    expect(page.root).toEqualHtml(`
      <render-elevated-sprite>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </render-elevated-sprite>
    `);
  });
});
