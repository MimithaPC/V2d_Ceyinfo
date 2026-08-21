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
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
    await page.waitForTimeout(2000);   
    await page.getByRole('button', { name: 'Rooms & Rates ▼' }).click();
    await page.getByRole('link', { name: 'Rooms' }).click();
    await page.getByRole('button', { name: 'Collapse sidebar' }).click();


    await page.getByRole('button', { name: 'Add room' }).click();
    await page.getByRole('button', { name: '+ Add a single room' }).click();

    await page.getByLabel('Building *').selectOption({ label: 'Main Building' });
    await page.getByLabel('Floor *').selectOption({ label: 'Ground Floor' });
    await page.getByRole('textbox', { name: 'Room Number *' }).click();
    await page.getByRole('textbox', { name: 'Room Number *' }).fill('100');
    await page.getByLabel('Room Category *').selectOption({ label: 'Standard' });
    await page.getByRole('checkbox', { name: 'Single' }).check();
    await page.getByRole('spinbutton', { name: 'Room Size (m²)' }).click();
    await page.getByRole('spinbutton', { name: 'Room Size (m²)' }).fill('100');
    await page.getByRole('button', { name: 'Add Room' }).click();
    await page.waitForTimeout(1000);

    await page.getByRole('textbox', { name: 'Room Number *' }).click();
    await page.getByRole('textbox', { name: 'Room Number *' }).fill('101');
    await page.getByLabel('Room Category *').selectOption({ label: 'Standard' });
    await page.getByRole('checkbox', { name: 'Double' }).check();
    await page.getByRole('spinbutton', { name: 'Room Size (m²)' }).click();
    await page.getByRole('spinbutton', { name: 'Room Size (m²)' }).fill('100');
    await page.getByRole('button', { name: 'Add Room' }).click();
    await page.waitForTimeout(1000);

    await page.getByRole('textbox', { name: 'Room Number *' }).click();
    await page.getByRole('textbox', { name: 'Room Number *' }).fill('102');
    await page.getByLabel('Room Category *').selectOption({ label: 'Deluxe' });
    await page.getByRole('checkbox', { name: 'Single' }).check();
    await page.getByRole('spinbutton', { name: 'Room Size (m²)' }).click();
    await page.getByRole('spinbutton', { name: 'Room Size (m²)' }).fill('100');
    await page.getByRole('button', { name: 'Add Room' }).click();
    await page.waitForTimeout(1000);

    await page.getByRole('textbox', { name: 'Room Number *' }).click();
    await page.getByRole('textbox', { name: 'Room Number *' }).fill('103');
    await page.getByLabel('Room Category *').selectOption({ label: 'Deluxe' });
    await page.getByRole('checkbox', { name: 'Double' }).check();
    await page.getByRole('spinbutton', { name: 'Room Size (m²)' }).click();
    await page.getByRole('spinbutton', { name: 'Room Size (m²)' }).fill('100');
    await page.getByRole('button', { name: 'Add Room' }).click();
    await page.waitForTimeout(1000);

    await page.getByLabel('Floor *').selectOption({ label: 'First Floor' });
    await page.getByRole('textbox', { name: 'Room Number *' }).click();
    await page.getByRole('textbox', { name: 'Room Number *' }).fill('200');
    await page.getByLabel('Room Category *').selectOption({ label: 'Standard' });
    await page.getByRole('checkbox', { name: 'Single' }).check();
    await page.getByRole('spinbutton', { name: 'Room Size (m²)' }).click();
    await page.getByRole('spinbutton', { name: 'Room Size (m²)' }).fill('100');
    await page.getByRole('button', { name: 'Add Room' }).click();
    await page.waitForTimeout(1000);

    await page.getByRole('textbox', { name: 'Room Number *' }).click();
    await page.getByRole('textbox', { name: 'Room Number *' }).fill('201');
    await page.getByLabel('Room Category *').selectOption({ label: 'Standard' });
    await page.getByRole('checkbox', { name: 'Double' }).check();
    await page.getByRole('spinbutton', { name: 'Room Size (m²)' }).click();
    await page.getByRole('spinbutton', { name: 'Room Size (m²)' }).fill('100');
    await page.getByRole('button', { name: 'Add Room' }).click();
    await page.waitForTimeout(1000);

    await page.getByRole('textbox', { name: 'Room Number *' }).click();
    await page.getByRole('textbox', { name: 'Room Number *' }).fill('202');
    await page.getByLabel('Room Category *').selectOption({ label: 'Deluxe' });
    await page.getByRole('checkbox', { name: 'Single' }).check();
    await page.getByRole('spinbutton', { name: 'Room Size (m²)' }).click();
    await page.getByRole('spinbutton', { name: 'Room Size (m²)' }).fill('100');
    await page.getByRole('button', { name: 'Add Room' }).click();
    await page.waitForTimeout(1000);

    await page.getByRole('textbox', { name: 'Room Number *' }).click();
    await page.getByRole('textbox', { name: 'Room Number *' }).fill('203');
    await page.getByLabel('Room Category *').selectOption({ label: 'Deluxe' });
    await page.getByRole('checkbox', { name: 'Double' }).check();
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

    // await page.getByLabel('Building *').selectOption('01KZB1H2Q5NYWAYC0XV8KGQT15');
    // await page.getByLabel('Floor *').selectOption('01KZB1H5B41155NXGZ2N3ER0J9');
    // await page.getByRole('textbox', { name: 'Room Number *' }).click();
    // await page.getByRole('textbox', { name: 'Room Number *' }).fill('100');
    // await page.getByLabel('Room Category *').selectOption('01KZATHEKKG5SMDJ7F02YYNFG2');
    // await page.getByRole('checkbox', { name: 'Single' }).check();
    // await page.getByRole('spinbutton', { name: 'Room Size (m²)' }).click();
    // await page.getByRole('spinbutton', { name: 'Room Size (m²)' }).fill('100');
    // await page.getByRole('button', { name: 'Add Room' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('textbox', { name: 'Room Number *' }).click();
    // await page.getByRole('textbox', { name: 'Room Number *' }).fill('101');
    // await page.getByLabel('Room Category *').selectOption('01KZATHEKKG5SMDJ7F02YYNFG2');
    // await page.getByRole('checkbox', { name: 'Double' }).check();
    // await page.getByRole('spinbutton', { name: 'Room Size (m²)' }).click();
    // await page.getByRole('spinbutton', { name: 'Room Size (m²)' }).fill('100');
    // await page.getByRole('button', { name: 'Add Room' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('textbox', { name: 'Room Number *' }).click();
    // await page.getByRole('textbox', { name: 'Room Number *' }).fill('102');
    // await page.getByLabel('Room Category *').selectOption('01KZATHR69C43B9SX3ZZDED6KW');
    // await page.getByRole('checkbox', { name: 'Single' }).check();
    // await page.getByRole('spinbutton', { name: 'Room Size (m²)' }).click();
    // await page.getByRole('spinbutton', { name: 'Room Size (m²)' }).fill('100');
    // await page.getByRole('button', { name: 'Add Room' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('textbox', { name: 'Room Number *' }).click();
    // await page.getByRole('textbox', { name: 'Room Number *' }).fill('103');
    // await page.getByLabel('Room Category *').selectOption('01KZATHR69C43B9SX3ZZDED6KW');
    // await page.getByRole('checkbox', { name: 'Double' }).check();
    // await page.getByRole('spinbutton', { name: 'Room Size (m²)' }).click();
    // await page.getByRole('spinbutton', { name: 'Room Size (m²)' }).fill('100');
    // await page.getByRole('button', { name: 'Add Room' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByLabel('Floor *').selectOption('01KZB1H80E4MFR6E2B2W6G8JMN');
    // await page.getByRole('textbox', { name: 'Room Number *' }).click();
    // await page.getByRole('textbox', { name: 'Room Number *' }).fill('200');
    // await page.getByLabel('Room Category *').selectOption('01KZATHEKKG5SMDJ7F02YYNFG2');
    // await page.getByRole('checkbox', { name: 'Single' }).check();
    // await page.getByRole('spinbutton', { name: 'Room Size (m²)' }).click();
    // await page.getByRole('spinbutton', { name: 'Room Size (m²)' }).fill('100');
    // await page.getByRole('button', { name: 'Add Room' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('textbox', { name: 'Room Number *' }).click();
    // await page.getByRole('textbox', { name: 'Room Number *' }).fill('201');
    // await page.getByLabel('Room Category *').selectOption('01KZATHEKKG5SMDJ7F02YYNFG2');
    // await page.getByRole('checkbox', { name: 'Double' }).check();
    // await page.getByRole('spinbutton', { name: 'Room Size (m²)' }).click();
    // await page.getByRole('spinbutton', { name: 'Room Size (m²)' }).fill('100');
    // await page.getByRole('button', { name: 'Add Room' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('textbox', { name: 'Room Number *' }).click();
    // await page.getByRole('textbox', { name: 'Room Number *' }).fill('202');
    // await page.getByLabel('Room Category *').selectOption('01KZATHR69C43B9SX3ZZDED6KW');
    // await page.getByRole('checkbox', { name: 'Single' }).check();
    // await page.getByRole('spinbutton', { name: 'Room Size (m²)' }).click();
    // await page.getByRole('spinbutton', { name: 'Room Size (m²)' }).fill('100');
    // await page.getByRole('button', { name: 'Add Room' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('textbox', { name: 'Room Number *' }).click();
    // await page.getByRole('textbox', { name: 'Room Number *' }).fill('203');
    // await page.getByLabel('Room Category *').selectOption('01KZATHR69C43B9SX3ZZDED6KW');
    // await page.getByRole('checkbox', { name: 'Double' }).check();
    // await page.getByRole('spinbutton', { name: 'Room Size (m²)' }).click();
    // await page.getByRole('spinbutton', { name: 'Room Size (m²)' }).fill('100');
    // await page.getByRole('button', { name: 'Add Room' }).click();
    // await page.waitForTimeout(2000);

});
