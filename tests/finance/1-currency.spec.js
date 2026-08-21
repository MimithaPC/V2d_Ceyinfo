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
    await page.getByRole('button', { name: 'Switch module' }).click();
    await page.getByRole('link', { name: 'Finance', exact: true }).click();
    await page.getByRole('link', { name: 'Currencies' }).click();
    await page.getByRole('button', { name: 'Collapse sidebar' }).click();

    
    await page.getByRole('button', { name: 'Add Currency' }).click();
    await page.getByRole('button', { name: 'Search ISO 4217 codes…' }).click();
    await page.getByRole('button', { name: 'USD United States Dollar' }).click();
    await page.getByRole('button', { name: 'Create' }).click();
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
    // await page.getByRole('link', { name: 'Property Home 0 Room types 0' }).click();
    // await page.getByRole('button', { name: 'Rooms & Rates ▼' }).click();
    // await page.getByRole('link', { name: 'Room Categories/ Types & Views' }).click();
    // await page.getByRole('button', { name: 'Collapse sidebar' }).click();

    // // Room type

    // await page.getByRole('button', { name: 'Add room type' }).first().click();
    // await page.getByRole('textbox', { name: 'Name' }).fill('Standard');
    // await page.getByRole('button', { name: 'Create' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('button', { name: 'Add room type' }).click();
    // await page.getByRole('textbox', { name: 'Name' }).fill('Deluxe');
    // await page.getByRole('button', { name: 'Create' }).click();
    // await page.waitForTimeout(1000);

    // // Room categories

    // await page.getByRole('tab', { name: 'Categories' }).click();
    // await page.getByRole('button', { name: 'Add room category' }).click();
    // await page.getByRole('textbox', { name: 'Name *' }).fill('Single');
    // await page.getByRole('spinbutton', { name: 'Child Count' }).click();
    // await page.getByRole('spinbutton', { name: 'Child Count' }).fill('1');
    // await page.getByRole('button', { name: 'Select Beds', exact: true }).click();
    // await page.getByRole('button', { name: '+' }).first().click();
    // await page.getByRole('button', { name: 'Done' }).click();
    // await page.getByRole('checkbox', { name: 'Air Conditioning' }).click();
    // await page.getByRole('checkbox', { name: 'Hair Dryer' }).click();
    // await page.getByRole('checkbox', { name: 'Iron & Board' }).click();
    // await page.getByRole('checkbox', { name: 'TV' }).click();
    // await page.getByRole('checkbox', { name: 'Safe' }).click();
    // await page.getByRole('checkbox', { name: 'WiFi' }).click();
    // await page.getByRole('button', { name: 'Save Category' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('tab', { name: 'Categories' }).click();
    // await page.getByRole('button', { name: 'Add room category' }).click();
    // await page.getByRole('textbox', { name: 'Name *' }).fill('Double');
    // await page.getByRole('spinbutton', { name: 'Adult Count *' }).dblclick();
    // await page.getByRole('spinbutton', { name: 'Adult Count *' }).fill('2');
    // await page.getByRole('spinbutton', { name: 'Child Count' }).click();
    // await page.getByRole('spinbutton', { name: 'Child Count' }).fill('2');
    // await page.getByRole('button', { name: 'Select Beds', exact: true }).click();
    // await page.getByRole('button', { name: '+' }).nth(1).click();
    // await page.getByRole('button', { name: 'Done' }).click();
    // await page.getByRole('checkbox', { name: 'Air Conditioning' }).click();
    // await page.getByRole('checkbox', { name: 'Hair Dryer' }).click();
    // await page.getByRole('checkbox', { name: 'Iron & Board' }).click();
    // await page.getByRole('checkbox', { name: 'TV' }).click();
    // await page.getByRole('checkbox', { name: 'Safe' }).click();
    // await page.getByRole('checkbox', { name: 'WiFi' }).click();
    // await page.getByRole('button', { name: 'Save Category' }).click();
    // await page.waitForTimeout(2000);

});