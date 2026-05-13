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
    await page.locator('div:nth-child(12) > .inline-flex').click(); //Change
    // await page.getByRole('button', { name: 'Manage Property' }).nth(2).click();
    await page.getByRole('button', { name: 'Manage Property' }).first().click();
    await page.getByRole('button', { name: 'Configuration System settings' }).click();;
    await page.getByRole('link', { name: 'Room Class' }).click();
    await page.getByRole('button', { name: 'Close Sidebar' }).click();

    // ----- Add first room class -----

    await page.getByRole('button', { name: 'Add Room Class' }).click();
    await page.getByRole('combobox').filter({ hasText: 'Select a Room Type' }).click();
    await page.getByLabel('Single').getByText('Single').click();
    await page.getByRole('combobox').filter({ hasText: 'Select a Room Category' }).click();
    await page.getByLabel('Standard').getByText('Standard').click();
    await page.getByRole('spinbutton', { name: 'Adult Count *' }).click();
    await page.getByRole('spinbutton', { name: 'Adult Count *' }).fill('1');
    await page.getByRole('spinbutton', { name: 'Child Count' }).click();
    await page.getByRole('spinbutton', { name: 'Child Count' }).fill('0');
    await page.getByRole('button', { name: 'Select Beds' }).click();
    await page.getByRole('button', { name: 'Select' }).nth(1).click();
    await page.locator('[id=":rv:-form-item"] > div:nth-child(2) > .flex.items-center.gap-3 > .w-5').click();
    await page.locator('.w-5.h-5.flex').first().click();
    await page.locator('div:nth-child(4) > .flex.items-center.gap-3 > .w-5').click();
    await page.locator('div:nth-child(7) > .flex.items-center.gap-3 > .w-5').click();
    await page.getByRole('button', { name: 'Submit Room Class' }).click();
    await page.waitForTimeout(2000);

    // ----- Add second room class -----

    await page.getByRole('button', { name: 'Add Room Class' }).click();
    await page.getByRole('combobox').filter({ hasText: 'Select a Room Type' }).click();
    await page.getByLabel('Room Type').getByText('Double', { exact: true }).click();
    await page.getByRole('combobox').filter({ hasText: 'Select a Room Category' }).click();
    await page.getByRole('option', { name: 'Deluxe' }).click();
    await page.getByRole('spinbutton', { name: 'Adult Count *' }).click();
    await page.getByRole('spinbutton', { name: 'Adult Count *' }).fill('2');
    await page.getByRole('spinbutton', { name: 'Child Count' }).click();
    await page.getByRole('spinbutton', { name: 'Child Count' }).fill('0');
    await page.getByRole('button', { name: 'Select Beds' }).click();
    await page.getByRole('button', { name: 'Select' }).nth(4).click();
    await page.locator('div:nth-child(7) > .flex.items-center.gap-3 > .w-5').click();
    await page.locator('div').filter({ hasText: /^Safety deposit box$/ }).first().click();
    await page.locator('.w-5.h-5.flex').first().click();
    await page.locator('div').filter({ hasText: /^AC$/ }).first().click();
    await page.locator('div:nth-child(5) > .flex.items-center.gap-3 > .w-5').click();
    await page.getByRole('button', { name: 'Submit Room Class' }).click();
    await page.waitForTimeout(2000);

    // ----- Add third room class -----

    await page.getByRole('button', { name: 'Add Room Class' }).click();
    await page.getByRole('combobox').filter({ hasText: 'Select a Room Type' }).click();
    await page.getByRole('option', { name: 'Twin', exact: true }).click();
    await page.getByRole('combobox').filter({ hasText: 'Select a Room Category' }).click();
    await page.getByLabel('Executive').getByText('Executive').click();
    await page.getByRole('spinbutton', { name: 'Adult Count *' }).click();
    await page.getByRole('spinbutton', { name: 'Adult Count *' }).fill('2');
    await page.getByRole('spinbutton', { name: 'Child Count' }).click();
    await page.getByRole('spinbutton', { name: 'Child Count' }).fill('1');
    await page.getByRole('button', { name: 'Select Beds' }).click();
    await page.getByRole('button', { name: 'Select' }).nth(4).click();
    await page.locator('div:nth-child(7) > .flex.items-center.gap-3 > .w-5').click();
    await page.locator('div:nth-child(3) > .flex.items-center.gap-3 > .w-5').click();
    await page.locator('div:nth-child(4) > .flex.items-center.gap-3 > .w-5').click();
    await page.locator('[id=":r4r:-form-item"] > div:nth-child(2) > .flex.items-center.gap-3 > .w-5').click();
    await page.locator('.w-5.h-5.flex').first().click();
    await page.getByRole('button', { name: 'Submit Room Class' }).click();
    await page.waitForTimeout(2000);

});