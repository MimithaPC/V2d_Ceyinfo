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
    await page.getByRole('button', { name: 'Property and Rooms' }).click();
    await page.getByRole('link', { name: 'Offers' }).click();
    await page.getByRole('button', { name: 'Close Sidebar' }).click();

    // ----- Add first offer -----

    await page.getByRole('button', { name: 'Add Offer' }).click();
    await page.getByRole('textbox', { name: 'Enter the offer name' }).click();
    await page.getByRole('textbox', { name: 'Enter the offer name' }).fill('Summer offer');
    await page.getByRole('textbox', { name: 'e.g.' }).click();
    await page.getByRole('textbox', { name: 'e.g.' }).fill('10');
    await page.locator('input[name="startdate"]').fill('2026-06-20');
    await page.locator('input[name="enddate"]').fill('2026-06-28');
    await page.getByRole('textbox', { name: 'Promotion Code *' }).click();
    await page.getByRole('textbox', { name: 'Promotion Code *' }).fill('201');
    await page.getByRole('textbox', { name: 'Description *' }).click();
    await page.getByRole('textbox', { name: 'Description *' }).fill('Summer');
    await page.getByRole('button', { name: 'Submit Offer' }).click();
    await page.waitForTimeout(3000);

    // //  Production

    // await page.goto('https://ceyinfo.com/', { waitUntil: 'networkidle' });
    // const page1Promise = page.waitForEvent('popup');
    // await page.getByRole('link', { name: 'Login' }).click();
    // const page1 = await page1Promise;
    // await page1.getByRole('textbox', { name: 'Email' }).click();
    // await page1.getByRole('textbox', { name: 'Email' }).fill('mimithaprabodani@gmail.com');
    // await page1.getByRole('textbox', { name: '********' }).click();
    // await page1.getByRole('textbox', { name: '********' }).fill('Mi@123');
    // await page1.getByRole('button', { name: 'Login' }).click();
    // await page1.waitForTimeout(2000);
    // // await page1.locator('div:nth-child(14) > .inline-flex').click();
    // // await page1.getByRole('button', { name: 'Manage Property' }).nth(2).click();
    // await page1.waitForTimeout(2000);
    // // await page1.getByRole('button', { name: 'Manage Property' }).first().click();
    // await page1.getByRole('button', { name: 'Configuration System settings' }).click();
    // await page1.getByRole('button', { name: 'Property and Rooms' }).click();
    // await page1.getByRole('link', { name: 'Offers' }).click();
    // await page1.getByRole('button', { name: 'Close Sidebar' }).click();

    // // ----- Add first offer -----

    // await page1.getByRole('button', { name: 'Add Offer' }).click();
    // await page1.getByRole('textbox', { name: 'Enter the offer name' }).click();
    // await page1.getByRole('textbox', { name: 'Enter the offer name' }).fill('Summer offer');
    // await page1.getByRole('textbox', { name: 'e.g.' }).click();
    // await page1.getByRole('textbox', { name: 'e.g.' }).fill('10');
    // await page1.locator('input[name="startdate"]').fill('2026-06-20');
    // await page1.locator('input[name="enddate"]').fill('2026-06-28');
    // await page1.getByRole('textbox', { name: 'Promotion Code *' }).click();
    // await page1.getByRole('textbox', { name: 'Promotion Code *' }).fill('201');
    // await page1.getByRole('textbox', { name: 'Description *' }).click();
    // await page1.getByRole('textbox', { name: 'Description *' }).fill('Summer');
    // await page1.getByRole('button', { name: 'Submit Offer' }).click();
    // await page1.waitForTimeout(3000);

});