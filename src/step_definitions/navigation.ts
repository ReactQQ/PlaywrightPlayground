import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';

let browser: Browser;
let page: Page;

Given('I have a lunched browser', async () => {
  console.log('wwqwqwqwq');
  browser = await chromium.launch();
});
When('I enter the {string} url into navigation', async (url: string) => {
  page = await browser.newPage();
  await page.goto(url);
})

Then('The page with ulr: {string} will be loaded', async (url: string) => {
  await page.waitForURL(url)
})