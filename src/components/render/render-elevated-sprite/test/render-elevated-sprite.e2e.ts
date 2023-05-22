import { newE2EPage } from '@stencil/core/testing';

describe('render-elevated-sprite', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<render-elevated-sprite></render-elevated-sprite>');

    const element = await page.find('render-elevated-sprite');
    expect(element).toHaveClass('hydrated');
  });
});
