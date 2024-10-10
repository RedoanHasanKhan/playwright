import {test, chromium} from '@playwright/test';

test('Test with page fixures', async ({page}) => {
    await page.goto('https://github.com/RedoanHasanKhan/playwright');
    console.log("Text content: ", await page.title());
});

test('test other fixures', async({page, browser, context, browserName})=>{

});