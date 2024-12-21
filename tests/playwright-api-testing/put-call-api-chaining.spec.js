import { test, expect } from '@playwright/test';
const bookingData = require('../playwright-constants/booking-constants.json');


let token;

test('API chaining', async ({ request }) => {
    
    //Authentication API
       const apiResponse = await request.post('https://restful-booker.herokuapp.com/booking/auth', {
        data:{
            "username" : "admin",
            "password" :  "password123"
        }
       });

       // get token from response body
       console.log(await apiResponse.json());
       expect(apiResponse.ok()).toBeTruthy();
       expect(apiResponse.status()).toBe(200);
       const responseBody = await apiResponse.json();
       token = responseBody.token;
       console.log("New token is :"+token);


       //get call before update
       const beforeUpdate = await request.get("https://restful-booker.herokuapp.com/booking/1");
       console.log(await beforeUpdate.json());
       const bBody= await beforeUpdate.json();
       expect(bBody.ok()).toBeTruthy();
       expect(bBody.status()).toBe(200);



       //Put data
       const updatedata= await request.put('https://restful-booker.herokuapp.com/booking/1',{
        headers:{
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            'Cookie' : `token=${token}`,
        },
        data: bookingData,
       });
       console.log(await updatedata.json());
        expect(updatedata.ok()).toBeTruthy();
        expect(updatedata.status()).toBe(200);
        const Body = await updatedata.json();
        expect(Body.booking).toHaveProperty("firstname" , "tick");
        expect(Body.booking).toHaveProperty("lastname","Brown");
        expect(Body.booking).toHaveProperty("totalprice", 120);
        expect(Body.booking).toHaveProperty("depositpaid",false);

        //get call after update
       const afterUpdate = await request.get("https://restful-booker.herokuapp.com/booking/1");
       console.log(await afterUpdate.json());
       expect(afterUpdate.ok()).toBeTruthy();
       expect(afterUpdate.status()).toBe(200);

    
     });