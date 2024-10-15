import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByLabel('First name').click();
  await page.getByLabel('First name').fill('asasdad');
  await page.getByRole('button', { name: 'Register' }).click();
  await page.getByText('Please enter a valid email').click();
  await page.getByText('Valid last name is required').click();
});