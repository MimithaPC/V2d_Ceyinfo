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
    await page.getByRole('link', { name: 'Rate Plans' }).click();
    await page.getByRole('button', { name: 'Collapse sidebar' }).click();

    await page.getByRole('textbox', { name: '0.00' }).first().click();
    await page.getByRole('textbox', { name: '0.00' }).first().fill('LKR 1,0000.00');
    await page.getByRole('textbox', { name: '0.00' }).nth(1).click();
    await page.getByRole('textbox', { name: '0.00' }).nth(1).fill('LKR 1,2000.00');
    await page.getByRole('textbox', { name: '0.00' }).nth(2).click();
    await page.getByRole('textbox', { name: '0.00' }).nth(2).fill('LKR 1,4000.00');
    await page.getByRole('textbox', { name: '0.00' }).nth(3).click();
    await page.getByRole('textbox', { name: '0.00' }).nth(3).fill('LKR 1,6000.00');
    await page.getByRole('textbox', { name: '0.00' }).nth(4).click();
    await page.getByRole('textbox', { name: '0.00' }).nth(4).fill('LKR 1,2000.00');
    await page.getByRole('textbox', { name: '0.00' }).nth(5).click();
    await page.getByRole('textbox', { name: '0.00' }).nth(5).fill('LKR 1,4000.00');
    await page.locator('tr:nth-child(2) > td:nth-child(4) > .flex').click();
    await page.locator('tr:nth-child(2) > td:nth-child(4) > .flex').fill('LKR 1,6000.00');
    await page.locator('tr:nth-child(2) > td:nth-child(5) > .flex').click();
    await page.locator('tr:nth-child(2) > td:nth-child(5) > .flex').fill('LKR 1,8000.00');
    await page.locator('tr:nth-child(3) > td:nth-child(2) > .flex').click();
    await page.locator('tr:nth-child(3) > td:nth-child(2) > .flex').fill('LKR 1,4000.00');
    await page.locator('tr:nth-child(3) > td:nth-child(3) > .flex').click();
    await page.locator('tr:nth-child(3) > td:nth-child(3) > .flex').fill('LKR 1,6000.00');
    await page.locator('tr:nth-child(3) > td:nth-child(4) > .flex').click();
    await page.locator('tr:nth-child(3) > td:nth-child(4) > .flex').fill('LKR 1,8000.00');
    await page.locator('tr:nth-child(3) > td:nth-child(5) > .flex').click();
    await page.locator('tr:nth-child(3) > td:nth-child(5) > .flex').fill('LKR 2,0000.00');
    await page.locator('tr:nth-child(4) > td:nth-child(2) > .flex').click();
    await page.locator('tr:nth-child(4) > td:nth-child(2) > .flex').fill('LKR 1,6000.00');
    await page.locator('tr:nth-child(4) > td:nth-child(3) > .flex').click();
    await page.locator('tr:nth-child(4) > td:nth-child(3) > .flex').fill('LKR 1,8000.00');
    await page.locator('tr:nth-child(4) > td:nth-child(4) > .flex').click();
    await page.locator('tr:nth-child(4) > td:nth-child(4) > .flex').fill('LKR 2,0000.00');
    await page.locator('tr:nth-child(4) > td:nth-child(5) > .flex').click();
    await page.locator('tr:nth-child(4) > td:nth-child(5) > .flex').fill('LKR 2,2000.00');
    await page.getByRole('button', { name: 'Save prices' }).click();
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