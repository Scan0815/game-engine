import { newE2EPage } from '@stencil/core/testing';

describe('render-hero', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<render-hero></render-hero>');

    const element = await page.find('render-hero');
    expect(element).toHaveClass('hydrated');
  });
});
