    import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    
    test.setTimeout(120000);

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
    await page.getByRole('button', { name: 'Front Desk Reservations,' }).click();
    await page.getByRole('button', { name: 'Room Allocation' }).click();
    await page.getByRole('button', { name: 'Close Sidebar' }).click();
    // await page.getByText('room').nth(1).click();
    await page.waitForTimeout(10000);
    // await page.getByText('Test Room 108').click();
    await page.getByRole('button', { name: 'Allocate (1)' }).click();
    await page.waitForTimeout(4000);

});