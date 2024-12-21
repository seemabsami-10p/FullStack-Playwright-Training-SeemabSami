import { test, expect } from '@playwright/test';
const bookingData = require('../playwright-constants/booking-constants.json');

test('create booking', async ({ request }) => {
 //Send the POST request to the API
    const Response = await request.post("https://restful-booker.herokuapp.com/booking", {
       data: bookingData
});

  // Log the response JSON to the console
  console.log(await Response.json());

  // Assert the response status and check if it's OK
  expect(Response.ok()).toBeTruthy();
  expect(Response.status()).toBe(200);
  const responseBody = await Response.json();
  expect(responseBody.booking).toHaveProperty("firstname" , "tick");
  expect(responseBody.booking).toHaveProperty("lastname","Brown");
  expect(responseBody.booking).toHaveProperty("totalprice", 120);
  expect(responseBody.booking).toHaveProperty("depositpaid",false);

});
