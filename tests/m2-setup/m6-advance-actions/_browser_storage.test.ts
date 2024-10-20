import {test} from '@playwright/test'

const name = 'Redoan';
 
test('browser storage', async({page})=>{

    await page.goto('/');
    await page.getByLabel('First name').fill(name);
    await page.getByRole('button', {name: 'Save input'}).click();

    const storage = await page.context().storageState();
    console.log(storage.cookies);
    console.log(storage.origins[0].localStorage);
})