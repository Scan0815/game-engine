import { newSpecPage } from '@stencil/core/testing';
import { RenderScene } from '../render-scene';

describe('render-scene', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RenderScene],
      html: `<render-scene></render-scene>`,
    });
    expect(page.root).toEqualHtml(`
      <render-scene>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </render-scene>
    `);
  });
});
