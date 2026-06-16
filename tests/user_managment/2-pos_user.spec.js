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
    // await page.locator('div:nth-child(14) > .inline-flex').click(); //Change
    // await page.getByRole('button', { name: 'Manage Property' }).nth(2).click(); //Change
    await page.waitForTimeout(2000);
    // await page.getByRole('button', { name: 'Manage Property' }).first().click();
    await page.getByRole('button', { name: 'User Management Control' }).click();
    await page.getByRole('link', { name: 'POS Users' }).click();
    await page.getByRole('button', { name: 'Close Sidebar' }).click();

    // ----- First POS user -----

    await page.getByRole('combobox').filter({ hasText: 'Choose an employee...' }).click();
    await page.getByText('Mimitha Prabodani', { exact: true }).click();
    await page.locator('div').filter({ hasText: /^Bar POSID: 3$/ }).first().click();
    await page.locator('div').filter({ hasText: /^Coffee Shop POSID: 4$/ }).first().click();
    await page.locator('div').filter({ hasText: /^Main Restaurant POSID: 2$/ }).first().click();
    await page.locator('div').filter({ hasText: /^Poolside Restaurant POSID: 5$/ }).nth(1).click();
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(1000); 
    
    // ----- Second POS user -----

    await page.getByRole('combobox').filter({ hasText: 'MMimitha PrabodaniDepartment :' }).click();
    await page.getByText('Janani Kavindya').click();
    await page.locator('div').filter({ hasText: /^Bar POSID: 3$/ }).first().click();
    await page.locator('div').filter({ hasText: /^Coffee Shop POSID: 4$/ }).first().click();
    await page.locator('div').filter({ hasText: /^Main Restaurant POSID: 2$/ }).first().click();
    await page.locator('div').filter({ hasText: /^Poolside Restaurant POSID: 5$/ }).nth(1).click();
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(1000);

    // ----- Third POS user -----

    await page.getByRole('combobox').filter({ hasText: 'JJanani KavindyaDepartment :' }).click();
    await page.getByText('Maleena Kalhari').click();
    await page.locator('div').filter({ hasText: /^Bar POSID: 3$/ }).first().click();
    await page.locator('div').filter({ hasText: /^Coffee Shop POSID: 4$/ }).first().click();
    await page.locator('div').filter({ hasText: /^Main Restaurant POSID: 2$/ }).first().click();
    await page.locator('div').filter({ hasText: /^Poolside Restaurant POSID: 5$/ }).nth(1).click();
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(1000);

    // ----- Fourth POS user -----

    await page.getByRole('combobox').filter({ hasText: 'MMaleena KalhariDepartment :' }).click();
    await page.getByText('Lakmali Gunasingha').click();
    await page.locator('div').filter({ hasText: /^Bar POSID: 3$/ }).first().click();
    await page.locator('div').filter({ hasText: /^Coffee Shop POSID: 4$/ }).first().click();
    await page.locator('div').filter({ hasText: /^Main Restaurant POSID: 2$/ }).first().click();
    await page.locator('div').filter({ hasText: /^Poolside Restaurant POSID: 5$/ }).nth(1).click();
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);


});