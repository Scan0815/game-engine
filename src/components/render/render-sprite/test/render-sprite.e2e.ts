import { newE2EPage } from '@stencil/core/testing';

describe('render-sprite', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<render-sprite></render-sprite>');

    const element = await page.find('render-sprite');
    expect(element).toHaveClass('hydrated');
  });
});
