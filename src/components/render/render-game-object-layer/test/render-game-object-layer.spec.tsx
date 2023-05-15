import { newSpecPage } from '@stencil/core/testing';
import { RenderGameObjectLayer } from '../render-game-object-layer';

describe('render-game-object-layer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RenderGameObjectLayer],
      html: `<render-game-object-layer></render-game-object-layer>`,
    });
    expect(page.root).toEqualHtml(`
      <render-game-object-layer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </render-game-object-layer>
    `);
  });
});
