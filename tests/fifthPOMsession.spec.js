
const { test, expect } = require('@playwright/test');
import {URL, fName } from '../test-constants/constants.js';
import {loginClass} from '../pages/loginClassPage.js';

let loginObj ='';
test('POM', async ({ page }) => {

//Creating Object
const loginObj = new loginClass(page);
            
await page.goto(URL);

//Calling login function
await loginObj.Login(page);

//Calling Update profile
 await loginObj.updatePro(fName);

//Calling Logout
 await loginObj.Logout1(page);

 //Login assertions 
expect(page.getByRole('Sign In', { name: 'Sign In' })).toBeEnabled;
console.log('button is enabled');
expect(page.getByText("Hello Owner!").isVisible);
console.log('User logged in successfully');

 });

