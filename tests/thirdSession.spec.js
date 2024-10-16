//import {URL, Username, Password} from '../test-constants/constants.js';

import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {

    //Signup Connect busniess
  await page.goto('https://app.pur.jeenie.com/v3/on-boarding?signup_plan=connect');
  await page.getByLabel('For business: I want to').check();
  await page.getByLabel('First Name *').click();
  await page.getByLabel('First Name *').fill('connect');
  await page.getByLabel('Last Name *').click();
  await page.getByLabel('Last Name *').fill('Plan');
  await page.getByLabel('Business Name *').click();
  await page.getByLabel('Business Name *').fill('Usercommercial');
  await page.getByLabel('Business Email Address *').click();
  await page.getByLabel('Business Email Address *').fill('reg@mailinator.com');
  await page.getByPlaceholder('Phone Number *').click();
  await page.getByPlaceholder('Phone Number *').fill('+92424242424');
  await page.getByLabel('Create a password *', { exact: true }).click();
  await page.getByLabel('Create a password *', { exact: true }).fill('Password@1234');
  await page.getByLabel('', { exact: true }).check();
  await page.getByRole('button', { name: 'Continue to Business Profile' }).click();
  await page.getByLabel('Immigration and Refugee').check();
  await page.getByRole('button', { name: 'Create My Account' }).click();
  await page.goto('https://app.pur.jeenie.com/v3/on-boarding/sign-up?accountType=business&signup_plan=connect');
  await page.goto('https://app.pur.jeenie.com/v3/on-boarding/account-verification?accountType=business&signup_plan=connect');
  await page1.goto('https://www.google.com/search?q=mailinator+inbox&oq=mailinator+inbox&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDc0MTFqMGoxqAIAsAIB&sourceid=chrome&ie=UTF-8');
  await page1.goto('https://www.mailinator.com/v4/public/inboxes.jsp');
  await page1.getByLabel('inbox field').click();
  await page1.getByLabel('inbox field').fill('reg');
  await page1.getByLabel('inbox field').press('Enter');
  await page1.getByRole('cell', { name: 'Your Jeenie Account' }).click();
  await page1.locator('iframe[name="html_msg_body"]').contentFrame().getByText('406561').click();
  await page.getByLabel('Please enter OTP character 1').click();
  await page.locator('#card-cvc').click();
  await page.getByRole('button', { name: 'Save Payment Method' }).click();
  await page.getByRole('button', { name: 'Activate My Account' }).click();
  await page.goto('https://app.pur.jeenie.com/account/call');
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('heading', { name: 'Hello connect!' }).click();
  await page.getByRole('banner').getByRole('link').click();
  await page.getByRole('banner').getByRole('link').click();

  //Logout 
  await page.getByRole('link', { name: 'Settings' }).click();
  await page.getByRole('button', { name: 'Log out' }).click();

  //Relogin
  await page.locator('#input-0').click();
  await page.locator('#input-0').fill('reg@mailinator.com');
  await page.locator('#input-2').click();
  await page.locator('#input-2').fill('Password@1234');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.goto('https://app.pur.jeenie.com/account/call');
});