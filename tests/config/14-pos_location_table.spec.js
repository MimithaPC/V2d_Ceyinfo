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
    await page.getByRole('link', { name: 'POS Location Table' }).click()
    await page.getByRole('button', { name: 'Close Sidebar' }).click();

    // ---- Add first pos location table -----

    await page.getByRole('combobox').filter({ hasText: 'Select POS Location' }).click();
    await page.getByText('Bar POS').click();

    await page.getByRole('button', { name: 'Add Table' }).click();
    await page.getByRole('textbox', { name: 'Table Number' }).click();
    await page.getByRole('textbox', { name: 'Table Number' }).fill('100');
    await page.getByRole('button', { name: 'Ok' }).click();

    await page.getByRole('button', { name: 'Add Table' }).click();
    await page.getByRole('textbox', { name: 'Table Number' }).click();
    await page.getByRole('textbox', { name: 'Table Number' }).fill('101');
    await page.getByRole('button', { name: 'Ok' }).click();

    await page.getByRole('button', { name: 'Add Table' }).click();
    await page.getByRole('textbox', { name: 'Table Number' }).click();
    await page.getByRole('textbox', { name: 'Table Number' }).fill('102');
    await page.getByRole('button', { name: 'Ok' }).click();

    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(1000); 

    // ---- Add second pos location table ----

    await page.getByRole('combobox').filter({ hasText: 'Select POS Location' }).click();
    await page.getByText('Main Restaurant POS').click();

    await page.getByRole('button', { name: 'Add Table' }).click();
    await page.getByRole('textbox', { name: 'Table Number' }).click();
    await page.getByRole('textbox', { name: 'Table Number' }).fill('200');
    await page.getByRole('button', { name: 'Ok' }).click();

    await page.getByRole('button', { name: 'Add Table' }).click();
    await page.getByRole('textbox', { name: 'Table Number' }).click();
    await page.getByRole('textbox', { name: 'Table Number' }).fill('201');
    await page.getByRole('button', { name: 'Ok' }).click();

    await page.getByRole('button', { name: 'Add Table' }).click();
    await page.getByRole('textbox', { name: 'Table Number' }).click();
    await page.getByRole('textbox', { name: 'Table Number' }).fill('202');
    await page.getByRole('button', { name: 'Ok' }).click();
    
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(1000); 

    // ---- Add third pos location table -----

    await page.getByRole('combobox').filter({ hasText: 'Select POS Location' }).click();
    await page.getByText('Coffee Shop POS').click();

    await page.getByRole('button', { name: 'Add Table' }).click();
    await page.getByRole('textbox', { name: 'Table Number' }).click();
    await page.getByRole('textbox', { name: 'Table Number' }).fill('300');
    await page.getByRole('button', { name: 'Ok' }).click();

    await page.getByRole('button', { name: 'Add Table' }).click();
    await page.getByRole('textbox', { name: 'Table Number' }).click();
    await page.getByRole('textbox', { name: 'Table Number' }).fill('301');
    await page.getByRole('button', { name: 'Ok' }).click();

    await page.getByRole('button', { name: 'Add Table' }).click();
    await page.getByRole('textbox', { name: 'Table Number' }).click();
    await page.getByRole('textbox', { name: 'Table Number' }).fill('302');
    await page.getByRole('button', { name: 'Ok' }).click();
    
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(1000); 

    // ---- Add fourth pos location table -----

    await page.getByRole('combobox').filter({ hasText: 'Select POS Location' }).click();
    await page.getByText('Poolside Restaurant POS').click();

    await page.getByRole('button', { name: 'Add Table' }).click();
    await page.getByRole('textbox', { name: 'Table Number' }).click();
    await page.getByRole('textbox', { name: 'Table Number' }).fill('400');
    await page.getByRole('button', { name: 'Ok' }).click();

    await page.getByRole('button', { name: 'Add Table' }).click();
    await page.getByRole('textbox', { name: 'Table Number' }).click();
    await page.getByRole('textbox', { name: 'Table Number' }).fill('401');
    await page.getByRole('button', { name: 'Ok' }).click();

    await page.getByRole('button', { name: 'Add Table' }).click();
    await page.getByRole('textbox', { name: 'Table Number' }).click();
    await page.getByRole('textbox', { name: 'Table Number' }).fill('402');
    await page.getByRole('button', { name: 'Ok' }).click();
    
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000); 
    
});