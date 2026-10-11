import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  outputDir: 'test-results',
  use: { baseURL: 'http://localhost:5179', deviceScaleFactor: 1 },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'], channel: 'chrome', viewport: { width: 1440, height: 900 } } }, // local Google Chrome
    // WebKit: `pnpm exec playwright install webkit` timed out on this machine (network). Add back with:
    // { name: 'webkit', use: { ...devices['Desktop Safari'], viewport: { width: 1440, height: 900 } } },
  ],
  webServer: { command: 'pnpm exec vite --port 5179 --strictPort', url: 'http://localhost:5179/styles', reuseExistingServer: true },
});
