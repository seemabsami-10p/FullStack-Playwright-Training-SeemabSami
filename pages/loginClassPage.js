import { defineConfig } from '@playwright/test';
import {URL, USERNAME, PASSWORD} from '../test-constants/constants.js';
const {expect}= require('@playwright/test');


class loginClass{

  /**
   * @param {import('@playwright/test').Page} page
*/

    constructor(page){
        this.page = page;

        //login locators

        this.name =page.locator('#input-0');
        this.password =page.locator('#input-2');
        this.signIn = page.getByText('Sign In');
        this.welcomeText= page.getByText("Hello Owner!");

        //Update Profile
        this.Profile= page.locator('a[href="/account/profile"]');
        this.editProfile= page.locator('//*[@id="app"]/div[1]/main/div/div[2]/div/div/div[6]/div/div[1]/div[1]/div/div/div[1]/img');
        this.displayName= page.locator('//*[@id="input-132"]');
        this.updateProfile = page.getByText("Save");

        //Logout locators
        this.Settings= page.getByText('Settings');
        this.Logout= page.getByText('Log out');
        

    }

    async Login(){
       
        await this.name.click();
        await this.name.fill(USERNAME);
        await this.password.click();
        await this.password.fill(PASSWORD);
        await this.signIn.click();

    }

    async updatePro(uName){

        await this.Profile.click();
        await this.editProfile.click();
        await this.displayName.click();
        await this.displayName.fill(uName);
        await this.page.waitForTimeout(3000);
        await this.updateProfile.click();

    }

    async Logout1(){

        await this.Settings.click();
        await this.Logout.click();

    }

}
module.exports={loginClass};