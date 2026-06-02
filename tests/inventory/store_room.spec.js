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
    await page.getByRole('button', { name: 'Manage Property' }).first().click();
    await page.getByRole('button', { name: 'Inventory Track supplies,' }).click();
    await page.getByRole('button', { name: 'Extras' }).click();
    await page.getByRole('link', { name: 'Store Room' }).click();
    await page.getByRole('button', { name: 'Close Sidebar' }).click();

    // ----- Add first store room -----
    
    await page.getByRole('button', { name: 'Add Another Sub Storeroom' }).click();
    await page.getByRole('textbox', { name: 'Name *' }).click();
    await page.getByRole('textbox', { name: 'Name *' }).fill('Main Store Room');
    await page.getByRole('textbox', { name: 'Code *' }).click();
    await page.getByRole('textbox', { name: 'Code *' }).fill('SR-0001');
    await page.getByRole('textbox', { name: 'Location' }).click();
    await page.getByRole('textbox', { name: 'Location' }).fill('General hotel supplies and inventory.');
    await page.getByRole('switch', { name: 'Active' }).click();
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.waitForTimeout(2000);

    // ----- Add second store room -----
    
    await page.getByRole('button', { name: 'Add Another Sub Storeroom' }).click();
    await page.getByRole('textbox', { name: 'Name *' }).click();
    await page.getByRole('textbox', { name: 'Name *' }).fill('Food & Beverage Store');
    await page.getByRole('textbox', { name: 'Code *' }).click();
    await page.getByRole('textbox', { name: 'Code *' }).fill('SR-0002');
    await page.getByRole('textbox', { name: 'Location' }).click();
    await page.getByRole('textbox', { name: 'Location' }).fill('Food ingredients, beverages, and kitchen supplies.');
    await page.getByRole('switch', { name: 'Active' }).click();
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.waitForTimeout(2000);

    // ----- Add third store room -----
    
    await page.getByRole('button', { name: 'Add Another Sub Storeroom' }).click();
    await page.getByRole('textbox', { name: 'Name *' }).click();
    await page.getByRole('textbox', { name: 'Name *' }).fill('Housekeeping Store');
    await page.getByRole('textbox', { name: 'Code *' }).click();
    await page.getByRole('textbox', { name: 'Code *' }).fill('SR-0003');
    await page.getByRole('textbox', { name: 'Location' }).click();
    await page.getByRole('textbox', { name: 'Location' }).fill('Cleaning materials, linens, toiletries, and housekeeping items.');
    await page.getByRole('switch', { name: 'Active' }).click();
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.waitForTimeout(4000);
   
});