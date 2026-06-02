import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

    test.setTimeout(120000);

    // Development

    await page.goto('https://v2d.ceyinfo.com/', { waitUntil: 'networkidle' });
    await page.getByRole('link', { name: 'Login' }).click();
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill('mimithaprabodani@gmail.com');
    await page.getByRole('textbox', { name: '********' }).click();
    await page.getByRole('textbox', { name: '********' }).fill('Mi@123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForTimeout(2000);
    // await page.locator('div:nth-child(14) > .inline-flex').click();
    // await page.getByRole('button', { name: 'Manage Property' }).nth(2).click();
    await page.waitForTimeout(2000);
    // await page.getByRole('button', { name: 'Manage Property' }).first().click();
    await page.getByRole('button', { name: 'Configuration System settings' }).click();
    await page.getByRole('button', { name: 'F&B Operations' }).click();
    await page.getByRole('link', { name: 'POS Location', exact: true }).click();
    await page.getByRole('button', { name: 'Close Sidebar' }).click();

    // ---- Add first pos location -----

    await page.getByRole('button', { name: 'Add Pos Location' }).click();
    await page.getByRole('textbox', { name: 'e.g., Main Restaurant POS' }).click();
    await page.getByRole('textbox', { name: 'e.g., Main Restaurant POS' }).fill('Main Restaurant POS');
    // await page.getByRole('combobox', { name: 'Store Room (optional)' }).click();
    // await page.locator('div').filter({ hasText: /^No store rooms available$/ }).nth(2).click();
    await page.getByRole('button', { name: 'Add Location' }).click();
    await page.waitForTimeout(2000); 

    // ---- Add second pos location -----

    await page.getByRole('button', { name: 'Add Pos Location' }).click();
    await page.getByRole('textbox', { name: 'e.g., Main Restaurant POS' }).click();
    await page.getByRole('textbox', { name: 'e.g., Main Restaurant POS' }).fill('Bar POS');
    // await page.getByRole('combobox', { name: 'Store Room (optional)' }).click();
    // await page.locator('div').filter({ hasText: /^No store rooms available$/ }).nth(2).click();
    await page.getByRole('button', { name: 'Add Location' }).click();
    await page.waitForTimeout(2000); 

    // ---- Add third pos location -----

    await page.getByRole('button', { name: 'Add Pos Location' }).click();
    await page.getByRole('textbox', { name: 'e.g., Main Restaurant POS' }).click();
    await page.getByRole('textbox', { name: 'e.g., Main Restaurant POS' }).fill('Coffee Shop POS');
    // await page.getByRole('combobox', { name: 'Store Room (optional)' }).click();
    // await page.locator('div').filter({ hasText: /^No store rooms available$/ }).nth(2).click();
    await page.getByRole('button', { name: 'Add Location' }).click();
    await page.waitForTimeout(2000); 

    // ---- Add fourth pos location -----

    await page.getByRole('button', { name: 'Add Pos Location' }).click();
    await page.getByRole('textbox', { name: 'e.g., Main Restaurant POS' }).click();
    await page.getByRole('textbox', { name: 'e.g., Main Restaurant POS' }).fill('Poolside Restaurant POS');
    // await page.getByRole('combobox', { name: 'Store Room (optional)' }).click();
    // await page.locator('div').filter({ hasText: /^No store rooms available$/ }).nth(2).click();
    await page.getByRole('button', { name: 'Add Location' }).click();
    await page.waitForTimeout(4000); 
    
});