import { defineConfig } from '@playwright/test';

export default defineConfig({
  workers: 4,
  testDir: './tests',
  reporter: 'html',
  fullyParallel: true,


  use: {
    baseURL: 'http://localhost:3000/',
    headless: false,
    launchOptions:{slowMo:1000}
  },



  webServer: {
    command:'npm start',
    url: 'http://localhost:3000/',
    reuseExistingServer: true
  }
});
