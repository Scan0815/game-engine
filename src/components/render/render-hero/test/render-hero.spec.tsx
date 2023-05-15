import { newSpecPage } from '@stencil/core/testing';
import { RenderHero } from '../render-hero';

describe('render-hero', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RenderHero],
      html: `<render-hero></render-hero>`,
    });
    expect(page.root).toEqualHtml(`
      <render-hero>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </render-hero>
    `);
  });
});
