import { newE2EPage } from '@stencil/core/testing';

describe('render-scene', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<render-game></render-game>');
    const element = await page.find('render-scene');
    expect(element).toHaveClass('hydrated');
  });
});
