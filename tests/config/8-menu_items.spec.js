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
    await page.getByRole('link', { name: 'Menu Items' }).click();
    await page.getByRole('button', { name: 'Close Sidebar' }).click();

    // ---- First menu items -----

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'Enter menu name' }).click();
    await page.getByRole('textbox', { name: 'Enter menu name' }).fill('Lemon Iced Tea');
    await page.getByRole('textbox', { name: 'Enter menu code' }).click();
    await page.getByRole('textbox', { name: 'Enter menu code' }).fill('MI-0001');
    await page.getByPlaceholder('Enter price').click();
    await page.getByPlaceholder('Enter price').fill('450');
    await page.getByRole('combobox').first().click();
    await page.getByLabel('Cold Beverages').getByText('Cold Beverages').click();
    await page.getByRole('combobox').filter({ hasText: /^$/ }).click();
    await page.getByLabel('Iced Tea').getByText('Iced Tea').click();
    await page.getByRole('textbox', { name: 'Enter description' }).click();
    await page.getByRole('textbox', { name: 'Enter description' }).fill('Refreshing lemon-flavored iced tea served chilled with ice cubes.');
    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.waitForTimeout(2000);

    // ---- Second menu items -----

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'Enter menu name' }).click();
    await page.getByRole('textbox', { name: 'Enter menu name' }).fill('Spicy Fish Curry');
    await page.getByRole('textbox', { name: 'Enter menu code' }).click();
    await page.getByRole('textbox', { name: 'Enter menu code' }).fill('MI-0002');
    await page.getByPlaceholder('Enter price').click();
    await page.getByPlaceholder('Enter price').fill('1200');
    await page.getByRole('combobox').first().click();
    await page.getByLabel('curries').getByText('curries').click();
    await page.getByRole('combobox').filter({ hasText: /^$/ }).click();
    await page.getByLabel('Fish curries').getByText('Fish curries').click();
    await page.getByRole('textbox', { name: 'Enter description' }).click();
    await page.getByRole('textbox', { name: 'Enter description' }).fill('Spicy and flavorful fish curry with a perfect balance of spices.');
    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.waitForTimeout(2000);

    // ---- Third menu items -----

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'Enter menu name' }).click();
    await page.getByRole('textbox', { name: 'Enter menu name' }).fill('Chocolate Pudding');
    await page.getByRole('textbox', { name: 'Enter menu code' }).click();
    await page.getByRole('textbox', { name: 'Enter menu code' }).fill('MI-0003');
    await page.getByPlaceholder('Enter price').click();
    await page.getByPlaceholder('Enter price').fill('650');
    await page.getByRole('combobox').first().click();
    await page.getByLabel('Dessert').getByText('Dessert').click();
    await page.getByRole('combobox').filter({ hasText: /^$/ }).click();
    await page.getByLabel('Puddings').getByText('Puddings').click();
    await page.getByRole('textbox', { name: 'Enter description' }).click();
    await page.getByRole('textbox', { name: 'Enter description' }).fill('Rich and creamy chocolate pudding with a smooth texture.');
    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.waitForTimeout(2000);

    // ---- Fourth menu items -----

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'Enter menu name' }).click();
    await page.getByRole('textbox', { name: 'Enter menu name' }).fill('Chicken Fried Rice');
    await page.getByRole('textbox', { name: 'Enter menu code' }).click();
    await page.getByRole('textbox', { name: 'Enter menu code' }).fill('MI-0004');
    await page.getByPlaceholder('Enter price').click();
    await page.getByPlaceholder('Enter price').fill('1200');
    await page.getByRole('combobox').first().click();
    await page.getByLabel('Rice').getByText('Rice').click();
    await page.getByRole('combobox').filter({ hasText: /^$/ }).click();
    await page.getByLabel('Fried Rice').getByText('Fried Rice').click();
    await page.getByRole('textbox', { name: 'Enter description' }).click();
    await page.getByRole('textbox', { name: 'Enter description' }).fill('Stir-fried rice with tender chicken, mixed vegetables, eggs, and savory seasoning.');
    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.waitForTimeout(2000);

    // ---- Fifth menu items -----

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'Enter menu name' }).click();
    await page.getByRole('textbox', { name: 'Enter menu name' }).fill('Coca-Cola Regular');
    await page.getByRole('textbox', { name: 'Enter menu code' }).click();
    await page.getByRole('textbox', { name: 'Enter menu code' }).fill('MI-0005');
    await page.getByPlaceholder('Enter price').click();
    await page.getByPlaceholder('Enter price').fill('600');
    await page.getByRole('combobox').first().click();
    await page.getByRole('option', { name: 'Soft drinks' }).click();
    await page.getByRole('combobox').filter({ hasText: /^$/ }).click();
    await page.getByRole('option', { name: 'Coca Cola' }).click();
    await page.getByRole('textbox', { name: 'Enter description' }).click();
    await page.getByRole('textbox', { name: 'Enter description' }).fill('Refreshing carbonated soft drink served chilled.');
    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.waitForTimeout(2000);

    // ---- Sixth menu items -----

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'Enter menu name' }).click();
    await page.getByRole('textbox', { name: 'Enter menu name' }).fill('Iced Green Tea');
    await page.getByRole('textbox', { name: 'Enter menu code' }).click();
    await page.getByRole('textbox', { name: 'Enter menu code' }).fill('MI-0006');
    await page.getByPlaceholder('Enter price').click();
    await page.getByPlaceholder('Enter price').fill('045');
    await page.getByRole('combobox').first().click();
    await page.getByLabel('Tea').getByText('Tea').click();
    await page.getByRole('combobox').filter({ hasText: /^$/ }).click();
    await page.getByLabel('Green Tea').getByText('Green Tea').click();
    await page.getByRole('textbox', { name: 'Enter description' }).click();
    await page.getByRole('textbox', { name: 'Enter description' }).fill('Refreshing green tea served chilled with ice');
    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.waitForTimeout(3000);

    // // ---- Seventh menu items -----

    // await page.getByRole('button', { name: 'Add Menu Item' }).click();
    // await page.getByRole('textbox', { name: 'Enter menu name' }).click();
    // await page.getByRole('textbox', { name: 'Enter menu name' }).fill('rhjrtj');
    // await page.getByRole('textbox', { name: 'Enter menu code' }).click();
    // await page.getByRole('textbox', { name: 'Enter menu code' }).fill('0007');
    // await page.getByPlaceholder('Enter price').click();
    // await page.getByPlaceholder('Enter price').fill('045');
    // await page.getByRole('combobox').first().click();
    // await page.getByLabel('Cold Beverages').getByText('Cold Beverages').click();
    // await page.getByRole('combobox').filter({ hasText: /^$/ }).click();
    // await page.getByLabel('Iced Tea').getByText('Iced Tea').click();
    // await page.getByRole('textbox', { name: 'Enter description' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).fill('wt54yt4yh4');
    // await page.getByRole('button', { name: 'Add Menu Item' }).click();
    // await page.waitForTimeout(2000);

    // // ---- Eighth menu items -----

    // await page.getByRole('button', { name: 'Add Menu Item' }).click();
    // await page.getByRole('textbox', { name: 'Enter menu name' }).click();
    // await page.getByRole('textbox', { name: 'Enter menu name' }).fill('rhjrtj');
    // await page.getByRole('textbox', { name: 'Enter menu code' }).click();
    // await page.getByRole('textbox', { name: 'Enter menu code' }).fill('0008');
    // await page.getByPlaceholder('Enter price').click();
    // await page.getByPlaceholder('Enter price').fill('045');
    // await page.getByRole('combobox').first().click();
    // await page.getByLabel('Cold Beverages').getByText('Cold Beverages').click();
    // await page.getByRole('combobox').filter({ hasText: /^$/ }).click();
    // await page.getByLabel('Iced Tea').getByText('Iced Tea').click();
    // await page.getByRole('textbox', { name: 'Enter description' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).fill('wt54yt4yh4');
    // await page.getByRole('button', { name: 'Add Menu Item' }).click();
    // await page.waitForTimeout(2000);

    // // ---- Ninth menu items -----

    // await page.getByRole('button', { name: 'Add Menu Item' }).click();
    // await page.getByRole('textbox', { name: 'Enter menu name' }).click();
    // await page.getByRole('textbox', { name: 'Enter menu name' }).fill('rhjrtj');
    // await page.getByRole('textbox', { name: 'Enter menu code' }).click();
    // await page.getByRole('textbox', { name: 'Enter menu code' }).fill('0009');
    // await page.getByPlaceholder('Enter price').click();
    // await page.getByPlaceholder('Enter price').fill('045');
    // await page.getByRole('combobox').first().click();
    // await page.getByLabel('Cold Beverages').getByText('Cold Beverages').click();
    // await page.getByRole('combobox').filter({ hasText: /^$/ }).click();
    // await page.getByLabel('Iced Tea').getByText('Iced Tea').click();
    // await page.getByRole('textbox', { name: 'Enter description' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).fill('wt54yt4yh4');
    // await page.getByRole('button', { name: 'Add Menu Item' }).click();
    // await page.waitForTimeout(2000);

    // // ---- Tenth menu items -----

    // await page.getByRole('button', { name: 'Add Menu Item' }).click();
    // await page.getByRole('textbox', { name: 'Enter menu name' }).click();
    // await page.getByRole('textbox', { name: 'Enter menu name' }).fill('rhjrtj');
    // await page.getByRole('textbox', { name: 'Enter menu code' }).click();
    // await page.getByRole('textbox', { name: 'Enter menu code' }).fill('0010');
    // await page.getByPlaceholder('Enter price').click();
    // await page.getByPlaceholder('Enter price').fill('045');
    // await page.getByRole('combobox').first().click();
    // await page.getByLabel('Cold Beverages').getByText('Cold Beverages').click();
    // await page.getByRole('combobox').filter({ hasText: /^$/ }).click();
    // await page.getByLabel('Iced Tea').getByText('Iced Tea').click();
    // await page.getByRole('textbox', { name: 'Enter description' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).fill('wt54yt4yh4');
    // await page.getByRole('button', { name: 'Add Menu Item' }).click();
    // await page.waitForTimeout(2000);

    // // ---- Eleventh menu items -----

    // await page.getByRole('button', { name: 'Add Menu Item' }).click();
    // await page.getByRole('textbox', { name: 'Enter menu name' }).click();
    // await page.getByRole('textbox', { name: 'Enter menu name' }).fill('rhjrtj');
    // await page.getByRole('textbox', { name: 'Enter menu code' }).click();
    // await page.getByRole('textbox', { name: 'Enter menu code' }).fill('0011');
    // await page.getByPlaceholder('Enter price').click();
    // await page.getByPlaceholder('Enter price').fill('045');
    // await page.getByRole('combobox').first().click();
    // await page.getByLabel('Cold Beverages').getByText('Cold Beverages').click();
    // await page.getByRole('combobox').filter({ hasText: /^$/ }).click();
    // await page.getByLabel('Iced Tea').getByText('Iced Tea').click();
    // await page.getByRole('textbox', { name: 'Enter description' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).fill('wt54yt4yh4');
    // await page.getByRole('button', { name: 'Add Menu Item' }).click();
    // await page.waitForTimeout(2000);

    // // ---- Twelfth menu items -----

    // await page.getByRole('button', { name: 'Add Menu Item' }).click();
    // await page.getByRole('textbox', { name: 'Enter menu name' }).click();
    // await page.getByRole('textbox', { name: 'Enter menu name' }).fill('rhjrtj');
    // await page.getByRole('textbox', { name: 'Enter menu code' }).click();
    // await page.getByRole('textbox', { name: 'Enter menu code' }).fill('0012');
    // await page.getByPlaceholder('Enter price').click();
    // await page.getByPlaceholder('Enter price').fill('045');
    // await page.getByRole('combobox').first().click();
    // await page.getByLabel('Cold Beverages').getByText('Cold Beverages').click();
    // await page.getByRole('combobox').filter({ hasText: /^$/ }).click();
    // await page.getByLabel('Iced Tea').getByText('Iced Tea').click();
    // await page.getByRole('textbox', { name: 'Enter description' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).fill('wt54yt4yh4');
    // await page.getByRole('button', { name: 'Add Menu Item' }).click();
    // await page.waitForTimeout(2000);

    
    

            

});