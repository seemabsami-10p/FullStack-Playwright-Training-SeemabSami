import { waitForServer } from 'selenium-webdriver/http/util.js';
import {SURL,fName,lName,bName,pNum,newPass,cardNo} from '../test-constants/constants.js';
const Mailosaur = require('mailosaur');
const { test, expect } = require('@playwright/test');

const apiKey= 'ZAf23LUdeo0YzUzxqU7ym1M2CPDbfbtN';
const mailosaur= new Mailosaur(apiKey);
const serverId ='474iylbg';
const serverDomain ='@474iylbg.mailosaur.net';


test('Signup and Relogin', async ({ page }) => {

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


  //Enter Verification Code
  
  await page.locator(".text-info text-decoration-underline cursor-pointer").click();
  const email= await mailosaur.messages.get(serverId,{sentTo:emailAddress});
  expect(email.subject).toEqual('Your Jeenie Account Verification Code');

  //Extracting code and entering it
  let vCode=email.html.codes;
  await page.goto('https://app.pur.jeenie.com/v3/on-boarding/account-verification?accountType=business&signup_plan=connect');
  await page.getByLabel('Please enter OTP character 1').fill(vCode);


  //Enter Card information 
  await page.locator.name("cardnumber").fill (cardNo);
  await page.locator.name('exp-date').fill('10/30');
  await page.locator('#card-cvc').fill('424');
  await page.getByRole('button', { name: 'Save Payment Method' }).click();
  await page.getByRole('button', { name: 'Activate My Account' }).click();



 









 /* await page1.goto('https://www.mailinator.com/v4/public/inboxes.jsp');
  await page1.getByLabel('inbox field').click();
  await page1.getByLabel('inbox field').fill(Email);
  await page1.getByLabel('inbox field').press('Enter');
  //await page1.getByRole('cell', { name: 'Your Jeenie Account' }).click();
  await page1.locator('iframe[name="html_msg_body"]').contentFrame().getByText('406561').click();*/
  //await page.goto('https://app.pur.jeenie.com/v3/on-boarding/sign-up?accountType=business&signup_plan=connect');
  /*await page1.goto('https://www.mailinator.com/v4/public/inboxes.jsp');
  await page1.getByLabel('inbox field').click();
  await page1.getByLabel('inbox field').fill('reg');
  await page1.getByLabel('inbox field').press('Enter');
  await page1.getByRole('cell', { name: 'Your Jeenie Account' }).click();
  await page1.locator('iframe[name="html_msg_body"]').contentFrame().getByText('406561').click();
  await page.getByLabel('Please enter OTP character 1').click(); */


  /*await page.goto('https://app.pur.jeenie.com/account/call');
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('heading', { name: 'Hello connect!' }).click();
  await page.getByRole('banner').getByRole('link').click();
  await page.getByRole('banner').getByRole('link').click();


  Logout 
  await page.getByRole('link', { name: 'Settings' }).click();
  await page.getByRole('button', { name: 'Log out' }).click(); 

  Relogin
  await page.locator('#input-0').click();
  await page.locator('#input-0').fill(Email);
  await page.locator('#input-2').click();
  await page.locator('#input-2').fill(newpass);
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.goto('https://app.pur.jeenie.com/account/call');*/
});
