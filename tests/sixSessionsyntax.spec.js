
const { test, expect } = require('@playwright/test');
const {loginClass} = require ('../pages/loginSyntaxPage.js');
import {URL, fName} from '../test-constants/constants.js';



test.describe ('POM',() => {
let loginObj ='';

test('Login', async ({ page }) => {

    // creating object
     const loginObj = new loginClass(page);

            await page.goto(URL);

            //Calling login function
            await loginObj.Login(page);

            //Login assertions 
            expect(page.getByRole('Sign In', { name: 'Sign In' })).toBeEnabled;
            console.log('button is enabled');
            expect(page.getByText("Hello Owner!").isVisible);
            console.log('User logged in successfully');

            //generating random string
            const ranName = await loginObj.generateRandomUsername();
            console.log(ranName);

            //Calling Update profile
            await loginObj.updatePro(ranName);

            //Calling Logout
            await loginObj.Logout1(page);

        });

    });






