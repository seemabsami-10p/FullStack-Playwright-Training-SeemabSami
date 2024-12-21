import { test, expect } from '@playwright/test';

test('Visit Website', async ({ request }) => {
 //Send the GET request to the API
    const apiResponse = await request.get('https://restful-booker.herokuapp.com/booking');

    // Log the response JSON to the console
    console.log(await apiResponse.json());

    // Assert the response status and check if it's OK
    expect(apiResponse.ok()).toBeTruthy();
    expect(apiResponse.status()).toBe(200);
  
  });
