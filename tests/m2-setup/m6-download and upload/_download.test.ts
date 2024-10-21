import { expect, test } from "playwright/test";
//import fs from 'fs';

test('download object', async({page})=>{
    await page.goto('/savings.html');
    const downloadPromise = page.waitForEvent('download');
    await page.getByText('Download Our Offer').click();
    const download = await downloadPromise;

    const suggestedfilename = download.suggestedFilename();
    const filepath = 'download/'+ suggestedfilename;
    await download.saveAs(filepath);

    expect(await download.failure()).toBeNull();
});