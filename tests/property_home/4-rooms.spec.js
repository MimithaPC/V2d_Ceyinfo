import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    
    test.setTimeout(120000);

    // Development

    await page.goto('https://v3.ceyinfo.com/', { waitUntil: 'networkidle' });
    await page.getByRole('navigation').getByRole('link', { name: 'Sign in' }).click();
    await page.getByRole('textbox', { name: 'Work email' }).click();
    await page.getByRole('textbox', { name: 'Work email' }).fill('mimithaprabodani@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('123456789');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.waitForTimeout(2000);   
    await page.getByRole('button', { name: 'Rooms & Rates ▼' }).click();
    await page.getByRole('link', { name: 'Rooms' }).click();
    await page.getByRole('button', { name: 'Collapse sidebar' }).click();


    await page.getByRole('button', { name: 'Add room' }).click();
    await page.getByRole('button', { name: '+ Add a single room' }).click();
    await page.getByRole('textbox', { name: 'Room Number *' }).click();
    await page.getByRole('textbox', { name: 'Room Number *' }).fill('100');
    await page.locator('#room-cat').selectOption('01KYH8XZWD5BS8N4NETTWZE2YZ'); 
    await page.locator('#room-type').selectOption('01KYH8XKX3N3P5DH456YJPXARH');
    await page.locator('#room-floor').selectOption('01KYH9D1XY04ZRZMY8MS5CJ3D4'); 
    await page.getByRole('spinbutton', { name: 'Room Size (m²)' }).click();
    await page.getByRole('spinbutton', { name: 'Room Size (m²)' }).fill('100');
    await page.getByRole('button', { name: 'Add Room' }).click();
    await page.waitForTimeout(1000);

    await page.getByRole('button', { name: 'Add room' }).click();
    await page.getByRole('button', { name: '+ Add a single room' }).click();
    await page.getByRole('textbox', { name: 'Room Number *' }).click();
    await page.getByRole('textbox', { name: 'Room Number *' }).fill('101');
    await page.getByLabel('Primary Room Category *').selectOption('01KYH8XZWD5BS8N4NETTWZE2YZ');
    await page.getByLabel('Primary Room Type *').selectOption('01KYH8XPHFQV468AH2XW6ZXC84');
    await page.getByLabel('Floor').selectOption('01KYH9D1XY04ZRZMY8MS5CJ3D4');
    await page.getByRole('spinbutton', { name: 'Room Size (m²)' }).click();
    await page.getByRole('spinbutton', { name: 'Room Size (m²)' }).fill('100');
    await page.getByRole('button', { name: 'Add Room' }).click();
    await page.waitForTimeout(1000);

    await page.getByRole('button', { name: 'Add room' }).click();
    await page.getByRole('button', { name: '+ Add a single room' }).click();
    await page.getByRole('textbox', { name: 'Room Number *' }).click();
    await page.getByRole('textbox', { name: 'Room Number *' }).fill('200');
    await page.getByLabel('Primary Room Category *').selectOption('01KYH8YA471MPYEQHS4ACBASV4');
    await page.getByLabel('Primary Room Type *').selectOption('01KYH8XKX3N3P5DH456YJPXARH');
    await page.getByLabel('Floor').selectOption('01KYH9D4KVSZ2K2G30X4Y93XJV');
    await page.getByRole('spinbutton', { name: 'Room Size (m²)' }).click();
    await page.getByRole('spinbutton', { name: 'Room Size (m²)' }).fill('100');
    await page.getByRole('button', { name: 'Add Room' }).click();
    await page.waitForTimeout(1000);

    await page.getByRole('button', { name: 'Add room' }).click();
    await page.getByRole('button', { name: '+ Add a single room' }).click();
    await page.getByRole('textbox', { name: 'Room Number *' }).click();
    await page.getByRole('textbox', { name: 'Room Number *' }).fill('201');
    await page.getByLabel('Primary Room Category *').selectOption('01KYH8YA471MPYEQHS4ACBASV4');
    await page.getByLabel('Primary Room Type *').selectOption('01KYH8XPHFQV468AH2XW6ZXC84');
    await page.getByLabel('Floor').selectOption('01KYH9D4KVSZ2K2G30X4Y93XJV');
    await page.getByRole('spinbutton', { name: 'Room Size (m²)' }).click();
    await page.getByRole('spinbutton', { name: 'Room Size (m²)' }).fill('100');
    await page.getByRole('button', { name: 'Add Room' }).click();
    await page.waitForTimeout(2000);

   
   
   
   
   
   
   
   
    // //  Production

    // await page.goto('https://hotel-erp.ceyinfo.com/', { waitUntil: 'networkidle' });
    // await page.getByRole('navigation').getByRole('link', { name: 'Sign in' }).click();
    // await page.getByRole('textbox', { name: 'Work email' }).click();
    // await page.getByRole('textbox', { name: 'Work email' }).fill('mimithaprabodani@gmail.com');
    // await page.getByRole('textbox', { name: 'Password' }).click();
    // await page.getByRole('textbox', { name: 'Password' }).fill('123456789');
    // await page.getByRole('button', { name: 'Sign in' }).click();
    // await page.waitForTimeout(2000);   
    // await page.getByRole('button', { name: 'Rooms & Rates ▼' }).click();
    // await page.getByRole('link', { name: 'Rooms' }).click();
    // await page.getByRole('button', { name: 'Collapse sidebar' }).click();


    // await page.getByRole('button', { name: 'Add room' }).click();
    // await page.getByRole('button', { name: '+ Add a single room' }).click();
    // await page.getByRole('textbox', { name: 'Room Number *' }).click();
    // await page.getByRole('textbox', { name: 'Room Number *' }).fill('100');
    // await page.locator('#room-cat').selectOption('01KYH8XZWD5BS8N4NETTWZE2YZ'); 
    // await page.locator('#room-type').selectOption('01KYH8XKX3N3P5DH456YJPXARH');
    // await page.locator('#room-floor').selectOption('01KYH9D1XY04ZRZMY8MS5CJ3D4'); 
    // await page.getByRole('spinbutton', { name: 'Room Size (m²)' }).click();
    // await page.getByRole('spinbutton', { name: 'Room Size (m²)' }).fill('100');
    // await page.getByRole('button', { name: 'Add Room' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('button', { name: 'Add room' }).click();
    // await page.getByRole('button', { name: '+ Add a single room' }).click();
    // await page.getByRole('textbox', { name: 'Room Number *' }).click();
    // await page.getByRole('textbox', { name: 'Room Number *' }).fill('101');
    // await page.getByLabel('Primary Room Category *').selectOption('01KYH8XZWD5BS8N4NETTWZE2YZ');
    // await page.getByLabel('Primary Room Type *').selectOption('01KYH8XPHFQV468AH2XW6ZXC84');
    // await page.getByLabel('Floor').selectOption('01KYH9D1XY04ZRZMY8MS5CJ3D4');
    // await page.getByRole('spinbutton', { name: 'Room Size (m²)' }).click();
    // await page.getByRole('spinbutton', { name: 'Room Size (m²)' }).fill('100');
    // await page.getByRole('button', { name: 'Add Room' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('button', { name: 'Add room' }).click();
    // await page.getByRole('button', { name: '+ Add a single room' }).click();
    // await page.getByRole('textbox', { name: 'Room Number *' }).click();
    // await page.getByRole('textbox', { name: 'Room Number *' }).fill('200');
    // await page.getByLabel('Primary Room Category *').selectOption('01KYH8YA471MPYEQHS4ACBASV4');
    // await page.getByLabel('Primary Room Type *').selectOption('01KYH8XKX3N3P5DH456YJPXARH');
    // await page.getByLabel('Floor').selectOption('01KYH9D4KVSZ2K2G30X4Y93XJV');
    // await page.getByRole('spinbutton', { name: 'Room Size (m²)' }).click();
    // await page.getByRole('spinbutton', { name: 'Room Size (m²)' }).fill('100');
    // await page.getByRole('button', { name: 'Add Room' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('button', { name: 'Add room' }).click();
    // await page.getByRole('button', { name: '+ Add a single room' }).click();
    // await page.getByRole('textbox', { name: 'Room Number *' }).click();
    // await page.getByRole('textbox', { name: 'Room Number *' }).fill('201');
    // await page.getByLabel('Primary Room Category *').selectOption('01KYH8YA471MPYEQHS4ACBASV4');
    // await page.getByLabel('Primary Room Type *').selectOption('01KYH8XPHFQV468AH2XW6ZXC84');
    // await page.getByLabel('Floor').selectOption('01KYH9D4KVSZ2K2G30X4Y93XJV');
    // await page.getByRole('spinbutton', { name: 'Room Size (m²)' }).click();
    // await page.getByRole('spinbutton', { name: 'Room Size (m²)' }).fill('100');
    // await page.getByRole('button', { name: 'Add Room' }).click();
    // await page.waitForTimeout(2000);


});
