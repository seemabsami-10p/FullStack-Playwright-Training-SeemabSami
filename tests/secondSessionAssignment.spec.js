import {URL,USERNAME, PASSWORD} from '../test-constants/constants.js';
const { test, expect } = require('@playwright/test');

test('login', async ({ page }) => {

    // Login on Jeenie Test Envoirnment
    await page.goto(URL);
    await page.locator('#input-0').click();
    await page.locator('#input-0').fill(USERNAME);
    await page.locator('#input-2').click();
    await page.locator('#input-2').fill(PASSWORD);
    expect(page.getByRole('Sign In',{name:'Sign In'})).toBeEnabled;
    await page.getByText('Sign In').click();
    expect(page.getByText("Hello Owner!").isVisible);
    //console.log ('User logged in successfully');
  
  });

