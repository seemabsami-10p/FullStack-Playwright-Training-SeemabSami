import { test, expect } from '@playwright/test';
import {faker} from '@faker-js/faker';
const {DateTime}= require('luxon');


const randomFirstName = faker.person.firstName();
const randomLastName = faker.person.lastName();
const randomNumber = faker.number.int(4);
const currentDate = DateTime.now().toFormat('yyyy-mm-dd');
const currentDatePlusFive = DateTime.now().plus({days:5}).toFormat('yyyy-mm-dd');


test('dynamic data', async ({ request }) => {
 //Send the POST request to the API
    const Response = await request.post("https://restful-booker.herokuapp.com/booking", {
        data:{
            "firstname": randomFirstName,
            "lastname": randomLastName,
            "totalprice": randomNumber,
            "depositpaid": true,
            "bookingdates": {
              "checkin": currentDate,
              "checkout": currentDatePlusFive
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
  expect(responseBody.booking).toHaveProperty("firstname" ,randomFirstName);
  expect(responseBody.booking).toHaveProperty("lastname",randomLastName);
  expect(responseBody.booking).toHaveProperty("totalprice", randomNumber);
  expect(responseBody.booking).toHaveProperty("depositpaid",true);

});
