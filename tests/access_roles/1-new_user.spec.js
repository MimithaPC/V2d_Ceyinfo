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
    await page.getByRole('button', { name: 'Switch module' }).click();
    await page.getByRole('link', { name: 'Access & Roles' }).click();
    await page.getByRole('link', { name: 'Users' }).click();
    await page.getByRole('button', { name: 'Collapse sidebar' }).click();

    // ----- First user -----

    await page.getByRole('button', { name: 'Add user' }).click();
    await page.getByRole('textbox', { name: 'Full name' }).click();
    await page.getByRole('textbox', { name: 'Full name' }).fill('Janani Kavindya');
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill('jananikavindya45@gmail.com');
    await page.getByRole('combobox').click();
    await page.getByLabel('Property Admin').getByText('Property Admin').click();
    await page.getByRole('checkbox', { name: 'Front Desk' }).click();
    await page.getByRole('checkbox', { name: 'Point of Sale' }).nth(1).click();
    await page.locator('label').filter({ hasText: 'Access & Roles' }).click();
    await page.locator('label').filter({ hasText: 'Finance' }).click();
    await page.locator('label').filter({ hasText: 'Property Home' }).click();
    await page.getByRole('checkbox', { name: 'HR' }).click();
    await page.getByRole('checkbox', { name: 'Inventory' }).click();
    await page.getByRole('checkbox', { name: 'Procurement' }).click();
    await page.getByRole('checkbox', { name: 'Website' }).click();
    await page.getByRole('button', { name: 'Add user' }).click();
    await page.waitForTimeout(2000);

    // ----- Second user -----

    await page.getByRole('button', { name: 'Add user' }).click();
    await page.getByRole('textbox', { name: 'Full name' }).click();
    await page.getByRole('textbox', { name: 'Full name' }).fill('Maleena Kalhari');
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill('maleenakalhari675@gmail.com');
    await page.getByRole('combobox').click();
    await page.getByLabel('Property Admin').getByText('Property Admin').click();
    await page.getByRole('checkbox', { name: 'Front Desk' }).click();
    await page.getByRole('checkbox', { name: 'Point of Sale' }).nth(1).click();
    await page.locator('label').filter({ hasText: 'Access & Roles' }).click();
    await page.locator('label').filter({ hasText: 'Finance' }).click();
    await page.locator('label').filter({ hasText: 'Property Home' }).click();
    await page.getByRole('checkbox', { name: 'HR' }).click();
    await page.getByRole('checkbox', { name: 'Inventory' }).click();
    await page.getByRole('checkbox', { name: 'Procurement' }).click();
    await page.getByRole('checkbox', { name: 'Website' }).click();
    await page.getByRole('button', { name: 'Add user' }).click();
    await page.waitForTimeout(2000);

    // ----- Third user -----

    await page.getByRole('button', { name: 'Add user' }).click();
    await page.getByRole('textbox', { name: 'Full name' }).click();
    await page.getByRole('textbox', { name: 'Full name' }).fill('Lakmali Gunasingha');
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill('slakmaligunasingha@gmail.com');
    await page.getByRole('combobox').click();
    await page.getByLabel('Property Admin').getByText('Property Admin').click();
    await page.getByRole('checkbox', { name: 'Front Desk' }).click();
    await page.getByRole('checkbox', { name: 'Point of Sale' }).nth(1).click();
    await page.locator('label').filter({ hasText: 'Access & Roles' }).click();
    await page.locator('label').filter({ hasText: 'Finance' }).click();
    await page.locator('label').filter({ hasText: 'Property Home' }).click();
    await page.getByRole('checkbox', { name: 'HR' }).click();
    await page.getByRole('checkbox', { name: 'Inventory' }).click();
    await page.getByRole('checkbox', { name: 'Procurement' }).click();
    await page.getByRole('checkbox', { name: 'Website' }).click();
    await page.getByRole('button', { name: 'Add user' }).click();
    await page.waitForTimeout(2000);

    // // ----- Fourth user -----

    // await page.getByRole('button', { name: 'Add user' }).click();
    // await page.getByRole('textbox', { name: 'Full name' }).click();
    // await page.getByRole('textbox', { name: 'Full name' }).fill('Dehemi Upeksha');
    // await page.getByRole('textbox', { name: 'Email' }).click();
    // await page.getByRole('textbox', { name: 'Email' }).fill('dehemiupeksha6@gmail.com');
    // await page.getByRole('combobox').click();
    // await page.getByLabel('Property Admin').getByText('Property Admin').click();
    // await page.getByRole('checkbox', { name: 'Front Desk' }).click();
    // await page.getByRole('checkbox', { name: 'Point of Sale' }).nth(1).click();
    // await page.locator('label').filter({ hasText: 'Access & Roles' }).click();
    // await page.locator('label').filter({ hasText: 'Finance' }).click();
    // await page.locator('label').filter({ hasText: 'Property Home' }).click();
    // await page.getByRole('checkbox', { name: 'HR' }).click();
    // await page.getByRole('checkbox', { name: 'Inventory' }).click();
    // await page.getByRole('checkbox', { name: 'Procurement' }).click();
    // await page.getByRole('checkbox', { name: 'Website' }).click();
    // await page.getByRole('button', { name: 'Add user' }).click();
    // await page.waitForTimeout(2000);
    
    // // ----- Fifth user -----

    // await page.getByRole('button', { name: 'Add user' }).click();
    // await page.getByRole('textbox', { name: 'Full name' }).click();
    // await page.getByRole('textbox', { name: 'Full name' }).fill('Amna Suhaib');
    // await page.getByRole('textbox', { name: 'Email' }).click();
    // await page.getByRole('textbox', { name: 'Email' }).fill('amnaf3479@gmail.com');
    // await page.getByRole('combobox').click();
    // await page.getByLabel('Property Admin').getByText('Property Admin').click();
    // await page.getByRole('checkbox', { name: 'Front Desk' }).click();
    // await page.getByRole('checkbox', { name: 'Point of Sale' }).nth(1).click();
    // await page.locator('label').filter({ hasText: 'Access & Roles' }).click();
    // await page.locator('label').filter({ hasText: 'Finance' }).click();
    // await page.locator('label').filter({ hasText: 'Property Home' }).click();
    // await page.getByRole('checkbox', { name: 'HR' }).click();
    // await page.getByRole('checkbox', { name: 'Inventory' }).click();
    // await page.getByRole('checkbox', { name: 'Procurement' }).click();
    // await page.getByRole('checkbox', { name: 'Website' }).click();
    // await page.getByRole('button', { name: 'Add user' }).click();
    // await page.waitForTimeout(2000);

    // // ----- Sixth user -----

    // await page.getByRole('button', { name: 'Add user' }).click();
    // await page.getByRole('textbox', { name: 'Full name' }).click();
    // await page.getByRole('textbox', { name: 'Full name' }).fill('Chrishantha Costa');
    // await page.getByRole('textbox', { name: 'Email' }).click();
    // await page.getByRole('textbox', { name: 'Email' }).fill('chrishanthacosta@gmail.com');
    // await page.getByRole('combobox').click();
    // await page.getByLabel('Property Admin').getByText('Property Admin').click();
    // await page.getByRole('checkbox', { name: 'Front Desk' }).click();
    // await page.getByRole('checkbox', { name: 'Point of Sale' }).nth(1).click();
    // await page.locator('label').filter({ hasText: 'Access & Roles' }).click();
    // await page.locator('label').filter({ hasText: 'Finance' }).click();
    // await page.locator('label').filter({ hasText: 'Property Home' }).click();
    // await page.getByRole('checkbox', { name: 'HR' }).click();
    // await page.getByRole('checkbox', { name: 'Inventory' }).click();
    // await page.getByRole('checkbox', { name: 'Procurement' }).click();
    // await page.getByRole('checkbox', { name: 'Website' }).click();
    // await page.getByRole('button', { name: 'Add user' }).click();
    // await page.waitForTimeout(2000);

    // // ----- Seventh user -----

    // await page.getByRole('button', { name: 'Add user' }).click();
    // await page.getByRole('textbox', { name: 'Full name' }).click();
    // await page.getByRole('textbox', { name: 'Full name' }).fill('Kasun Kasun');
    // await page.getByRole('textbox', { name: 'Email' }).click();
    // await page.getByRole('textbox', { name: 'Email' }).fill('kasund564@gmail.com');
    // await page.getByRole('combobox').click();
    // await page.getByLabel('Property Admin').getByText('Property Admin').click();
    // await page.getByRole('checkbox', { name: 'Front Desk' }).click();
    // await page.getByRole('checkbox', { name: 'Point of Sale' }).nth(1).click();
    // await page.locator('label').filter({ hasText: 'Access & Roles' }).click();
    // await page.locator('label').filter({ hasText: 'Finance' }).click();
    // await page.locator('label').filter({ hasText: 'Property Home' }).click();
    // await page.getByRole('checkbox', { name: 'HR' }).click();
    // await page.getByRole('checkbox', { name: 'Inventory' }).click();
    // await page.getByRole('checkbox', { name: 'Procurement' }).click();
    // await page.getByRole('checkbox', { name: 'Website' }).click();
    // await page.getByRole('button', { name: 'Add user' }).click();
    // await page.waitForTimeout(2000);
    
    
    
    
    
    
    
    
    
    // //  Production

    // await page.goto('https://hotel-erp.ceyinfo.com/', { waitUntil: 'networkidle' });
    // await page.getByRole('navigation').getByRole('link', { name: 'Sign in' }).click();
    // await page.getByRole('textbox', { name: 'Work email' }).click();
    // await page.getByRole('textbox', { name: 'Work email' }).fill('mimithaprabodani@gmail.com');
    // await page.getByRole('textbox', { name: 'Password' }).click();
    // await page.getByRole('textbox', { name: 'Password' }).fill('123456789');
    // await page.getByRole('button', { name: 'Sign in' }).click();
    // await page.waitForTimeout(2000);
    // await page.getByRole('link', { name: 'Access & Roles 2 Users 3' }).click();
    // await page.getByRole('link', { name: 'Users' }).click();
    // await page.getByRole('button', { name: 'Collapse sidebar' }).click();

    // // ----- First user -----

    // await page.getByRole('button', { name: 'Add user' }).click();
    // await page.getByRole('textbox', { name: 'Full name' }).click();
    // await page.getByRole('textbox', { name: 'Full name' }).fill('Janani Kavindya');
    // await page.getByRole('textbox', { name: 'Email' }).click();
    // await page.getByRole('textbox', { name: 'Email' }).fill('jananikavindya45@gmail.com');
    // await page.getByRole('combobox').click();
    // await page.getByLabel('Property Admin').getByText('Property Admin').click();
    // await page.getByRole('checkbox', { name: 'Front Desk' }).click();
    // await page.getByRole('checkbox', { name: 'Point of Sale' }).nth(1).click();
    // await page.locator('label').filter({ hasText: 'Access & Roles' }).click();
    // await page.locator('label').filter({ hasText: 'Finance' }).click();
    // await page.locator('label').filter({ hasText: 'Property Home' }).click();
    // await page.getByRole('checkbox', { name: 'HR' }).click();
    // await page.getByRole('checkbox', { name: 'Inventory' }).click();
    // await page.getByRole('checkbox', { name: 'Procurement' }).click();
    // await page.getByRole('checkbox', { name: 'Website' }).click();
    // await page.getByRole('button', { name: 'Add user' }).click();
    // await page.waitForTimeout(2000);

    // // ----- Second user -----

    // await page.getByRole('button', { name: 'Add user' }).click();
    // await page.getByRole('textbox', { name: 'Full name' }).click();
    // await page.getByRole('textbox', { name: 'Full name' }).fill('Maleena Kalhari');
    // await page.getByRole('textbox', { name: 'Email' }).click();
    // await page.getByRole('textbox', { name: 'Email' }).fill('maleenakalhari675@gmail.com');
    // await page.getByRole('combobox').click();
    // await page.getByLabel('Property Admin').getByText('Property Admin').click();
    // await page.getByRole('checkbox', { name: 'Front Desk' }).click();
    // await page.getByRole('checkbox', { name: 'Point of Sale' }).nth(1).click();
    // await page.locator('label').filter({ hasText: 'Access & Roles' }).click();
    // await page.locator('label').filter({ hasText: 'Finance' }).click();
    // await page.locator('label').filter({ hasText: 'Property Home' }).click();
    // await page.getByRole('checkbox', { name: 'HR' }).click();
    // await page.getByRole('checkbox', { name: 'Inventory' }).click();
    // await page.getByRole('checkbox', { name: 'Procurement' }).click();
    // await page.getByRole('checkbox', { name: 'Website' }).click();
    // await page.getByRole('button', { name: 'Add user' }).click();
    // await page.waitForTimeout(2000);

    // // ----- Third user -----

    // await page.getByRole('button', { name: 'Add user' }).click();
    // await page.getByRole('textbox', { name: 'Full name' }).click();
    // await page.getByRole('textbox', { name: 'Full name' }).fill('Lakmali Gunasingha');
    // await page.getByRole('textbox', { name: 'Email' }).click();
    // await page.getByRole('textbox', { name: 'Email' }).fill('slakmaligunasingha@gmail.com');
    // await page.getByRole('combobox').click();
    // await page.getByLabel('Property Admin').getByText('Property Admin').click();
    // await page.getByRole('checkbox', { name: 'Front Desk' }).click();
    // await page.getByRole('checkbox', { name: 'Point of Sale' }).nth(1).click();
    // await page.locator('label').filter({ hasText: 'Access & Roles' }).click();
    // await page.locator('label').filter({ hasText: 'Finance' }).click();
    // await page.locator('label').filter({ hasText: 'Property Home' }).click();
    // await page.getByRole('checkbox', { name: 'HR' }).click();
    // await page.getByRole('checkbox', { name: 'Inventory' }).click();
    // await page.getByRole('checkbox', { name: 'Procurement' }).click();
    // await page.getByRole('checkbox', { name: 'Website' }).click();
    // await page.getByRole('button', { name: 'Add user' }).click();
    // await page.waitForTimeout(2000);

    // // ----- Fourth user -----

    // await page.getByRole('button', { name: 'Add user' }).click();
    // await page.getByRole('textbox', { name: 'Full name' }).click();
    // await page.getByRole('textbox', { name: 'Full name' }).fill('Dehemi Upeksha');
    // await page.getByRole('textbox', { name: 'Email' }).click();
    // await page.getByRole('textbox', { name: 'Email' }).fill('dehemiupeksha6@gmail.com');
    // await page.getByRole('combobox').click();
    // await page.getByLabel('Property Admin').getByText('Property Admin').click();
    // await page.getByRole('checkbox', { name: 'Front Desk' }).click();
    // await page.getByRole('checkbox', { name: 'Point of Sale' }).nth(1).click();
    // await page.locator('label').filter({ hasText: 'Access & Roles' }).click();
    // await page.locator('label').filter({ hasText: 'Finance' }).click();
    // await page.locator('label').filter({ hasText: 'Property Home' }).click();
    // await page.getByRole('checkbox', { name: 'HR' }).click();
    // await page.getByRole('checkbox', { name: 'Inventory' }).click();
    // await page.getByRole('checkbox', { name: 'Procurement' }).click();
    // await page.getByRole('checkbox', { name: 'Website' }).click();
    // await page.getByRole('button', { name: 'Add user' }).click();
    // await page.waitForTimeout(2000);
    
    // // ----- Fifth user -----

    // await page.getByRole('button', { name: 'Add user' }).click();
    // await page.getByRole('textbox', { name: 'Full name' }).click();
    // await page.getByRole('textbox', { name: 'Full name' }).fill('Amna Suhaib');
    // await page.getByRole('textbox', { name: 'Email' }).click();
    // await page.getByRole('textbox', { name: 'Email' }).fill('amnaf3479@gmail.com');
    // await page.getByRole('combobox').click();
    // await page.getByLabel('Property Admin').getByText('Property Admin').click();
    // await page.getByRole('checkbox', { name: 'Front Desk' }).click();
    // await page.getByRole('checkbox', { name: 'Point of Sale' }).nth(1).click();
    // await page.locator('label').filter({ hasText: 'Access & Roles' }).click();
    // await page.locator('label').filter({ hasText: 'Finance' }).click();
    // await page.locator('label').filter({ hasText: 'Property Home' }).click();
    // await page.getByRole('checkbox', { name: 'HR' }).click();
    // await page.getByRole('checkbox', { name: 'Inventory' }).click();
    // await page.getByRole('checkbox', { name: 'Procurement' }).click();
    // await page.getByRole('checkbox', { name: 'Website' }).click();
    // await page.getByRole('button', { name: 'Add user' }).click();
    // await page.waitForTimeout(2000);

    // // ----- Sixth user -----

    // await page.getByRole('button', { name: 'Add user' }).click();
    // await page.getByRole('textbox', { name: 'Full name' }).click();
    // await page.getByRole('textbox', { name: 'Full name' }).fill('Chrishantha Costa');
    // await page.getByRole('textbox', { name: 'Email' }).click();
    // await page.getByRole('textbox', { name: 'Email' }).fill('chrishanthacosta@gmail.com');
    // await page.getByRole('combobox').click();
    // await page.getByLabel('Property Admin').getByText('Property Admin').click();
    // await page.getByRole('checkbox', { name: 'Front Desk' }).click();
    // await page.getByRole('checkbox', { name: 'Point of Sale' }).nth(1).click();
    // await page.locator('label').filter({ hasText: 'Access & Roles' }).click();
    // await page.locator('label').filter({ hasText: 'Finance' }).click();
    // await page.locator('label').filter({ hasText: 'Property Home' }).click();
    // await page.getByRole('checkbox', { name: 'HR' }).click();
    // await page.getByRole('checkbox', { name: 'Inventory' }).click();
    // await page.getByRole('checkbox', { name: 'Procurement' }).click();
    // await page.getByRole('checkbox', { name: 'Website' }).click();
    // await page.getByRole('button', { name: 'Add user' }).click();
    // await page.waitForTimeout(2000);

    // // ----- Seventh user -----

    // await page.getByRole('button', { name: 'Add user' }).click();
    // await page.getByRole('textbox', { name: 'Full name' }).click();
    // await page.getByRole('textbox', { name: 'Full name' }).fill('Kasun Kasun');
    // await page.getByRole('textbox', { name: 'Email' }).click();
    // await page.getByRole('textbox', { name: 'Email' }).fill('kasund564@gmail.com');
    // await page.getByRole('combobox').click();
    // await page.getByLabel('Property Admin').getByText('Property Admin').click();
    // await page.getByRole('checkbox', { name: 'Front Desk' }).click();
    // await page.getByRole('checkbox', { name: 'Point of Sale' }).nth(1).click();
    // await page.locator('label').filter({ hasText: 'Access & Roles' }).click();
    // await page.locator('label').filter({ hasText: 'Finance' }).click();
    // await page.locator('label').filter({ hasText: 'Property Home' }).click();
    // await page.getByRole('checkbox', { name: 'HR' }).click();
    // await page.getByRole('checkbox', { name: 'Inventory' }).click();
    // await page.getByRole('checkbox', { name: 'Procurement' }).click();
    // await page.getByRole('checkbox', { name: 'Website' }).click();
    // await page.getByRole('button', { name: 'Add user' }).click();
    // await page.waitForTimeout(2000);

});