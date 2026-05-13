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
    await page.getByRole('button', { name: 'Login' }).nth(1).click(); //Change
    // await page.getByRole('button', { name: 'Manage Property' }).nth(2).click(); //Change
    await page.getByRole('button', { name: 'Manage Property' }).first().click();
    await page.getByRole('button', { name: 'Front Desk Reservations,' }).click();
    await page.getByRole('button', { name: 'Checkouts' }).click();
    await page.getByRole('tab', { name: 'All Check-outs' }).click();
    //   await page.getByRole('button', { name: 'Check Out' }).first().click();
    await page.waitForTimeout(3000);
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('button', { name: 'Create Folio' }).click();
    const page1 = await page1Promise;
    await page1.getByRole('button', { name: 'Save All' }).click();
    await page1.getByRole('button', { name: 'Invoice' }).click();
    await page1.getByRole('button', { name: 'Save Invoice' }).click();
    await page1.getByRole('button', { name: 'Record Payment' }).click();
    await page1.getByRole('combobox').filter({ hasText: 'Select a payment method' }).click();
    await page1.getByLabel('Cash').getByText('Cash').click();
    await page1.getByRole('textbox', { name: '0.00' }).click();
    // await page1.getByRole('textbox', { name: '0.00' }).fill('20000');
    await page.waitForTimeout(3000);
    await page1.getByRole('button', { name: 'Pay', exact: true }).click();
    await page1.getByRole('button').nth(3).click();
    const page2Promise = page1.waitForEvent('popup');
    await page1.getByRole('link', { name: 'Front Desk' }).click();
    const page2 = await page2Promise;
    await page2.getByRole('button', { name: 'Checkouts' }).click();
    await page2.getByRole('tab', { name: 'All Check-outs' }).click();
    await page.waitForTimeout(3000);
    //   await page2.getByRole('button', { name: 'Check Out' }).first().click();
    await page2.getByRole('button', { name: 'Save Check-out Time' }).click();
    });