import { newE2EPage } from '@stencil/core/testing';

describe('spinner-circular', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<spinner-circular></spinner-circular>');

    const element = await page.find('spinner-circular');
    expect(element).toHaveClass('hydrated');
  });
});
