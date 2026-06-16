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
    await page.getByRole('button', { name: 'Setup' }).click();
    await page.getByRole('link', { name: 'Room view / Type / Category' }).click();
    await page.getByRole('button', { name: 'Close Sidebar' }).click();

    // ----- Set not applicable -----

    await page.getByRole('switch', { name: 'Not Applicable' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(3000);


    // // ----- First view -----

    // await page.getByRole('button', { name: 'Add' }).first().click();
    // await page.getByRole('textbox', { name: 'Room View *' }).fill('Sea View');
    // await page.getByRole('button', { name: 'Save' }).click();
    // await page1.waitForTimeout(2000);

    // // ----- Second view -----

    // await page.getByRole('button', { name: 'Add' }).first().click();
    // await page.getByRole('textbox', { name: 'Room View *' }).fill('N/A View');
    // await page.getByRole('button', { name: 'Save' }).click();
    // await page1.waitForTimeout(2000);

    // // ----- Third view -----

    // await page.getByRole('button', { name: 'Add' }).first().click();
    // await page.getByRole('textbox', { name: 'Room View *' }).fill('Garden View');
    // await page.getByRole('button', { name: 'Save' }).click();
    // await page.waitForTimeout(3000);









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
    // await page1.getByRole('button', { name: 'Setup' }).click();
    // await page1.getByRole('link', { name: 'Room view / Type / Category' }).click();
    // await page1.getByRole('button', { name: 'Close Sidebar' }).click();

    // // ----- Set not applicable -----

    // await page1.getByRole('switch', { name: 'Not Applicable' }).click();
    // await page1.getByRole('button', { name: 'Confirm' }).click();
    // await page1.waitForTimeout(3000);


    // // // ----- First view -----

    // // await page1.getByRole('button', { name: 'Add' }).first().click();
    // // await page1.getByRole('textbox', { name: 'Room View *' }).fill('Sea View');
    // // await page1.getByRole('button', { name: 'Save' }).click();
    // // await page1.waitForTimeout(2000);

    // // // ----- Second view -----

    // // await page1.getByRole('button', { name: 'Add' }).first().click();
    // // await page1.getByRole('textbox', { name: 'Room View *' }).fill('N/A View');
    // // await page1.getByRole('button', { name: 'Save' }).click();
    // // await page1.waitForTimeout(2000);

    // // // ----- Third view -----

    // // await page1.getByRole('button', { name: 'Add' }).first().click();
    // // await page1.getByRole('textbox', { name: 'Room View *' }).fill('Garden View');
    // // await page1.getByRole('button', { name: 'Save' }).click();
    // // await page1.waitForTimeout(3000);

});