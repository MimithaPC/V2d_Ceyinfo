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
    await page.getByRole('button', { name: 'Setup' }).click();
    await page.getByRole('link', { name: 'POS & Meal Location Setup' }).click();
    await page.getByRole('button', { name: 'Close Sidebar' }).click();

    // ----- Add first mapping -----

    await page.getByRole('button', { name: 'Add New Mapping' }).click();
    await page.getByRole('combobox').click();
    await page.getByLabel('Main Restaurant POS').getByText('Main Restaurant POS').click();
    await page.getByRole('button', { name: 'Main Kitchen' }).click();
    await page.getByRole('button', { name: 'Save Mapping' }).click();
    await page.waitForTimeout(1000); 

    // ----- Add second mapping -----

    await page.getByRole('button', { name: 'Add New Mapping' }).click();
    await page.getByRole('combobox').click();
    await page.getByLabel('Bar POS').getByText('Bar POS').click();
    await page.getByRole('button', { name: 'Bar Preparation Area' }).click();
    await page.getByRole('button', { name: 'Save Mapping' }).click();
    await page.waitForTimeout(1000); 

    // ----- Add third mapping -----

    await page.getByRole('button', { name: 'Add New Mapping' }).click();
    await page.getByRole('combobox').click();
    await page.getByLabel('Coffee Shop POS').getByText('Coffee Shop POS').click();
    await page.getByRole('button', { name: 'Café Kitchen' }).click();
    await page.getByRole('button', { name: 'Save Mapping' }).click();
    await page.waitForTimeout(1000); 

    // ----- Add fourth mapping -----

    await page.getByRole('button', { name: 'Add New Mapping' }).click();
    await page.getByRole('combobox').click();
    await page.getByLabel('Poolside Restaurant POS').getByText('Poolside Restaurant POS').click();
    await page.getByRole('button', { name: 'Poolside Kitchen' }).click();
    await page.getByRole('button', { name: 'Save Mapping' }).click();
    await page.waitForTimeout(3000);

});