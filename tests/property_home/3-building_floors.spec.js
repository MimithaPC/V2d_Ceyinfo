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
    await page.getByRole('link', { name: 'Buildings & Floors' }).click();
    await page.getByRole('button', { name: 'Collapse sidebar' }).click();

    await page.getByRole('button', { name: 'Add' }).click();
    await page.getByRole('textbox', { name: 'Name' }).click();
    await page.getByRole('textbox', { name: 'Name' }).fill('Main building');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(1000);

    await page.getByRole('button', { name: 'Add floor' }).click();
    await page.getByRole('textbox', { name: 'Name' }).fill('Ground floor');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(1000);

    await page.getByRole('button', { name: 'Add floor' }).click();
    await page.getByRole('textbox', { name: 'Name' }).fill('First floor');
    await page.getByRole('button', { name: 'Save' }).click();
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
    // await page.getByRole('link', { name: 'Property Home' }).click();
    // await page.getByRole('button', { name: 'Rooms & Rates ▼' }).click();
    // await page.getByRole('link', { name: 'Buildings & Floors' }).click();
    // await page.getByRole('button', { name: 'Collapse sidebar' }).click();

    // // First building

    // await page.getByRole('button', { name: 'Add' }).click();
    // await page.getByRole('textbox', { name: 'Name' }).click();
    // await page.getByRole('textbox', { name: 'Name' }).fill('Main building');
    // await page.getByRole('button', { name: 'Save' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('button', { name: 'Add floor' }).click();
    // await page.getByRole('textbox', { name: 'Name' }).fill('Ground floor');
    // await page.getByRole('button', { name: 'Save' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('button', { name: 'Add floor' }).click();
    // await page.getByRole('textbox', { name: 'Name' }).fill('First floor');
    // await page.getByRole('button', { name: 'Save' }).click();
    // await page.waitForTimeout(2000);

});