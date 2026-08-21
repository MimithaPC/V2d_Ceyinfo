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
    await page.getByRole('link', { name: 'Seasons & Periods' }).click();
    await page.getByRole('button', { name: 'Collapse sidebar' }).click();

    await page.getByRole('button', { name: 'Add schedule' }).first().click();
    await page.getByRole('textbox', { name: 'Name' }).fill('High season - 2026');
    await page.getByRole('textbox', { name: 'Start date *' }).fill('2026-08-19'); // Change
    await page.getByRole('textbox', { name: 'End date *' }).fill('2027-01-31'); // Change
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
    // await page.getByRole('link', { name: 'Seasons & Periods' }).click();
    // await page.getByRole('button', { name: 'Collapse sidebar' }).click();

    // await page.getByRole('button', { name: 'Add schedule' }).first().click();
    // await page.getByRole('textbox', { name: 'Name' }).fill('High season - 2026');
    // await page.getByRole('textbox', { name: 'From' }).fill('2026-08-07'); // Change
    // await page.getByRole('textbox', { name: 'To' }).fill('2026-12-31');
    // await page.getByRole('button', { name: 'Create' }).click();
    // await page.waitForTimeout(2000);


});