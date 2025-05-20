import { chromium, Browser, Page } from 'playwright';

let browser: Browser;
let page: Page;

beforeAll(async () => {
  browser = await chromium.launch();
  page = await browser.newPage();
});

afterAll(async () => {
  if (browser) {
    await browser.close();
  }
});

test('WP Title check Test', async () => {
  await page.goto('https://www.wp.pl');
  const title = await page.title();
  expect(title).toBe('Wirtualna Polska - Wszystko co ważne - www.wp.pl');
});