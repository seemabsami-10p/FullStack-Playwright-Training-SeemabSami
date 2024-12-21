import { waitForServer } from 'selenium-webdriver/http/util.js';
import {SURL,fName,lName,bName,pNum,newPass,cardNo} from '../test-constants/constants.js';
const Mailosaur = require('mailosaur');
const { test, expect } = require('@playwright/test');

const apiKey= 'ZAf23LUdeo0YzUzxqU7ym1M2CPDbfbtN';
const mailosaur= new Mailosaur(apiKey);
const serverId ='474iylbg';
const serverDomain ='@474iylbg.mailosaur.net';


test('Signup and Relogin', async ({ page }) =>{

  // New Email generation while execution

  const randomString = new Date().getTime()
  let emailAddress = randomString.toString()+serverDomain.toString();


    //Signup Connect business

  await page.goto(SURL);
  await page.getByLabel('For business: I want to').check();
  await page.getByLabel('First Name *').click();
  await page.getByLabel('First Name *').fill(fName);
  await page.getByLabel('Last Name *').click();
  await page.getByLabel('Last Name *').fill(lName);
  await page.getByLabel('Business Name *').click();
  await page.getByLabel('Business Name *').fill(bName);
  await page.getByLabel('Business Email Address *').click();
  await page.getByLabel('Business Email Address *').fill(emailAddress);
  await page.getByPlaceholder('Phone Number *').click();
  await page.getByPlaceholder('Phone Number *').fill(pNum);
  await page.locator('#input-14').fill(newPass);
  await page.locator('#checkbox-17').check();
  await page.getByRole('button', { name: 'Continue to Business Profile' }).click();
  await page.getByLabel('Immigration and Refugee').check();
  await page.getByRole('button', { name: 'Create My Account' }).click();

  //logout
  await page.getByText('Logout').click();

  //Relogin
  await page.locator('#input-0').click();
  await page.locator('#input-0').fill(emailAddress);
  await page.locator('#input-2').click();
  await page.locator('#input-2').fill(newPass);
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.goto('https://app.pur.jeenie.com/account/call')
});