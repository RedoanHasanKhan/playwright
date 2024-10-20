import {expect, test} from '@playwright/test'

test('Assertion example', async({page})=>{
    await page.goto('/');

    await expect(page.getByTestId('location')).toContainText('You are visiting us from New York');
    await expect(page.getByTestId('location')).toBeVisible();
    //await expect(page.getByTestId('location')).not.toBeVisible();
});