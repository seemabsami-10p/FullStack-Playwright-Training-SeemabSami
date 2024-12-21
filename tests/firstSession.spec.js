const { test, expect } = require('@playwright/test');

test('Visit Website', async ({ page }) => {

    // Automation code written here
    await page.goto('https://app.pur.jeenie.com/');
  
  });