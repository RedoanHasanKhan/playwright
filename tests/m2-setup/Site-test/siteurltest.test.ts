import { test, expect } from '@playwright/test';
import * as xlsx from 'xlsx';
import * as fs from 'fs';
import path from 'path';
import ExcelJS from 'exceljs';

test.setTimeout(300000);

test.describe.parallel('Test URLs from Excel file in parallel', () => {

  test('Parallel URL Test with Screenshot in Excel', async ({ page }) => {

    const inputExcel = './tests/m2-setup/Site-test/inputUrls.xlsx';
    const outputExcel = './tests/m2-setup/Site-test/result_with_screenshots.xlsx';
    const screenshotDir = './tests/m2-setup/Site-test/screenshots';

    // Create the screenshots directory if it doesn't exist
    if (!fs.existsSync(screenshotDir)) {
      fs.mkdirSync(screenshotDir);
    }

    // Function to read URLs from Excel
    async function readUrlsFromExcel(filePath: string): Promise<string[]> {
      const workbook = xlsx.readFile(filePath);
      const sheetName = workbook.SheetNames[0]; // Assuming URLs are in the first sheet
      const sheet = workbook.Sheets[sheetName];
      const urls: string[] = xlsx.utils.sheet_to_json(sheet, { header: 1 })
        .map((row: any[]) => row[0])  // Assuming URLs are in the first column
        .filter((url: string) => typeof url === 'string' && url.length > 0);  // Filter out empty strings

      return urls;
    }

    // Read URLs from input Excel file
    const urls = await readUrlsFromExcel(inputExcel);
    const results: Array<{ url: string, status: string, screenshotPath?: string }> = [];

    // Iterate through each URL in parallel
    for (const url of urls) {
      console.log(`Checking URL: ${url}`);
      try {
        // Limit page load to 10 seconds and navigate
        await page.goto(url, { timeout: 10000 });  // Timeout after 10 seconds
        await page.waitForLoadState('networkidle');  // Wait for full page load if it succeeds within 10 seconds
        const fileName = url.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.png';
        const filePath = path.join(screenshotDir, fileName);
        await page.screenshot({ path: filePath });
        results.push({ url, status: "Pass", screenshotPath: filePath });
      } catch (error) {
        console.log(`Error or timeout for URL: ${url}`, error);
        results.push({ url, status: "Fail" });
      }
    }

    // Write results and screenshots to the Excel file using exceljs
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('Results');
    
    // Add column headers
    sheet.columns = [
      { header: 'URL', key: 'url', width: 30 },
      { header: 'Status', key: 'status', width: 10 },
      { header: 'Screenshot', key: 'screenshot', width: 30 }
    ];

    // Add the URLs, status, and screenshots
    for (const [index, result] of results.entries()) {
      const row = sheet.addRow({
        url: result.url,
        status: result.status,
      });

      if (result.screenshotPath) {
        const imageId = workbook.addImage({
          filename: result.screenshotPath,
          extension: 'png',
        });

        sheet.addImage(imageId, {
          tl: { col: 2, row: index + 1 },
          ext: { width: 150, height: 150 },  // Adjust image size as needed
        });
      }
    }

    // Save the Excel workbook
    await workbook.xlsx.writeFile(outputExcel);

    console.log(`Results saved in ${outputExcel}`);

  });
});
