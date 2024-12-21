import { test, expect } from '@playwright/test';

test('create booking', async ({ request }) => {
 //Send the POST request to the API
    const Response = await request.post("https://restful-booker.herokuapp.com/booking", {
       data:{
        "firstname": "Jim",
        "lastname": "Brown",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
          "checkin": "2018-01-01",
          "checkout": "2019-01-01"
        },
        "additionalneeds": "Breakfast"
      }
});

  // Log the response JSON to the console
  console.log(await Response.json());

  // Assert the response status and check if it's OK
  expect(Response.ok()).toBeTruthy();
  expect(Response.status()).toBe(200);
  const responseBody = await Response.json();
  expect(responseBody.booking).toHaveProperty("firstname" , "Jim");
  expect(responseBody.booking).toHaveProperty("lastname","Brown");
  expect(responseBody.booking).toHaveProperty("totalprice", 111);
  expect(responseBody.booking).toHaveProperty("depositpaid",false);

});
