import { newSpecPage } from '@stencil/core/testing';
import { RenderLayer } from '../render-layer';

describe('render-layer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RenderLayer],
      html: `<render-layer></render-layer>`,
    });
    expect(page.root).toEqualHtml(`
      <render-layer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </render-layer>
    `);
  });
});
