import {test} from '@playwright/test'

test('console messages', async({page})=>{

    page.on('console', msg=>console.log(msg));

    await page.goto('/');
    await page.getByRole('button', {name: 'Register'}).click();
})