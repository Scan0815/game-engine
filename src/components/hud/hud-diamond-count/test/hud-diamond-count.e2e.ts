import { newE2EPage } from '@stencil/core/testing';

describe('hud-diamond-count', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hud-diamond-count></hud-diamond-count>');

    const element = await page.find('hud-diamond-count');
    expect(element).toHaveClass('hydrated');
  });
});
