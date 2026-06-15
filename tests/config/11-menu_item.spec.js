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
    await page.getByRole('button', { name: 'F&B Operations' }).click();
    await page.getByRole('link', { name: 'Menu', exact: true }).click();
    await page.getByRole('button', { name: 'Close Sidebar' }).click();

    // ---- First menu items -----

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Lemon Iced Tea');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('LEM ICD TEA');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('MI-0001');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Beverage]Cold Beverages').getByText('[Beverage]Cold Beverages').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Iced Tea').getByText('Iced Tea').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Refreshing lemon-flavored iced tea served chilled with ice cubes.');
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(2000);
    
    // ---- Second menu items -----

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Spicy Fish Curry');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('SPCY FSH CURRY');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('MI-0002');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Food]Curries').getByText('[Food]Curries').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Fish curries').getByText('Fish curries').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Spicy and flavorful fish curry with a perfect balance of spices.');
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(2000);
    
    // ---- Third menu items -----

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Spicy Fish Curry');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('SPCY FSH CURRY');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('MI-0002');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Food]Curries').getByText('[Food]Curries').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Fish curries').getByText('Fish curries').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Spicy and flavorful fish curry with a perfect balance of spices.');
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(2000);

    // ---- Fourth menu items -----

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Spicy Fish Curry');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('SPCY FSH CURRY');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('MI-0002');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Food]Curries').getByText('[Food]Curries').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Fish curries').getByText('Fish curries').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Spicy and flavorful fish curry with a perfect balance of spices.');
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(2000);

    // ---- Fifth menu items -----

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Spicy Fish Curry');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('SPCY FSH CURRY');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('MI-0002');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Food]Curries').getByText('[Food]Curries').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Fish curries').getByText('Fish curries').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Spicy and flavorful fish curry with a perfect balance of spices.');
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(2000);

    // ---- Sixth menu items -----

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Spicy Fish Curry');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('SPCY FSH CURRY');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('MI-0002');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Food]Curries').getByText('[Food]Curries').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Fish curries').getByText('Fish curries').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Spicy and flavorful fish curry with a perfect balance of spices.');
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(2000);

    // ---- Seventh menu items -----

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Spicy Fish Curry');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('SPCY FSH CURRY');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('MI-0002');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Food]Curries').getByText('[Food]Curries').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Fish curries').getByText('Fish curries').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Spicy and flavorful fish curry with a perfect balance of spices.');
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(2000);

    // ---- Eighth menu items -----

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Spicy Fish Curry');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('SPCY FSH CURRY');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('MI-0002');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Food]Curries').getByText('[Food]Curries').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Fish curries').getByText('Fish curries').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Spicy and flavorful fish curry with a perfect balance of spices.');
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(2000);

    // ---- Ninth menu items -----

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Spicy Fish Curry');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('SPCY FSH CURRY');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('MI-0002');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Food]Curries').getByText('[Food]Curries').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Fish curries').getByText('Fish curries').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Spicy and flavorful fish curry with a perfect balance of spices.');
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(2000);

    // ---- Tenth menu items -----

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Spicy Fish Curry');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('SPCY FSH CURRY');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('MI-0002');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Food]Curries').getByText('[Food]Curries').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Fish curries').getByText('Fish curries').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Spicy and flavorful fish curry with a perfect balance of spices.');
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(2000);

    // ---- Eleventh menu items -----

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Spicy Fish Curry');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('SPCY FSH CURRY');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('MI-0002');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Food]Curries').getByText('[Food]Curries').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Fish curries').getByText('Fish curries').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Spicy and flavorful fish curry with a perfect balance of spices.');
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(2000); 

    // ---- Twelfth menu items -----

   await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Spicy Fish Curry');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('SPCY FSH CURRY');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('MI-0002');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Food]Curries').getByText('[Food]Curries').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Fish curries').getByText('Fish curries').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Spicy and flavorful fish curry with a perfect balance of spices.');
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(2000);

    
    

            

});