import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    
    test.setTimeout(120000);

    await page.goto('https://v2d.ceyinfo.com/', { waitUntil: 'networkidle' });
    await page.getByRole('link', { name: 'Login' }).click();
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill('slakmaligunasingha@gmail.com');
    await page.getByRole('textbox', { name: '********' }).click();
    await page.getByRole('textbox', { name: '********' }).fill('123456');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForTimeout(2000);
    // await page.locator('div:nth-child(14) > .inline-flex').click();
    // await page.getByRole('button', { name: 'Manage Property' }).nth(2).click();
    await page.waitForTimeout(2000);
    // await page.getByRole('button', { name: 'Manage Property' }).first().click();
    await page.getByRole('button', { name: 'Front Desk Reservations,' }).click();
    await page.getByRole('button', { name: 'Inquiries' }).click();
    //   await page.getByRole('button', { name: 'View' }).first().click();
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Advance Payment' }).click();
    await page.getByRole('combobox').click();
    await page.getByRole('option', { name: 'Cash' }).click();
    await page.getByPlaceholder('Enter amount').click();
    await page.getByPlaceholder('Enter amount').fill('1000');
    await page.getByRole('button', { name: 'Add' }).click();
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(4000);

});