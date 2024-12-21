
import {URL, USERNAME, PASSWORD, fName} from '../test-constants/constants.js';
const { test, expect } = require('@playwright/test');

test('Implementing functions', async ({ page }) => {

   await Login(page);
   await profileUpdate(page);
   await Logout(page);

});

//Login function 

async function Login(page){
   await page.goto(URL);
   await page.locator('#input-0').click();
   await page.locator('#input-0').fill(USERNAME);
   await page.locator('#input-2').click();
   await page.locator('#input-2').fill(PASSWORD);
   expect(page.getByRole('Sign In',{name:'Sign In'})).toBeEnabled;
   await page.getByText('Sign In').click();
   expect(page.getByText("Hello Owner!").isVisible);
   //console.log ('User logged in successfully');

}


//profileUpdate function
async function profileUpdate(page){
   
  await page.locator('a[href="/account/profile"]').click();
  await page.locator('//*[@id="app"]/div[1]/main/div/div[2]/div/div/div[6]/div/div[1]/div[1]/div/div/div[1]/img').click();
  await page.locator('//*[@id="input-132"]').click();
  await page.locator('//*[@id="input-132"]').fill(fName);
  await page.getByText("Save").click();

}

//Logout
async function Logout (page){
   await page.getByText('Settings').click();
   await page.getByText('Log out').click();
}