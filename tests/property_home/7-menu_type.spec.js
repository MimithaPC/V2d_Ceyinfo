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
    await page.getByRole('link', { name: 'Menu Types' }).click();
    await page.getByRole('button', { name: 'Close Sidebar' }).click();

    // ----- Add first menu type -----

    await page.getByRole('button', { name: 'Add Menu Type' }).click();
    await page.getByRole('textbox', { name: 'e.g. Breakfast' }).fill('Breakfast');
    await page.getByRole('textbox', { name: 'Optional description...' }).click();
    await page.getByRole('textbox', { name: 'Optional description...' }).fill('The first meal of the day, usually eaten in the morning.');
    await page.getByRole('button', { name: 'Add Type' }).click();
    await page.waitForTimeout(1000);

    // ----- Add second menu type -----

    await page.getByRole('button', { name: 'Add Menu Type' }).click();
    await page.getByRole('textbox', { name: 'e.g. Breakfast' }).fill('Lunch');
    await page.getByRole('textbox', { name: 'Optional description...' }).click();
    await page.getByRole('textbox', { name: 'Optional description...' }).fill('A midday meal eaten around noon or afternoon.');
    await page.getByRole('button', { name: 'Add Type' }).click();
    await page.waitForTimeout(1000);

    // ----- Add third menu type -----

    await page.getByRole('button', { name: 'Add Menu Type' }).click();
    await page.getByRole('textbox', { name: 'e.g. Breakfast' }).fill('Dinner');
    await page.getByRole('textbox', { name: 'Optional description...' }).click();
    await page.getByRole('textbox', { name: 'Optional description...' }).fill('The main evening meal eaten at night.');
    await page.getByRole('button', { name: 'Add Type' }).click();
    await page.waitForTimeout(3000);
    
    
    
    
    
    
    
    
    
    // //  Production

    // await page.goto('https://ceyinfo.com/', { waitUntil: 'networkidle' });
    // const page1Promise = page.waitForEvent('popup');
    // await page.getByRole('link', { name: 'Login' }).click();
    // const page1 = await page1Promise;
    // await page1.getByRole('textbox', { name: 'Email' }).click();
    // await page1.getByRole('textbox', { name: 'Email' }).fill('mimithaprabodani@gmail.com');
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
    // await page.getByRole('link', { name: 'Menu Types' }).click();
    // await page.getByRole('button', { name: 'Close Sidebar' }).click();

    // // ----- Add first menu type -----

    // await page.getByRole('button', { name: 'Add Menu Type' }).click();
    // await page.getByRole('textbox', { name: 'e.g. Breakfast' }).fill('Breakfast');
    // await page.getByRole('textbox', { name: 'Optional description...' }).click();
    // await page.getByRole('textbox', { name: 'Optional description...' }).fill('The first meal of the day, usually eaten in the morning.');
    // await page.getByRole('button', { name: 'Add Type' }).click();
    // await page.waitForTimeout(1000);

    // // ----- Add second menu type -----

    // await page.getByRole('button', { name: 'Add Menu Type' }).click();
    // await page.getByRole('textbox', { name: 'e.g. Breakfast' }).fill('Lunch');
    // await page.getByRole('textbox', { name: 'Optional description...' }).click();
    // await page.getByRole('textbox', { name: 'Optional description...' }).fill('A midday meal eaten around noon or afternoon.');
    // await page.getByRole('button', { name: 'Add Type' }).click();
    // await page.waitForTimeout(1000);

    // // ----- Add third menu type -----

    // await page.getByRole('button', { name: 'Add Menu Type' }).click();
    // await page.getByRole('textbox', { name: 'e.g. Breakfast' }).fill('Dinner');
    // await page.getByRole('textbox', { name: 'Optional description...' }).click();
    // await page.getByRole('textbox', { name: 'Optional description...' }).fill('The main evening meal eaten at night.');
    // await page.getByRole('button', { name: 'Add Type' }).click();
    // await page.waitForTimeout(3000);

});