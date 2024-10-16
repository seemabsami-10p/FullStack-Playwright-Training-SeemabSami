const { test, expect } = require('@playwright/test');

test('Visit Website', async ({ page }) => {

    // Automation code written here
    await page.goto('https://app.pur.jeenie.com/');
    await page.locator("#input-29").click();
    await page.locator("#input-29").fill("owner-enterprise-payg@example.com");
    await page.locator("#input-33").fill("password");
    expect(await page.getByRole('loginbtn',{id:'loginbtn'})).toBeEnabled;
    await page.getByRole('button', { name: 'Login' });
    //await page.waitForLoadState("https://app.pur.jeenie.com/account/call");
  
  });

