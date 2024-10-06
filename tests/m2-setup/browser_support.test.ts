import {test, chromium, webkit, firefox } from '@playwright/test';

test('Browser support demo', async () => {
    for (const browsertype of [chromium, webkit, firefox]){
        console.log('Running', browsertype.name());

        const browser =await browsertype.launch();
        const page = await browser.newPage();

        await page.goto('https://www.google.com/');
        await page.screenshot({path: `pw-${browsertype.name()}.png`})

        await page.close();
        await browser.close();
    } 
})