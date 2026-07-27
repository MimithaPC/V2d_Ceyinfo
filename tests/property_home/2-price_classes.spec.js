import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

    test.setTimeout(120000);

    // Development

    await page.goto('https://v3.ceyinfo.com/', { waitUntil: 'networkidle' });
    await page.getByRole('navigation').getByRole('link', { name: 'Sign in' }).click();
    await page.getByRole('textbox', { name: 'Work email' }).click();
    await page.getByRole('textbox', { name: 'Work email' }).fill('mimithaprabodani@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('123456789');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.waitForTimeout(2000);   
    await page.getByRole('button', { name: 'Rooms & Rates ▼' }).click();
    await page.getByRole('link', { name: 'Price Classes' }).click();
    await page.getByRole('button', { name: 'Collapse sidebar' }).click();

    await page.getByRole('button', { name: 'Add price class' }).click();
    await page.locator('#pc-type').selectOption('01KYH8XKX3N3P5DH456YJPXARH');
    await page.locator('#pc-cat').selectOption('01KYH8XZWD5BS8N4NETTWZE2YZ');
    await page.getByRole('button', { name: 'Create' }).click();
    await page.waitForTimeout(1000);

    await page.getByRole('button', { name: 'Add price class' }).click();
    await page.locator('#pc-type').selectOption('01KYH8XKX3N3P5DH456YJPXARH');
    await page.locator('#pc-cat').selectOption('01KYH8YA471MPYEQHS4ACBASV4');
    await page.getByRole('button', { name: 'Create' }).click();
    await page.waitForTimeout(1000);

    await page.getByRole('button', { name: 'Add price class' }).click();
    await page.locator('#pc-type').selectOption('01KYH8XPHFQV468AH2XW6ZXC84');
    await page.locator('#pc-cat').selectOption('01KYH8XZWD5BS8N4NETTWZE2YZ');
    await page.getByRole('button', { name: 'Create' }).click();
    await page.waitForTimeout(1000);

    await page.getByRole('button', { name: 'Add price class' }).click();
    await page.locator('#pc-type').selectOption('01KYH8XPHFQV468AH2XW6ZXC84');
    await page.locator('#pc-cat').selectOption('01KYH8YA471MPYEQHS4ACBASV4');
    await page.getByRole('button', { name: 'Create' }).click();
    await page.waitForTimeout(2000);

    
    
    
    
    
    
    
    
    // //  Production

    // await page.goto('https://hotel-erp.ceyinfo.com/', { waitUntil: 'networkidle' });
    // await page.getByRole('navigation').getByRole('link', { name: 'Sign in' }).click();
    // await page.getByRole('textbox', { name: 'Work email' }).click();
    // await page.getByRole('textbox', { name: 'Work email' }).fill('mimithaprabodani@gmail.com');
    // await page.getByRole('textbox', { name: 'Password' }).click();
    // await page.getByRole('textbox', { name: 'Password' }).fill('123456789');
    // await page.getByRole('button', { name: 'Sign in' }).click();
    // await page.waitForTimeout(2000);   
    // await page.getByRole('button', { name: 'Rooms & Rates ▼' }).click();
    // await page.getByRole('link', { name: 'Price Classes' }).click();
    // await page.getByRole('button', { name: 'Collapse sidebar' }).click();

    // await page.getByRole('button', { name: 'Add price class' }).click();
    // await page.locator('#pc-type').selectOption('01KYH8XKX3N3P5DH456YJPXARH');
    // await page.locator('#pc-cat').selectOption('01KYH8XZWD5BS8N4NETTWZE2YZ');
    // await page.getByRole('button', { name: 'Create' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('button', { name: 'Add price class' }).click();
    // await page.locator('#pc-type').selectOption('01KYH8XKX3N3P5DH456YJPXARH');
    // await page.locator('#pc-cat').selectOption('01KYH8YA471MPYEQHS4ACBASV4');
    // await page.getByRole('button', { name: 'Create' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('button', { name: 'Add price class' }).click();
    // await page.locator('#pc-type').selectOption('01KYH8XPHFQV468AH2XW6ZXC84');
    // await page.locator('#pc-cat').selectOption('01KYH8XZWD5BS8N4NETTWZE2YZ');
    // await page.getByRole('button', { name: 'Create' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('button', { name: 'Add price class' }).click();
    // await page.locator('#pc-type').selectOption('01KYH8XPHFQV468AH2XW6ZXC84');
    // await page.locator('#pc-cat').selectOption('01KYH8YA471MPYEQHS4ACBASV4');
    // await page.getByRole('button', { name: 'Create' }).click();
    // await page.waitForTimeout(2000);

});