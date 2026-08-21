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
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
    await page.waitForTimeout(2000);   
    await page.getByRole('button', { name: 'Switch module' }).click();
    await page.getByRole('link', { name: 'Access & Roles', exact: true }).click();
    await page.getByRole('link', { name: 'Permissions', exact: true }).click();
    await page.getByRole('button', { name: 'Collapse sidebar' }).click();
  
    await page.getByRole('button', { name: 'Finance 15/' }).click();

    await page.getByRole('button', { name: 'Bank 0/' }).click();
    await page.getByRole('switch', { name: 'Property Admin: finance.bank.read' }).click();
    await page.getByRole('switch', { name: 'Property Admin: finance.bank.create' }).click();
    await page.getByRole('switch', { name: 'Property Admin: finance.bank.update' }).click();
    await page.getByRole('switch', { name: 'Property Admin: finance.bank.delete' }).click();
    await page.getByRole('button', { name: 'Save changes' }).click();
    await page.waitForTimeout(1000);

    await page.getByRole('button', { name: 'Bank Account 0/' }).click();
    await page.getByRole('switch', { name: 'Property Admin: finance.bank_account.read' }).click();
    await page.getByRole('switch', { name: 'Property Admin: finance.bank_account.create' }).click();
    await page.getByRole('switch', { name: 'Property Admin: finance.bank_account.update' }).click();
    await page.getByRole('switch', { name: 'Property Admin: finance.bank_account.delete' }).click();
    await page.getByRole('button', { name: 'Save changes' }).click();
    await page.waitForTimeout(1000);

    await page.getByRole('button', { name: 'Currency 0/' }).click();
    await page.getByRole('switch', { name: 'Property Admin: finance.currency.read' }).click();
    await page.getByRole('switch', { name: 'Property Admin: finance.currency.create' }).click();
    await page.getByRole('switch', { name: 'Property Admin: finance.currency.update' }).click();
    await page.getByRole('button', { name: 'Save changes' }).click();
    await page.waitForTimeout(1000);

    await page.getByRole('button', { name: 'Exchange Rate 0/' }).click();
    await page.getByRole('switch', { name: 'Property Admin: finance.exchange_rate.read' }).click();
    await page.getByRole('switch', { name: 'Property Admin: finance.exchange_rate.create' }).click();
    await page.getByRole('button', { name: 'Save changes' }).click();
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
    // await page.getByRole('button', { name: 'Switch module' }).click();
    // await page.getByRole('link', { name: 'Access & Roles' }).click();
    // await page.getByRole('link', { name: 'Permissions', exact: true }).click()
    // await page.getByRole('button', { name: 'Collapse sidebar' }).click();
  
    // await page.getByRole('checkbox', { name: 'Property Admin: finance.bank_account.create' }).click();
    // await page.getByRole('checkbox', { name: 'Property Admin: finance.bank_account.delete' }).click();
    // await page.getByRole('checkbox', { name: 'Property Admin: finance.bank_account.read' }).click();
    // await page.getByRole('checkbox', { name: 'Property Admin: finance.bank_account.update' }).click();
    // await page.getByRole('checkbox', { name: 'Property Admin: finance.bank.create' }).click();
    // await page.getByRole('checkbox', { name: 'Property Admin: finance.bank.delete' }).click();
    // await page.getByRole('checkbox', { name: 'Property Admin: finance.bank.read' }).click();
    // await page.getByRole('checkbox', { name: 'Property Admin: finance.bank.update' }).click();
    // await page.getByRole('checkbox', { name: 'Property Admin: finance.currency.create' }).click();
    // await page.getByRole('cell', { name: 'Property Admin: finance.currency.read' }).click();
    // await page.getByRole('checkbox', { name: 'Property Admin: finance.currency.update' }).click();
    // await page.getByRole('checkbox', { name: 'Property Admin: finance.exchange_rate.create' }).click();
    // await page.getByRole('cell', { name: 'Property Admin: finance.exchange_rate.read' }).click();
    // await page.getByRole('button', { name: 'Save 1 change' }).click();
    // await page.waitForTimeout(2000);   
    
});