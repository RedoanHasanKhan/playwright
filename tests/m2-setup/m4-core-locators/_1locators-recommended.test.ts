import {test, expect} from '@playwright/test';

test('Recommended built in locators examples', async({page})=> {
    await page.goto('');
    const firstname = page.getByLabel('First name');
    await firstname.fill('Sofia');
    await firstname.clear();

    await page.getByLabel('First name').fill('Andres');

    await page.getByRole('button', {name: 'Register', exact: true}).click();

    const warning = page.getByText('Valid first name is required');

    await expect(warning).toBeVisible();


});
