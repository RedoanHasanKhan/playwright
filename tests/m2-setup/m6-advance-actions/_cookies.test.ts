import {test} from '@playwright/test'

test('test cookies', async({page})=>{

    page.goto('/');

    console.log(await page.context().cookies()); //Printing cookies

    await page.context().addCookies([{
        name: 'cookie1',
        value:'abc',
        url: 'https://playwright.dev'
    }]);

    console.log(await page.context().cookies());
    await page.context().clearCookies();
    console.log(await page.context().cookies());
    

})