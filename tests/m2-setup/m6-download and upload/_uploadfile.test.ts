import { expect, test } from "playwright/test";
//import fs from 'fs';

test('upload files', async({page})=>{
    await page.goto('/loans.html');
    await page.locator('input[type="file"]').setInputFiles(['download/dummy.pdf']);
});