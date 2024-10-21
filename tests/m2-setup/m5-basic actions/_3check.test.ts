import {expect, test} from '@playwright/test'

test('check test', async ({page}) => {
    await page.goto('');

    const checkbox = page.getByRole('checkbox');
    const textarea = page.locator('#textarea');
    const message = 'msg';

    await checkbox.check();

    await textarea.fill(message);

    await expect(textarea).toHaveValue(message);
});