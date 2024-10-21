import { test } from "playwright/test";
//import fs from 'fs';
test.setTimeout(60000);
test('SS', async({page})=>{
    page.goto('/');
    await page.getByRole('button',{name:'Register'}).click();
    const s: Buffer = await page.screenshot({
        path: 'screenshots/screenshot.png'
        
    });
});