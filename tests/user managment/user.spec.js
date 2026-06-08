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

    // ----- First user -----

    await page.getByRole('button', { name: '+ Add Users' }).click();
    await page.getByText('User Name *LakmaliMaleenaJanani').click();
    await page.getByLabel('Janani').getByText('Janani').click();
    // await page.getByText('root-user').click();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(5000);

    // ----- Second user -----

    await page.getByRole('button', { name: '+ Add Users' }).click();
    await page.getByText('User Name *LakmaliMaleena').click();
    await page.getByLabel('Maleena').getByText('Maleena').click();
    // await page.getByText('root-user').click();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(5000);

    // ----- Third user -----

    await page.getByRole('button', { name: '+ Add Users' }).click();
    await page.getByText('User Name *Lakmali').click();
    await page.getByLabel('Lakmali').getByText('Lakmali').click();
    // await page.getByText('root-user').click();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(5000);

    // // ----- Fourth user -----

    // await page.getByRole('button', { name: '+ Add Users' }).click();
    // await page.getByText('User Name *LakmaliJananiMaleenaDehemi').click();
    // await page.getByLabel('Dehemi').getByText('Dehemi').click();
    // await page.getByText('root-user').click();
    // await page.getByRole('button', { name: 'Save' }).click();
    // await page.waitForTimeout(5000);


});