import { newSpecPage } from '@stencil/core/testing';
import { SpinnerCircular } from '../spinner-circular';

describe('spinner-circular', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SpinnerCircular],
      html: `<spinner-circular></spinner-circular>`,
    });
    expect(page.root).toEqualHtml(`
      <spinner-circular>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </spinner-circular>
    `);
  });
});
