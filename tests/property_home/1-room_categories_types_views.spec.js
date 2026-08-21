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
    await page.getByRole('link', { name: 'Room Categories/ Types & Views' }).click();
    await page.getByRole('button', { name: 'Collapse sidebar' }).click();

    // Room category

    await page.getByRole('button', { name: 'Add room category' }).click();
    await page.getByRole('textbox', { name: 'Name *' }).fill('Standard');
    await page.getByRole('textbox', { name: 'Code *' }).click();
    await page.getByRole('textbox', { name: 'Code *' }).fill('STANDARD');
    await page.getByRole('checkbox', { name: 'Bathtub' }).click();
    await page.getByRole('checkbox', { name: 'Coffee Maker' }).click();
    await page.getByRole('checkbox', { name: 'Desk' }).click();
    await page.getByRole('checkbox', { name: 'Hair Dryer' }).click();
    await page.getByRole('checkbox', { name: 'Iron & Board' }).click();
    await page.getByRole('checkbox', { name: 'Mini Bar' }).click();
    await page.getByRole('checkbox', { name: 'Safe' }).click();
    await page.getByRole('checkbox', { name: 'Telephone' }).click();
    await page.getByRole('checkbox', { name: 'TV' }).click();
    await page.getByRole('checkbox', { name: 'WiFi' }).click();
    await page.getByRole('button', { name: 'Save Category' }).click();
    await page.waitForTimeout(1000);

    await page.getByRole('button', { name: 'Add room category' }).click();
    await page.getByRole('textbox', { name: 'Name *' }).fill('Deluxe');
    await page.getByRole('textbox', { name: 'Code *' }).click();
    await page.getByRole('textbox', { name: 'Code *' }).fill('DELUXE');
    await page.getByRole('checkbox', { name: 'Bathtub' }).click();
    await page.getByRole('checkbox', { name: 'Coffee Maker' }).click();
    await page.getByRole('checkbox', { name: 'Desk' }).click();
    await page.getByRole('checkbox', { name: 'Hair Dryer' }).click();
    await page.getByRole('checkbox', { name: 'Iron & Board' }).click();
    await page.getByRole('checkbox', { name: 'Mini Bar' }).click();
    await page.getByRole('checkbox', { name: 'Safe' }).click();
    await page.getByRole('checkbox', { name: 'Telephone' }).click();
    await page.getByRole('checkbox', { name: 'TV' }).click();
    await page.getByRole('checkbox', { name: 'WiFi' }).click();
    await page.getByRole('button', { name: 'Save Category' }).click();
    await page.waitForTimeout(1000);

    // Room type

    await page.getByRole('tab', { name: 'Types' }).click();
    await page.getByRole('button', { name: 'Add room type' }).click();
    await page.getByRole('textbox', { name: 'Name *' }).fill('Single');
    await page.getByRole('textbox', { name: 'Code *' }).click();
    await page.getByRole('textbox', { name: 'Code *' }).fill('SINGLE');
    await page.getByRole('spinbutton', { name: 'Adults' }).click();
    await page.getByRole('spinbutton', { name: 'Adults' }).fill('2');
    await page.getByRole('spinbutton', { name: 'Children' }).click();
    await page.getByRole('spinbutton', { name: 'Children' }).fill('2');
    await page.getByRole('button', { name: 'Add configuration' }).click();
    await page.locator('#rt-adults-1').click();
    await page.locator('#rt-adults-1').fill('1');
    await page.locator('#rt-children-1').click();
    await page.locator('#rt-children-1').fill('3');
    await page.getByRole('button', { name: 'Create' }).click();
    await page.waitForTimeout(1000);

    await page.getByRole('button', { name: 'Add room type' }).click();
    await page.getByRole('textbox', { name: 'Name *' }).fill('Double');
    await page.getByRole('textbox', { name: 'Code *' }).click();
    await page.getByRole('textbox', { name: 'Code *' }).fill('DOUBLE');
    await page.getByRole('spinbutton', { name: 'Adults' }).click();
    await page.getByRole('spinbutton', { name: 'Adults' }).fill('2');
    await page.getByRole('spinbutton', { name: 'Children' }).click();
    await page.getByRole('spinbutton', { name: 'Children' }).fill('2');
    await page.getByRole('button', { name: 'Add configuration' }).click();
    await page.locator('#rt-adults-1').click();
    await page.locator('#rt-adults-1').fill('1');
    await page.locator('#rt-children-1').click();
    await page.locator('#rt-children-1').fill('3');
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
    // await page.getByRole('button', { name: 'Rooms & Rates ▼' }).click();
    // await page.getByRole('link', { name: 'Room Categories/ Types & Views' }).click();
    // await page.getByRole('button', { name: 'Collapse sidebar' }).click();

    // // Room category

    // await page.getByRole('button', { name: 'Add room category' }).click();
    // await page.getByRole('textbox', { name: 'Name *' }).fill('Standard');
    // await page.getByRole('textbox', { name: 'Code *' }).click();
    // await page.getByRole('textbox', { name: 'Code *' }).fill('STANDARD');
    // await page.getByRole('checkbox', { name: 'Bathtub' }).click();
    // await page.getByRole('checkbox', { name: 'Coffee Maker' }).click();
    // await page.getByRole('checkbox', { name: 'Desk' }).click();
    // await page.getByRole('checkbox', { name: 'Hair Dryer' }).click();
    // await page.getByRole('checkbox', { name: 'Iron & Board' }).click();
    // await page.getByRole('checkbox', { name: 'Mini Bar' }).click();
    // await page.getByRole('checkbox', { name: 'Safe' }).click();
    // await page.getByRole('checkbox', { name: 'Telephone' }).click();
    // await page.getByRole('checkbox', { name: 'TV' }).click();
    // await page.getByRole('checkbox', { name: 'WiFi' }).click();
    // await page.getByRole('button', { name: 'Save Category' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('button', { name: 'Add room category' }).click();
    // await page.getByRole('textbox', { name: 'Name *' }).fill('Deluxe');
    // await page.getByRole('textbox', { name: 'Code *' }).click();
    // await page.getByRole('textbox', { name: 'Code *' }).fill('DELUXE');
    // await page.getByRole('checkbox', { name: 'Bathtub' }).click();
    // await page.getByRole('checkbox', { name: 'Coffee Maker' }).click();
    // await page.getByRole('checkbox', { name: 'Desk' }).click();
    // await page.getByRole('checkbox', { name: 'Hair Dryer' }).click();
    // await page.getByRole('checkbox', { name: 'Iron & Board' }).click();
    // await page.getByRole('checkbox', { name: 'Mini Bar' }).click();
    // await page.getByRole('checkbox', { name: 'Safe' }).click();
    // await page.getByRole('checkbox', { name: 'Telephone' }).click();
    // await page.getByRole('checkbox', { name: 'TV' }).click();
    // await page.getByRole('checkbox', { name: 'WiFi' }).click();
    // await page.getByRole('button', { name: 'Save Category' }).click();
    // await page.waitForTimeout(1000);

    // // Room type

    // await page.getByRole('tab', { name: 'Types' }).click();
    // await page.getByRole('button', { name: 'Add room type' }).click();
    // await page.getByRole('textbox', { name: 'Name *' }).fill('Single');
    // await page.getByRole('textbox', { name: 'Code *' }).click();
    // await page.getByRole('textbox', { name: 'Code *' }).fill('SINGLE');
    // await page.getByRole('spinbutton', { name: 'Adults' }).click();
    // await page.getByRole('spinbutton', { name: 'Adults' }).fill('2');
    // await page.getByRole('spinbutton', { name: 'Children' }).click();
    // await page.getByRole('spinbutton', { name: 'Children' }).fill('2');
    // await page.getByRole('button', { name: 'Add configuration' }).click();
    // await page.locator('#rt-adults-1').click();
    // await page.locator('#rt-adults-1').fill('1');
    // await page.locator('#rt-children-1').click();
    // await page.locator('#rt-children-1').fill('3');
    // await page.getByRole('button', { name: 'Create' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('button', { name: 'Add room type' }).click();
    // await page.getByRole('textbox', { name: 'Name *' }).fill('Double');
    // await page.getByRole('textbox', { name: 'Code *' }).click();
    // await page.getByRole('textbox', { name: 'Code *' }).fill('DOUBLE');
    // await page.getByRole('spinbutton', { name: 'Adults' }).click();
    // await page.getByRole('spinbutton', { name: 'Adults' }).fill('2');
    // await page.getByRole('spinbutton', { name: 'Children' }).click();
    // await page.getByRole('spinbutton', { name: 'Children' }).fill('2');
    // await page.getByRole('button', { name: 'Add configuration' }).click();
    // await page.locator('#rt-adults-1').click();
    // await page.locator('#rt-adults-1').fill('1');
    // await page.locator('#rt-children-1').click();
    // await page.locator('#rt-children-1').fill('3');
    // await page.getByRole('button', { name: 'Create' }).click();
    // await page.waitForTimeout(2000);

});