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
    await page.getByRole('link', { name: 'Users', exact: true }).click();
    await page.getByRole('button', { name: 'Close Sidebar' }).click();

    // ----- First POS user -----

    
    // ----- Second POS user -----

    
    // ----- Third POS user -----

    

    // ----- Fourth POS user -----

    


});