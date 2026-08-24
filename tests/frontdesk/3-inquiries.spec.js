import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

    test.setTimeout(120000);

    await page.goto('https://v3.ceyinfo.com/', { waitUntil: 'networkidle' });
    await page.getByRole('navigation').getByRole('link', { name: 'Sign in' }).click();
    await page.getByRole('textbox', { name: 'Work email' }).click();
    await page.getByRole('textbox', { name: 'Work email' }).fill('mimithaprabodani@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('123456789');
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
    await page.waitForTimeout(2000);   
    await page.getByRole('button', { name: 'Switch module' }).click();
    await page.getByRole('link', { name: 'Front Desk', exact: true }).click();
    await page.goto('https://test1-frontdesk.v3.ceyinfo.com/test3');
    await page.getByRole('link', { name: 'Inquiries' }).click();
    await page.getByRole('button', { name: 'Collapse sidebar' }).click();
    
    await page.getByRole('button', { name: '+ New inquiry' }).click();
    await page.getByRole('button', { name: 'Smart Wizard New Start from' }).click();
    await page.getByRole('button', { name: '28' }).nth(1).click();
    await page.getByRole('button', { name: '29' }).nth(1).click();
    await page.getByRole('button', { name: 'Set dates' }).click();
    await page.getByRole('button', { name: 'High season - 2026LKR' }).click();
    await page.getByRole('button', { name: '+ Add Room' }).first().click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('button', { name: 'Search Guest' }).click();

});