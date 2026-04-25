import {defineConfig, devices} from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  outputDir: './e2e/test-results',
  use: {
    baseURL: 'http://localhost:4200', // Deine Angular-Dev-URL
    trace: 'on-first-retry',
    video: 'on',
    hasTouch: true,
  },
  projects: [
    {
      name: 'webkit',
      use: {...devices['Desktop Safari']},
    },
    /* Hier ist der wichtige Teil für dein iPhone-Debuggen: */
    {
      name: 'Mobile Safari',
      use: {...devices['iPhone 13']}, // Simuliert Displaygröße, User-Agent und Touch-Support
    },
  ],
});
