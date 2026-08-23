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
    await page.getByRole('button', { name: 'Extra ▼' }).click();
    await page.getByRole('link', { name: 'Serial Numbers' }).click();
    await page.getByRole('button', { name: 'Collapse sidebar' }).click();

    await page.getByRole('combobox').filter({ hasText: /^Select Module$/ }).click();
    await page.getByText('Finance').click();
    await page.getByRole('combobox').filter({ hasText: 'Select Entity' }).click();
    await page.getByText('Invoice').click();
    await page.getByRole('textbox', { name: 'Prefix' }).click();
    await page.getByRole('textbox', { name: 'Prefix' }).fill('INV');
    await page.getByRole('checkbox', { name: 'Year (YYYY)' }).click();
    await page.getByRole('checkbox', { name: 'Month (MM)' }).click();
    await page.getByRole('checkbox', { name: 'Day (DD)' }).click();
    await page.getByRole('combobox').filter({ hasText: 'Select frequency' }).click();
    await page.getByText('Yearly').click();
    await page.getByRole('button', { name: 'Save Configuration' }).click();
    await page.waitForTimeout(3000);

    
    
    
    
    
    
    
    
    // //  Production

    // await page.goto('https://ceyinfo.com/', { waitUntil: 'networkidle' });
    // const page1Promise = page.waitForEvent('popup');
    // await page.getByRole('link', { name: 'Login' }).click();
    // const page1 = await page1Promise;
    // await page1.getByRole('textbox', { name: 'Email' }).click();
    // await page1.getByRole('textbox', { name: 'Email' }).fill('mimithaprabodani@gmail.com');
    // await page1.getByRole('textbox', { name: '********' }).click();
    // await page1.getByRole('textbox', { name: '********' }).fill('Mi@123');
    // await page1.getByRole('button', { name: 'Login' }).click();
    // await page1.waitForTimeout(2000);
    // // await page1.locator('div:nth-child(14) > .inline-flex').click();
    // // await page1.getByRole('button', { name: 'Manage Property' }).nth(2).click();
    // await page1.waitForTimeout(2000);
    // // await page1.getByRole('button', { name: 'Manage Property' }).first().click();
    // await page1.getByRole('button', { name: 'Configuration System settings' }).click();
    // await page1.getByRole('button', { name: 'Extra' }).click();
    // await page1.getByRole('link', { name: 'Serial Number' }).click();
    // await page1.getByRole('button', { name: 'Close Sidebar' }).click();
    // await page1.getByRole('combobox', { name: 'Module *' }).click();
    // await page1.getByLabel('Finance Module').getByText('Finance Module').click();
    // await page1.getByRole('combobox', { name: 'Entity *' }).click();
    // await page1.getByLabel('Sales Invoice').getByText('Sales Invoice').click();
    // await page1.getByRole('textbox', { name: 'Prefix' }).click();
    // await page1.getByRole('textbox', { name: 'Prefix' }).fill('INV');
    // await page1.getByRole('checkbox', { name: 'Year (YYYY)' }).click();
    // await page1.getByRole('checkbox', { name: 'Month (MM)' }).click();
    // await page1.getByRole('checkbox', { name: 'Day (DD)' }).click();
    // await page1.getByRole('combobox', { name: 'Reset Frequency' }).click();
    // await page1.getByLabel('Yearly').getByText('Yearly').click();
    // await page1.getByRole('button', { name: 'Save Configuration' }).click();
    // await page1.waitForTimeout(3000);


});