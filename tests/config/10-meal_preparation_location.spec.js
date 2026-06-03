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
    // await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Manage Property' }).first().click();
    await page.getByRole('button', { name: 'Configuration System settings' }).click();
    await page.getByRole('button', { name: 'F&B Operations' }).click();
    await page.getByRole('link', { name: 'Meal Preparation Location', exact: true }).click();
    await page.getByRole('button', { name: 'Close Sidebar' }).click();

    // ----- Add first meal preparation location -----

    await page.getByRole('button', { name: 'Add New' }).click();
    await page.getByRole('textbox', { name: 'Enter location name' }).click();
    await page.getByRole('textbox', { name: 'Enter location name' }).fill('Main Kitchen');
    await page.getByRole('textbox', { name: 'Enter description' }).click();
    await page.getByRole('textbox', { name: 'Enter description' }).fill('Main area where restaurant meals are prepared.');
    await page.getByRole('button', { name: 'Save Location' }).click();
    await page.waitForTimeout(2000); 

    // ----- Add second meal preparation location -----

    await page.getByRole('button', { name: 'Add New' }).click();
    await page.getByRole('textbox', { name: 'Enter location name' }).click();
    await page.getByRole('textbox', { name: 'Enter location name' }).fill('Bar Preparation Area');
    await page.getByRole('textbox', { name: 'Enter description' }).click();
    await page.getByRole('textbox', { name: 'Enter description' }).fill('Area where drinks and beverages are prepared.');
    await page.getByRole('button', { name: 'Save Location' }).click();
    await page.waitForTimeout(2000); 

    // ----- Add third meal preparation location -----

    await page.getByRole('button', { name: 'Add New' }).click();
    await page.getByRole('textbox', { name: 'Enter location name' }).click();
    await page.getByRole('textbox', { name: 'Enter location name' }).fill('Café Kitchen');
    await page.getByRole('textbox', { name: 'Enter description' }).click();
    await page.getByRole('textbox', { name: 'Enter description' }).fill('Kitchen for preparing café food and snacks.');
    await page.getByRole('button', { name: 'Save Location' }).click();
    await page.waitForTimeout(2000); 

    // ----- Add fourth meal preparation location -----

    await page.getByRole('button', { name: 'Add New' }).click();
    await page.getByRole('textbox', { name: 'Enter location name' }).click();
    await page.getByRole('textbox', { name: 'Enter location name' }).fill('Poolside Kitchen');
    await page.getByRole('textbox', { name: 'Enter description' }).click();
    await page.getByRole('textbox', { name: 'Enter description' }).fill('Kitchen that prepares food and drinks for poolside guests.');
    await page.getByRole('button', { name: 'Save Location' }).click();
    await page.waitForTimeout(4000);

});