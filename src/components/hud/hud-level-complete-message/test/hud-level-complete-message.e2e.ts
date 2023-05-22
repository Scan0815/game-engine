import { newE2EPage } from '@stencil/core/testing';

describe('hud-level-complete-message', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hud-level-complete-message></hud-level-complete-message>');

    const element = await page.find('hud-level-complete-message');
    expect(element).toHaveClass('hydrated');
  });
});
