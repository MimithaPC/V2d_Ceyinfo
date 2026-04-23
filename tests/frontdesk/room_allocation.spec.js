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
    await page.locator('div').filter({ hasText: /^Manage →$/ }).first().click();
    await page.getByRole('button', { name: 'Room Allocation' }).click();
    await page.getByRole('button', { name: 'Close Sidebar' }).click();
    // await page.getByText('room').nth(1).click();
    await page.waitForTimeout(4000);
    // await page.getByText('Test Room 108').click();
    await page.getByRole('button', { name: 'Allocate (1)' }).click();
    });