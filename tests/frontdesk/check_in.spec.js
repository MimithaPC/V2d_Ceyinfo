    import { test, expect } from '@playwright/test';

    test('test', async ({ page }) => {
    await page.goto('https://v2d.ceyinfo.com/');
    await page.getByRole('link', { name: 'Login' }).click();
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill('slakmaligunasingha@gmail.com');
    await page.getByRole('textbox', { name: '********' }).click();
    await page.getByRole('textbox', { name: '********' }).fill('123456');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('button', { name: 'Login' }).nth(1).click();
    await page.getByRole('button', { name: 'Manage Property' }).first().click();
    await page.getByRole('heading', { name: 'Front Desk' }).click();
    await page.getByRole('button', { name: 'Check-Ins', exact: true }).click();
    await page.getByRole('button', { name: 'Close Sidebar' }).click();
    await page.getByRole('tab', { name: 'All Check-ins' }).click();
    await page.waitForTimeout(4000);
    // await page.getByRole('button', { name: 'GRC' }).nth(1).click();
    // await page.getByText('Click to upload (2 remaining)').first().click();
    // await page.locator('body').setInputFiles('download (1).jpeg');
    await page.getByRole('button', { name: 'Save Registration' }).click();
    await page.getByRole('button', { name: 'Save Check-In Time' }).click();
    });