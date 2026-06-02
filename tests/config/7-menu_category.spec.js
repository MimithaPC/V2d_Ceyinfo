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
    // await page.locator('div:nth-child(12) > .inline-flex').click(); //Change
    // await page.getByRole('button', { name: 'Manage Property' }).nth(2).click();
    // await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Manage Property' }).first().click();
    await page.getByRole('button', { name: 'Configuration System settings' }).click();
    await page.getByRole('button', { name: 'F&B Operations' }).click();
    await page.getByRole('link', { name: 'Menu Category' }).click();
    await page.getByRole('button', { name: 'Close Sidebar' }).click();

    // ----- Add main category (Foods) -----

    await page.getByRole('button', { name: 'Add Main Category' }).click();
    await page.getByRole('textbox', { name: 'Enter category name' }).fill('Rice');
    await page.getByRole('combobox', { name: 'Category Type *' }).click();
    await page.getByLabel('Food').getByText('Food').click();
    await page.getByRole('textbox', { name: 'Enter description' }).click();
    await page.getByRole('textbox', { name: 'Enter description' }).fill('Freshly cooked steamed rice, served as a perfect accompaniment to curries, meats, seafood, and vegetable dishes.');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);

    await page.getByRole('button', { name: 'Add Main Category' }).click();
    await page.getByRole('textbox', { name: 'Enter category name' }).fill('Dessert');
    await page.getByRole('combobox', { name: 'Category Type *' }).click();
    await page.getByLabel('Food').getByText('Food').click();
    await page.getByRole('textbox', { name: 'Enter description' }).click();
    await page.getByRole('textbox', { name: 'Enter description' }).fill('Delicious desserts to satisfy your sweet tooth.');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);

    await page.getByRole('button', { name: 'Add Main Category' }).click();
    await page.getByRole('textbox', { name: 'Enter category name' }).fill('Curries');
    await page.getByRole('combobox', { name: 'Category Type *' }).click();
    await page.getByLabel('Food').getByText('Food').click();
    await page.getByRole('textbox', { name: 'Enter description' }).click();
    await page.getByRole('textbox', { name: 'Enter description' }).fill('Delicious curries to satisfy your taste buds.');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);

    // ----- Add main category (Beverages) -----

    await page.getByRole('button', { name: 'Beverage' }).click();

    await page.getByRole('button', { name: 'Add Main Category' }).click();
    await page.getByRole('textbox', { name: 'Enter category name' }).fill('Cold Beverages');
    await page.getByRole('combobox', { name: 'Category Type *' }).click();
    await page.getByRole('option', { name: 'Beverage' }).click();
    await page.getByRole('textbox', { name: 'Enter description' }).click();
    await page.getByRole('textbox', { name: 'Enter description' }).fill('Delicious cold beverages to quench your thirst.');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);

    await page.getByRole('button', { name: 'Add Main Category' }).click();
    await page.getByRole('textbox', { name: 'Enter category name' }).fill('Tea');
    await page.getByRole('combobox', { name: 'Category Type *' }).click();
    await page.getByRole('option', { name: 'Beverage' }).click();
    await page.getByRole('textbox', { name: 'Enter description' }).click();
    await page.getByRole('textbox', { name: 'Enter description' }).fill('Delicious tea to quench your thirst.');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);

    await page.getByRole('button', { name: 'Add Main Category' }).click();
    await page.getByRole('textbox', { name: 'Enter category name' }).fill('Soft Drinks');
    await page.getByRole('combobox', { name: 'Category Type *' }).click();
    await page.getByRole('option', { name: 'Beverage' }).click();
    await page.getByRole('textbox', { name: 'Enter description' }).click();
    await page.getByRole('textbox', { name: 'Enter description' }).fill('Delicious soft drinks to quench your thirst.');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);

    // ----- Add sub category (Foods) -----

    await page.getByRole('tab', { name: 'Sub Categories' }).click();
    await page.getByRole('button', { name: 'Food' }).click();

    await page.getByRole('button', { name: 'Add Sub Category' }).click();
    await page.getByRole('combobox', { name: 'Main Category *' }).click();
    await page.getByRole('option', { name: 'Rice' }).click();
    await page.getByRole('textbox', { name: 'Enter category name' }).click();
    await page.getByRole('textbox', { name: 'Enter category name' }).fill('Fried Rice');
    await page.getByRole('combobox', { name: 'Category Type *' }).click();
    await page.getByRole('option', { name: 'Food' }).click();
    await page.getByRole('textbox', { name: 'Enter description' }).click();
    await page.getByRole('textbox', { name: 'Enter description' }).fill('Stir-fried rice with vegetables, egg, and savory seasonings, prepared fresh and served hot.');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);

    await page.getByRole('button', { name: 'Add Sub Category' }).click();
    await page.getByRole('combobox', { name: 'Main Category *' }).click();
    await page.getByRole('option', { name: 'Curries' }).click();
    await page.getByRole('textbox', { name: 'Enter category name' }).click();
    await page.getByRole('textbox', { name: 'Enter category name' }).fill('Fish Curries');
    await page.getByRole('combobox', { name: 'Category Type *' }).click();
    await page.getByRole('option', { name: 'Food' }).click();
    await page.getByRole('textbox', { name: 'Enter description' }).click();
    await page.getByRole('textbox', { name: 'Enter description' }).fill('Delicious fish curries for a flavorful meal.');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);

    await page.getByRole('button', { name: 'Add Sub Category' }).click();
    await page.getByRole('combobox', { name: 'Main Category *' }).click();
    await page.getByRole('option', { name: 'Dessert' }).click();
    await page.getByRole('textbox', { name: 'Enter category name' }).click();
    await page.getByRole('textbox', { name: 'Enter category name' }).fill('Puddings');
    await page.getByRole('combobox', { name: 'Category Type *' }).click();
    await page.getByRole('option', { name: 'Food' }).click();
    await page.getByRole('textbox', { name: 'Enter description' }).click();
    await page.getByRole('textbox', { name: 'Enter description' }).fill('Delicious puddings for a sweet treat.');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);

    // ----- Add sub category (Beverages) -----

    await page.getByRole('button', { name: 'Beverage' }).click();

    await page.getByRole('button', { name: 'Add Sub Category' }).click();
    await page.getByRole('combobox', { name: 'Main Category *' }).click();
    await page.getByRole('option', { name: 'Cold Beverages' }).click();
    await page.getByRole('textbox', { name: 'Enter category name' }).click();
    await page.getByRole('textbox', { name: 'Enter category name' }).fill('Iced Tea');
    await page.getByRole('combobox', { name: 'Category Type *' }).click();
    await page.getByRole('option', { name: 'Beverage' }).click();
    await page.getByRole('textbox', { name: 'Enter description' }).click();
    await page.getByRole('textbox', { name: 'Enter description' }).fill('Refreshing iced tea for a cool drink.');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);

    await page.getByRole('button', { name: 'Add Sub Category' }).click();
    await page.getByRole('combobox', { name: 'Main Category *' }).click();
    await page.getByRole('option', { name: 'Tea' }).click();
    await page.getByRole('textbox', { name: 'Enter category name' }).click();
    await page.getByRole('textbox', { name: 'Enter category name' }).fill('Green Tea');
    await page.getByRole('combobox', { name: 'Category Type *' }).click();
    await page.getByRole('option', { name: 'Beverage' }).click();
    await page.getByRole('textbox', { name: 'Enter description' }).click();
    await page.getByRole('textbox', { name: 'Enter description' }).fill('Delicious green tea for a refreshing drink.');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);

    await page.getByRole('button', { name: 'Add Sub Category' }).click();
    await page.getByRole('combobox', { name: 'Main Category *' }).click();
    await page.getByRole('option', { name: 'Soft Drinks' }).click();
    await page.getByRole('textbox', { name: 'Enter category name' }).click();
    await page.getByRole('textbox', { name: 'Enter category name' }).fill('Coca Cola');
    await page.getByRole('combobox', { name: 'Category Type *' }).click();
    await page.getByRole('option', { name: 'Beverage' }).click();
    await page.getByRole('textbox', { name: 'Enter description' }).click();
    await page.getByRole('textbox', { name: 'Enter description' }).fill('Refreshing Coca Cola for a cool drink.');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(4000);

});