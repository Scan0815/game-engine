import { newE2EPage } from '@stencil/core/testing';

describe('render-game-object-layer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<render-game-object-layer></render-game-object-layer>');

    const element = await page.find('render-game-object-layer');
    expect(element).toHaveClass('hydrated');
  });
});
