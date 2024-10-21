import { defineConfig } from '@playwright/test';

export default defineConfig({
  workers:4,
  testDir: './tests',
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000/',
    headless: true,
    launchOptions:{slowMo:1000}
  },
  webServer: {
    command:'npm start',
    url: 'http://localhost:3000/',
    reuseExistingServer: true
  }
});
