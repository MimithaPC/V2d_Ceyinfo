import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

    await page.goto('https://v2d.ceyinfo.com/');
    await page.getByRole('link', { name: 'Login' }).click();
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill('mimithaprabodani@gmail.com');
    await page.getByRole('textbox', { name: '********' }).click();
    await page.getByRole('textbox', { name: '********' }).fill('Mi@123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.locator('div:nth-child(7) > .inline-flex').click();
    await page.getByRole('button', { name: 'Manage Property' }).nth(1).click();
    // await page.getByRole('button', { name: 'Manage Property' }).first().click();
    await page.getByRole('heading', { name: 'User Management' }).click();
    await page.getByRole('link', { name: 'Users', exact: true }).click();

    // ----- First user -----

    await page.getByRole('button', { name: '+ Add Users' }).click();
    await page.getByText('User Name *dehemiLakmaliJananiMaleena').click();
    await page.getByLabel('Dehemi').getByText('Dehemi').click();
    await page.getByText('General Manager').click();
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(4000);

    // ----- Second user -----

    await page.getByRole('button', { name: '+ Add Users' }).click();
    await page.getByText('User Name *dehemiLakmaliJananiMaleena').click();
    await page.getByLabel('Janani').getByText('Janani').click();
    await page.getByText('General Manager').click();
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(4000);

    // ----- Third user -----

    await page.getByRole('button', { name: '+ Add Users' }).click();
    await page.getByText('User Name *dehemiLakmaliJananiMaleena').click();
    await page.getByLabel('Maleena').getByText('Maleena').click();
    await page.getByText('General Manager').click();
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(4000);

    // // ----- Fourth user -----

    // await page.getByRole('button', { name: '+ Add Users' }).click();
    // await page.getByText('User Name *dehemiLakmaliJananiMaleena').click();
    // await page.getByLabel('dehemi').getByText('Lakmali').click();
    // await page.getByText('General Manager').click();
    // await page.getByRole('button', { name: 'Save' }).click();
    // await page.waitForTimeout(4000);


});