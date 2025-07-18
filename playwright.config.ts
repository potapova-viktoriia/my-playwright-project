import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
});