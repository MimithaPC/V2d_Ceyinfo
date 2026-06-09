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
    await page.getByRole('button', { name: 'Extra' }).click();
    await page.getByRole('link', { name: 'Serial Number' }).click();
    await page.getByRole('button', { name: 'Close Sidebar' }).click();
    await page.getByRole('combobox', { name: 'Module *' }).click();
    await page.getByLabel('Finance Module').getByText('Finance Module').click();
    await page.getByRole('combobox', { name: 'Entity *' }).click();
    await page.getByLabel('Sales Invoice').getByText('Sales Invoice').click();
    await page.getByRole('textbox', { name: 'Prefix' }).click();
    await page.getByRole('textbox', { name: 'Prefix' }).fill('INV');
    await page.getByRole('checkbox', { name: 'Year (YYYY)' }).click();
    await page.getByRole('checkbox', { name: 'Month (MM)' }).click();
    await page.getByRole('checkbox', { name: 'Day (DD)' }).click();
    await page.getByRole('combobox', { name: 'Reset Frequency' }).click();
    await page.getByLabel('Yearly').getByText('Yearly').click();
    await page.getByRole('button', { name: 'Save Configuration' }).click();
    await page.waitForTimeout(3000);

    //  Production


});