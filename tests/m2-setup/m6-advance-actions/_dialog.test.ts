import {expect, test} from '@playwright/test'

test('test dialog', async({page})=>{

    page.on('dialog', dialog => dialog.accept());

    await page.goto('/');

    const input = page.getByLabel('First name');
    await input.fill('Redoan');

    await page.getByRole('button',{name:'Clear'}).click();
    await expect(input).toHaveValue('');
})