//Puppeteer docs: https://pptr.dev/
//Jest-puppeteer docs: https://github.com/smooth-code/jest-puppeteer#recipes
//Puppeteer-expect docs: https://github.com/smooth-code/jest-puppeteer/blob/master/packages/expect-puppeteer/README.md#api

describe('Google', () => {
  beforeAll(async () => {
    await page.goto('https://google.com');
  });

  it('should be titled "Google"', async () => {
    await expect(page.title()).resolves.toMatch('Google');
  });

  it('should have a button called Google Search"', async () => {
    await expect(page).toClick('input', { value: 'Google Search' });
  });
});
