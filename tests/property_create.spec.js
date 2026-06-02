import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    
    test.setTimeout(120000);

    // // Development

    // await page.goto('https://v2d.ceyinfo.com/', { waitUntil: 'networkidle' });
    // await page.getByRole('link', { name: 'Login' }).click();
    // await page.getByRole('textbox', { name: 'Email' }).click();
    // await page.getByRole('textbox', { name: 'Email' }).fill('mimithaprabodani@gmail.com');
    // await page.getByRole('textbox', { name: '********' }).click();
    // await page.getByRole('textbox', { name: '********' }).fill('Mi@123');
    // await page.getByRole('button', { name: 'Login' }).click();
    // await page.waitForTimeout(2000);
    // // await page.locator('div:nth-child(14) > .inline-flex').click(); //Change
    // await page.getByRole('link', { name: 'Add New Property' }).click();
    // await page.getByRole('button', { name: 'Add Property' }).click();
    // await page.getByRole('textbox', { name: 'Enter property name' }).click();
    // await page.getByRole('textbox', { name: 'Enter property name' }).fill('Kandy golden Hotel'); //Change
    // await page.getByRole('textbox', { name: 'Enter email address' }).click();
    // await page.getByRole('textbox', { name: 'Enter email address' }).fill('kandygolden@gmail.com'); //Change
    // await page.getByRole('textbox', { name: 'Enter mobile number' }).click();
    // await page.getByRole('textbox', { name: 'Enter mobile number' }).fill('0764912257');
    // await page.getByRole('button', { name: 'Save Property' }).click();
    // await page.waitForTimeout(2000);

    //  Production

    await page.goto('https://ceyinfo.com/', { waitUntil: 'networkidle' });
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Login' }).click();
    const page1 = await page1Promise;
    await page1.getByRole('textbox', { name: 'Email' }).click();
    await page1.getByRole('textbox', { name: 'Email' }).fill('mimithaprabodani@gmail.com');
    await page1.getByRole('textbox', { name: '********' }).click();
    await page1.getByRole('textbox', { name: '********' }).fill('Mi@123');
    await page1.getByRole('button', { name: 'Login' }).click();
    await page1.waitForTimeout(2000);
    // await page1.locator('div:nth-child(14) > .inline-flex').click(); //Change
    await page1.getByRole('link', { name: 'Add New Property' }).click();
    await page1.getByRole('button', { name: 'Add Property' }).click();
    await page1.getByRole('textbox', { name: 'Enter property name' }).click();
    await page1.getByRole('textbox', { name: 'Enter property name' }).fill('Kandy Hotel'); //Change
    await page1.getByRole('textbox', { name: 'Enter email address' }).click();
    await page1.getByRole('textbox', { name: 'Enter email address' }).fill('kandy@gmail.com'); //Change
    await page1.getByRole('textbox', { name: 'Enter mobile number' }).click();
    await page1.getByRole('textbox', { name: 'Enter mobile number' }).fill('0764912257');
    await page1.getByRole('button', { name: 'Save Property' }).click();
    await page1.waitForTimeout(2000);

    
    
});

