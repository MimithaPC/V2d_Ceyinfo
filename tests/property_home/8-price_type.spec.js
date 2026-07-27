import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    
    test.setTimeout(120000);

    // // Development

    // await page.goto('https://v2d.ceyinfo.com/', { waitUntil: 'networkidle' });
    // await page.getByRole('link', { name: 'Login' }).click();
    // await page.getByRole('textbox', { name: 'Email' }).click();
    // await page.getByRole('textbox', { name: 'Email' }).fill('mimithaprabodani@gmail.com');
    // await page.getByRole('textbox', { name: '********' }).click();
    // await page.getByRole('textbox', { name: '********' }).fill('Mi@123');
    // await page.getByRole('button', { name: 'Login' }).click();
    // await page.waitForTimeout(2000);
    // // await page.locator('div:nth-child(14) > .inline-flex').click();
    // // await page.getByRole('button', { name: 'Manage Property' }).nth(2).click();
    // await page.waitForTimeout(2000);
    // // await page.getByRole('button', { name: 'Manage Property' }).first().click();
    // await page.getByRole('button', { name: 'Configuration System settings' }).click();
    // await page.getByRole('button', { name: 'F&B Operations' }).click();
    // await page.getByRole('button', { name: 'Setup' }).click();
    // await page.getByRole('link', { name: 'Price Types' }).click();
    // await page.getByRole('button', { name: 'Close Sidebar' }).click();

    // // ----- Add first price type -----

    // await page.getByRole('button', { name: 'Add Type' }).click();
    // await page.getByRole('textbox', { name: 'e.g. Dine In' }).fill('Dine in');
    // await page.getByRole('button', { name: 'Add Type' }).click();
    // await page.waitForTimeout(1000);

    // // ----- Add second price type -----

    // await page.getByRole('button', { name: 'Add Type' }).click();
    // await page.getByRole('textbox', { name: 'e.g. Dine In' }).fill('Take Away');
    // await page.getByRole('button', { name: 'Add Type' }).click();
    // await page.waitForTimeout(1000);

    // // ----- Add third price type -----

    // await page.getByRole('button', { name: 'Add Type' }).click();
    // await page.getByRole('textbox', { name: 'e.g. Dine In' }).fill('Room Service');
    // await page.getByRole('button', { name: 'Add Type' }).click();
    // await page.waitForTimeout(3000);
    
    
    
    
    
    
    
    
   
    //  Production

    await page.goto('https://ceyinfo.com/', { waitUntil: 'networkidle' });
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Login' }).click();
    const page1 = await page1Promise;
    await page1.getByRole('textbox', { name: 'Email' }).click();
    await page1.getByRole('textbox', { name: 'Email' }).fill('mimithaprabodani@gmail.com');
    await page1.getByRole('textbox', { name: '********' }).click();
    await page1.getByRole('textbox', { name: '********' }).fill('Mi@123');
    await page1.getByRole('button', { name: 'Login' }).click();
    await page1.waitForTimeout(2000);
    // await page1.locator('div:nth-child(14) > .inline-flex').click();
    // await page1.getByRole('button', { name: 'Manage Property' }).nth(2).click();
    await page1.waitForTimeout(2000);
    // await page1.getByRole('button', { name: 'Manage Property' }).first().click();
    await page1.getByRole('button', { name: 'Configuration System settings' }).click();
    await page1.getByRole('button', { name: 'F&B Operations' }).click();
    await page1.getByRole('button', { name: 'Setup' }).click();
    await page1.getByRole('link', { name: 'Price Types' }).click();
    await page1.getByRole('button', { name: 'Close Sidebar' }).click();

    // ----- Add first price type -----

    await page1.getByRole('button', { name: 'Add Type' }).click();
    await page1.getByRole('textbox', { name: 'e.g. Dine In' }).fill('Dine in');
    await page1.getByRole('button', { name: 'Add Type' }).click();
    await page1.waitForTimeout(1000);

    // ----- Add second price type -----

    await page1.getByRole('button', { name: 'Add Type' }).click();
    await page1.getByRole('textbox', { name: 'e.g. Dine In' }).fill('Take Away');
    await page1.getByRole('button', { name: 'Add Type' }).click();
    await page1.waitForTimeout(1000);

    // ----- Add third price type -----

    await page1.getByRole('button', { name: 'Add Type' }).click();
    await page1.getByRole('textbox', { name: 'e.g. Dine In' }).fill('Room Service');
    await page1.getByRole('button', { name: 'Add Type' }).click();
    await page1.waitForTimeout(3000);
    
});