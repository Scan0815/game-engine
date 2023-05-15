import { newE2EPage } from '@stencil/core/testing';

describe('render-layer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<render-layer></render-layer>');

    const element = await page.find('render-layer');
    expect(element).toHaveClass('hydrated');
  });
});
