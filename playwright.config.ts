import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://www.artstom.cz/ru/',
    headless: false,
    ignoreHTTPSErrors: true, 
    navigationTimeout: 60000,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
});