import { newSpecPage } from '@stencil/core/testing';
import { RenderSprite } from '../render-sprite';

describe('render-sprite', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RenderSprite],
      html: `<render-sprite></render-sprite>`,
    });
    expect(page.root).toEqualHtml(`
      <render-sprite>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </render-sprite>
    `);
  });
});
