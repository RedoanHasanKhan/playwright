import {test} from '@playwright/test'

test ('Multiple Matches fail', async ({page}) => {
    await page.goto('/');

    const link = page.getByRole('link');
    console.log(await link.first().textContent());
    await link.first().click();

})