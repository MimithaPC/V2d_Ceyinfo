import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    
    test.setTimeout(280000);

    // // Development

    // await page.goto('https://v2d.ceyinfo.com/', { waitUntil: 'networkidle' });
    // await page.getByRole('link', { name: 'Login' }).click();
    // await page.getByRole('textbox', { name: 'Email' }).click();
    // await page.getByRole('textbox', { name: 'Email' }).fill('mimithaprabodani@gmail.com');
    // await page.getByRole('textbox', { name: '********' }).click();
    // await page.getByRole('textbox', { name: '********' }).fill('Mi@123');
    // await page.getByRole('button', { name: 'Login' }).click();
    // await page.waitForTimeout(2000);
    // // await page.locator('div:nth-child(12) > .inline-flex').click(); //Change
    // // await page.getByRole('button', { name: 'Manage Property' }).nth(2).click();
    // await page.waitForTimeout(2000);
    // // await page.getByRole('button', { name: 'Manage Property' }).first().click();
    // await page.getByRole('button', { name: 'Configuration System settings' }).click();
    // await page.getByRole('button', { name: 'F&B Operations' }).click();
    // await page.getByRole('button', { name: 'Setup' }).click();
    // await page.getByRole('link', { name: 'Menu Category' }).click();
    // await page.getByRole('button', { name: 'Close Sidebar' }).click();

    // // ----- Add main category (Foods) -----

    // await page.getByRole('button', { name: 'Add Main Category' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).fill('Main Course');
    // await page.getByRole('combobox', { name: 'Category Type *' }).click();
    // await page.getByLabel('Food').getByText('Food').click();
    // await page.getByRole('textbox', { name: 'Enter description' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).fill('Primary dish served to satisfy main meal appetite completely.');
    // await page.getByRole('button', { name: 'Save' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('button', { name: 'Add Main Category' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).fill('Starters');
    // await page.getByRole('combobox', { name: 'Category Type *' }).click();
    // await page.getByLabel('Food').getByText('Food').click();
    // await page.getByRole('textbox', { name: 'Enter description' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).fill('Light dishes served before main course to stimulate appetite.');
    // await page.getByRole('button', { name: 'Save' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('button', { name: 'Add Main Category' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).fill('Soups');
    // await page.getByRole('combobox', { name: 'Category Type *' }).click();
    // await page.getByLabel('Food').getByText('Food').click();
    // await page.getByRole('textbox', { name: 'Enter description' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).fill('Warm liquid dishes prepared with vegetables, meat, or spices.');
    // await page.getByRole('button', { name: 'Save' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('button', { name: 'Add Main Category' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).fill('Desserts');
    // await page.getByRole('combobox', { name: 'Category Type *' }).click();
    // await page.getByLabel('Food').getByText('Food').click();
    // await page.getByRole('textbox', { name: 'Enter description' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).fill('Sweet dishes served after meals to satisfy sugar cravings.');
    // await page.getByRole('button', { name: 'Save' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('button', { name: 'Add Main Category' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).fill('Pizza');
    // await page.getByRole('combobox', { name: 'Category Type *' }).click();
    // await page.getByLabel('Food').getByText('Food').click();
    // await page.getByRole('textbox', { name: 'Enter description' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).fill('Baked flatbread topped with sauce, cheese, and various toppings.');
    // await page.getByRole('button', { name: 'Save' }).click();
    // await page.waitForTimeout(1000);

    // // ----- Add main category (Beverages) -----

    // await page.getByRole('button', { name: 'Beverage' }).click();

    // await page.getByRole('button', { name: 'Add Main Category' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).fill('Cold Beverages');
    // await page.getByRole('combobox', { name: 'Category Type *' }).click();
    // await page.getByRole('option', { name: 'Beverage' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).fill('Chilled drinks served cold to refresh and quench thirst.');
    // await page.getByRole('button', { name: 'Save' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('button', { name: 'Add Main Category' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).fill('Hot Beverages');
    // await page.getByRole('combobox', { name: 'Category Type *' }).click();
    // await page.getByRole('option', { name: 'Beverage' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).fill('Warm drinks served hot like tea, coffee, and milk.');
    // await page.getByRole('button', { name: 'Save' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('button', { name: 'Add Main Category' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).fill('Fresh Juices');
    // await page.getByRole('combobox', { name: 'Category Type *' }).click();
    // await page.getByRole('option', { name: 'Beverage' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).fill('Natural fruit-based drinks prepared fresh for healthy refreshment.');
    // await page.getByRole('button', { name: 'Save' }).click();
    // await page.waitForTimeout(1000);

    // // ----- Add sub category (Foods) -----

    // await page.getByRole('tab', { name: 'Sub Categories' }).click();
    // await page.getByRole('button', { name: 'Food' }).click();

    // await page.getByRole('button', { name: 'Add Sub Category' }).click();
    // await page.getByRole('combobox', { name: 'Main Category *' }).click();
    // await page.getByRole('option', { name: 'Main Course' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).fill('Rice Dishes');
    // await page.getByRole('combobox', { name: 'Category Type *' }).click();
    // await page.getByRole('option', { name: 'Food' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).fill('Flavorful rice meals cooked with spices, vegetables, and meats.');
    // await page.getByRole('button', { name: 'Save' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('button', { name: 'Add Sub Category' }).click();
    // await page.getByRole('combobox', { name: 'Main Category *' }).click();
    // await page.getByRole('option', { name: 'Main Course' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).fill('Pasta & Dishes');
    // await page.getByRole('combobox', { name: 'Category Type *' }).click();
    // await page.getByRole('option', { name: 'Food' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).fill('Italian-style pasta served with sauces, herbs, and fresh ingredients.');
    // await page.getByRole('button', { name: 'Save' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('button', { name: 'Add Sub Category' }).click();
    // await page.getByRole('combobox', { name: 'Main Category *' }).click();
    // await page.getByRole('option', { name: 'Main Course' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).fill('Chicken Dishes');
    // await page.getByRole('combobox', { name: 'Category Type *' }).click();
    // await page.getByRole('option', { name: 'Food' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).fill('Delicious chicken meals cooked with spices, herbs, and sauces.');
    // await page.getByRole('button', { name: 'Save' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('button', { name: 'Add Sub Category' }).click();
    // await page.getByRole('combobox', { name: 'Main Category *' }).click();
    // await page.getByRole('option', { name: 'Main Course' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).fill('Fish Dishes');
    // await page.getByRole('combobox', { name: 'Category Type *' }).click();
    // await page.getByRole('option', { name: 'Food' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).fill('Fresh fish prepared grilled, fried, or cooked in spices.');
    // await page.getByRole('button', { name: 'Save' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('button', { name: 'Add Sub Category' }).click();
    // await page.getByRole('combobox', { name: 'Main Category *' }).click();
    // await page.getByRole('option', { name: 'Main Course' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).fill('Prawn Dishes');
    // await page.getByRole('combobox', { name: 'Category Type *' }).click();
    // await page.getByRole('option', { name: 'Food' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).fill('Seafood prawn meals cooked with rich spices and sauces.');
    // await page.getByRole('button', { name: 'Save' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('button', { name: 'Add Sub Category' }).click();
    // await page.getByRole('combobox', { name: 'Main Category *' }).click();
    // await page.getByRole('option', { name: 'Main Course' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).fill('Kottu');
    // await page.getByRole('combobox', { name: 'Category Type *' }).click();
    // await page.getByRole('option', { name: 'Food' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).fill('Sri Lankan chopped roti mixed with vegetables, meat, and spices.');
    // await page.getByRole('button', { name: 'Save' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('button', { name: 'Add Sub Category' }).click();
    // await page.getByRole('combobox', { name: 'Main Category *' }).click();
    // await page.getByRole('option', { name: 'Starters' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).fill('Vegetarian Starters');
    // await page.getByRole('combobox', { name: 'Category Type *' }).click();
    // await page.getByRole('option', { name: 'Food' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).fill('Fresh vegetable-based starters prepared without any meat ingredients used.');
    // await page.getByRole('button', { name: 'Save' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('button', { name: 'Add Sub Category' }).click();
    // await page.getByRole('combobox', { name: 'Main Category *' }).click();
    // await page.getByRole('option', { name: 'Starters' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).fill('Non-Vegetarian Starters');
    // await page.getByRole('combobox', { name: 'Category Type *' }).click();
    // await page.getByRole('option', { name: 'Food' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).fill('Starters containing meat, seafood, or poultry prepared with spices.');
    // await page.getByRole('button', { name: 'Save' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('button', { name: 'Add Sub Category' }).click();
    // await page.getByRole('combobox', { name: 'Main Category *' }).click();
    // await page.getByRole('option', { name: 'Starters' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).fill('Seafood Starters');
    // await page.getByRole('combobox', { name: 'Category Type *' }).click();
    // await page.getByRole('option', { name: 'Food' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).fill('Fresh seafood starters prepared with fish, prawns, squid, spices.');
    // await page.getByRole('button', { name: 'Save' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('button', { name: 'Add Sub Category' }).click();
    // await page.getByRole('combobox', { name: 'Main Category *' }).click();
    // await page.getByRole('option', { name: 'Soups' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).fill('Cream Soups');
    // await page.getByRole('combobox', { name: 'Category Type *' }).click();
    // await page.getByRole('option', { name: 'Food' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).fill('Rich creamy soups made with milk, cream, and vegetables.');
    // await page.getByRole('button', { name: 'Save' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('button', { name: 'Add Sub Category' }).click();
    // await page.getByRole('combobox', { name: 'Main Category *' }).click();
    // await page.getByRole('option', { name: 'Soups' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).fill('Clear Soups');
    // await page.getByRole('combobox', { name: 'Category Type *' }).click();
    // await page.getByRole('option', { name: 'Food' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).fill('Light clear broth soups served hot for healthy digestion.');
    // await page.getByRole('button', { name: 'Save' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('button', { name: 'Add Sub Category' }).click();
    // await page.getByRole('combobox', { name: 'Main Category *' }).click();
    // await page.getByRole('option', { name: 'Desserts' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).fill('Cakes');
    // await page.getByRole('combobox', { name: 'Category Type *' }).click();
    // await page.getByRole('option', { name: 'Food' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).fill('Soft baked desserts layered with cream, sugar, and decorations.');
    // await page.getByRole('button', { name: 'Save' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('button', { name: 'Add Sub Category' }).click();
    // await page.getByRole('combobox', { name: 'Main Category *' }).click();
    // await page.getByRole('option', { name: 'Desserts' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).fill('Ice Cream');
    // await page.getByRole('combobox', { name: 'Category Type *' }).click();
    // await page.getByRole('option', { name: 'Food' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).fill('Cold sweet dessert made from milk, cream, and flavoring.');
    // await page.getByRole('button', { name: 'Save' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('button', { name: 'Add Sub Category' }).click();
    // await page.getByRole('combobox', { name: 'Main Category *' }).click();
    // await page.getByRole('option', { name: 'Desserts' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).fill('Traditional Desserts');
    // await page.getByRole('combobox', { name: 'Category Type *' }).click();
    // await page.getByRole('option', { name: 'Food' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).fill('Classic traditional sweets prepared using local ingredients and recipes.');
    // await page.getByRole('button', { name: 'Save' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('button', { name: 'Add Sub Category' }).click();
    // await page.getByRole('combobox', { name: 'Main Category *' }).click();
    // await page.getByRole('option', { name: 'Pizza' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).fill('Vegetarian Pizza');
    // await page.getByRole('combobox', { name: 'Category Type *' }).click();
    // await page.getByRole('option', { name: 'Food' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).fill('Pizza topped with fresh vegetables, cheese, and tomato sauce.');
    // await page.getByRole('button', { name: 'Save' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('button', { name: 'Add Sub Category' }).click();
    // await page.getByRole('combobox', { name: 'Main Category *' }).click();
    // await page.getByRole('option', { name: 'Pizza' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).fill('Chicken Pizza');
    // await page.getByRole('combobox', { name: 'Category Type *' }).click();
    // await page.getByRole('option', { name: 'Food' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).fill('Pizza topped with seasoned chicken, cheese, and tomato sauce.');
    // await page.getByRole('button', { name: 'Save' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('button', { name: 'Add Sub Category' }).click();
    // await page.getByRole('combobox', { name: 'Main Category *' }).click();
    // await page.getByRole('option', { name: 'Pizza' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).fill('Premium Pizza');
    // await page.getByRole('combobox', { name: 'Category Type *' }).click();
    // await page.getByRole('option', { name: 'Food' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).fill('High-quality pizza with rich toppings, sauces, and fresh ingredients.');
    // await page.getByRole('button', { name: 'Save' }).click();
    // await page.waitForTimeout(1000);

    // // ----- Add sub category (Beverages) -----

    // await page.getByRole('button', { name: 'Beverage' }).click();

    // await page.getByRole('button', { name: 'Add Sub Category' }).click();
    // await page.getByRole('combobox', { name: 'Main Category *' }).click();
    // await page.getByRole('option', { name: 'Cold Beverages' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).fill('Soft Drinks');
    // await page.getByRole('combobox', { name: 'Category Type *' }).click();
    // await page.getByRole('option', { name: 'Beverage' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).fill('Carbonated drinks served chilled including cola, soda, and flavored.');
    // await page.getByRole('button', { name: 'Save' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('button', { name: 'Add Sub Category' }).click();
    // await page.getByRole('combobox', { name: 'Main Category *' }).click();
    // await page.getByRole('option', { name: 'Cold Beverages' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).fill('Iced Drinks');
    // await page.getByRole('combobox', { name: 'Category Type *' }).click();
    // await page.getByRole('option', { name: 'Beverage' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).fill('Cold beverages served with ice including tea, coffee, juices.');
    // await page.getByRole('button', { name: 'Save' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('button', { name: 'Add Sub Category' }).click();
    // await page.getByRole('combobox', { name: 'Main Category *' }).click();
    // await page.getByRole('option', { name: 'Cold Beverages' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).fill('Bottle Drinks');
    // await page.getByRole('combobox', { name: 'Category Type *' }).click();
    // await page.getByRole('option', { name: 'Beverage' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).fill('Ready-to-drink chilled beverages packed in sealed bottles for convenience.');
    // await page.getByRole('button', { name: 'Save' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('button', { name: 'Add Sub Category' }).click();
    // await page.getByRole('combobox', { name: 'Main Category *' }).click();
    // await page.getByRole('option', { name: 'Hot Beverages' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).fill('Tea');
    // await page.getByRole('combobox', { name: 'Category Type *' }).click();
    // await page.getByRole('option', { name: 'Beverage' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).fill('THot beverage brewed from tea leaves with refreshing mild taste.');
    // await page.getByRole('button', { name: 'Save' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('button', { name: 'Add Sub Category' }).click();
    // await page.getByRole('combobox', { name: 'Main Category *' }).click();
    // await page.getByRole('option', { name: 'Hot Beverages' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).fill('Coffee');
    // await page.getByRole('combobox', { name: 'Category Type *' }).click();
    // await page.getByRole('option', { name: 'Beverage' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).fill('Hot drink made from roasted coffee beans with strong flavor.');
    // await page.getByRole('button', { name: 'Save' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('button', { name: 'Add Sub Category' }).click();
    // await page.getByRole('combobox', { name: 'Main Category *' }).click();
    // await page.getByRole('option', { name: 'Fresh Juices' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).fill('Fruit Juices');
    // await page.getByRole('combobox', { name: 'Category Type *' }).click();
    // await page.getByRole('option', { name: 'Beverage' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).fill('Fresh natural juices made from fruits with sweet healthy taste.');
    // await page.getByRole('button', { name: 'Save' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('button', { name: 'Add Sub Category' }).click();
    // await page.getByRole('combobox', { name: 'Main Category *' }).click();
    // await page.getByRole('option', { name: 'Fresh Juices' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).click();
    // await page.getByRole('textbox', { name: 'Enter category name' }).fill('Detox & Healthy Juices');
    // await page.getByRole('combobox', { name: 'Category Type *' }).click();
    // await page.getByRole('option', { name: 'Beverage' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).click();
    // await page.getByRole('textbox', { name: 'Enter description' }).fill('Healthy fruit juices supporting detoxification and boosting natural immunity.');
    // await page.getByRole('button', { name: 'Save' }).click();
    // await page.waitForTimeout(3000);

    
    
    
    
    
    
    
    
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
    // await page1.locator('div:nth-child(12) > .inline-flex').click(); //Change
    // await page1.getByRole('button', { name: 'Manage Property' }).nth(2).click();
    await page1.waitForTimeout(2000);
    // await page1.getByRole('button', { name: 'Manage Property' }).first().click();
    await page1.getByRole('button', { name: 'Configuration System settings' }).click();
    await page1.getByRole('button', { name: 'F&B Operations' }).click();
    await page1.getByRole('button', { name: 'Setup' }).click();
    await page1.getByRole('link', { name: 'Menu Category' }).click();
    await page1.getByRole('button', { name: 'Close Sidebar' }).click();

    // ----- Add main category (Foods) -----

    await page1.getByRole('button', { name: 'Add Main Category' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).fill('Main Course');
    await page1.getByRole('combobox', { name: 'Category Type *' }).click();
    await page1.getByLabel('Food').getByText('Food').click();
    await page1.getByRole('textbox', { name: 'Enter description' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).fill('Primary dish served to satisfy main meal appetite completely.');
    await page1.getByRole('button', { name: 'Save' }).click();
    await page1.waitForTimeout(1000);

    await page1.getByRole('button', { name: 'Add Main Category' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).fill('Starters');
    await page1.getByRole('combobox', { name: 'Category Type *' }).click();
    await page1.getByLabel('Food').getByText('Food').click();
    await page1.getByRole('textbox', { name: 'Enter description' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).fill('Light dishes served before main course to stimulate appetite.');
    await page1.getByRole('button', { name: 'Save' }).click();
    await page1.waitForTimeout(1000);

    await page1.getByRole('button', { name: 'Add Main Category' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).fill('Soups');
    await page1.getByRole('combobox', { name: 'Category Type *' }).click();
    await page1.getByLabel('Food').getByText('Food').click();
    await page1.getByRole('textbox', { name: 'Enter description' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).fill('Warm liquid dishes prepared with vegetables, meat, or spices.');
    await page1.getByRole('button', { name: 'Save' }).click();
    await page1.waitForTimeout(1000);

    await page1.getByRole('button', { name: 'Add Main Category' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).fill('Desserts');
    await page1.getByRole('combobox', { name: 'Category Type *' }).click();
    await page1.getByLabel('Food').getByText('Food').click();
    await page1.getByRole('textbox', { name: 'Enter description' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).fill('Sweet dishes served after meals to satisfy sugar cravings.');
    await page1.getByRole('button', { name: 'Save' }).click();
    await page1.waitForTimeout(1000);

    await page1.getByRole('button', { name: 'Add Main Category' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).fill('Pizza');
    await page1.getByRole('combobox', { name: 'Category Type *' }).click();
    await page1.getByLabel('Food').getByText('Food').click();
    await page1.getByRole('textbox', { name: 'Enter description' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).fill('Baked flatbread topped with sauce, cheese, and various toppings.');
    await page1.getByRole('button', { name: 'Save' }).click();
    await page1.waitForTimeout(1000);

    // ----- Add main category (Beverages) -----

    await page1.getByRole('button', { name: 'Beverage' }).click();

    await page1.getByRole('button', { name: 'Add Main Category' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).fill('Cold Beverages');
    await page1.getByRole('combobox', { name: 'Category Type *' }).click();
    await page1.getByRole('option', { name: 'Beverage' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).fill('Chilled drinks served cold to refresh and quench thirst.');
    await page1.getByRole('button', { name: 'Save' }).click();
    await page1.waitForTimeout(1000);

    await page1.getByRole('button', { name: 'Add Main Category' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).fill('Hot Beverages');
    await page1.getByRole('combobox', { name: 'Category Type *' }).click();
    await page1.getByRole('option', { name: 'Beverage' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).fill('Warm drinks served hot like tea, coffee, and milk.');
    await page1.getByRole('button', { name: 'Save' }).click();
    await page1.waitForTimeout(1000);

    await page1.getByRole('button', { name: 'Add Main Category' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).fill('Fresh Juices');
    await page1.getByRole('combobox', { name: 'Category Type *' }).click();
    await page1.getByRole('option', { name: 'Beverage' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).fill('Natural fruit-based drinks prepared fresh for healthy refreshment.');
    await page1.getByRole('button', { name: 'Save' }).click();
    await page1.waitForTimeout(1000);

    // ----- Add sub category (Foods) -----

    await page1.getByRole('tab', { name: 'Sub Categories' }).click();
    await page1.getByRole('button', { name: 'Food' }).click();

    await page1.getByRole('button', { name: 'Add Sub Category' }).click();
    await page1.getByRole('combobox', { name: 'Main Category *' }).click();
    await page1.getByRole('option', { name: 'Main Course' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).fill('Rice Dishes');
    await page1.getByRole('combobox', { name: 'Category Type *' }).click();
    await page1.getByRole('option', { name: 'Food' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).fill('Flavorful rice meals cooked with spices, vegetables, and meats.');
    await page1.getByRole('button', { name: 'Save' }).click();
    await page1.waitForTimeout(1000);

    await page1.getByRole('button', { name: 'Add Sub Category' }).click();
    await page1.getByRole('combobox', { name: 'Main Category *' }).click();
    await page1.getByRole('option', { name: 'Main Course' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).fill('Pasta & Dishes');
    await page1.getByRole('combobox', { name: 'Category Type *' }).click();
    await page1.getByRole('option', { name: 'Food' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).fill('Italian-style pasta served with sauces, herbs, and fresh ingredients.');
    await page1.getByRole('button', { name: 'Save' }).click();
    await page1.waitForTimeout(1000);

    await page1.getByRole('button', { name: 'Add Sub Category' }).click();
    await page1.getByRole('combobox', { name: 'Main Category *' }).click();
    await page1.getByRole('option', { name: 'Main Course' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).fill('Chicken Dishes');
    await page1.getByRole('combobox', { name: 'Category Type *' }).click();
    await page1.getByRole('option', { name: 'Food' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).fill('Delicious chicken meals cooked with spices, herbs, and sauces.');
    await page1.getByRole('button', { name: 'Save' }).click();
    await page1.waitForTimeout(1000);

    await page1.getByRole('button', { name: 'Add Sub Category' }).click();
    await page1.getByRole('combobox', { name: 'Main Category *' }).click();
    await page1.getByRole('option', { name: 'Main Course' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).fill('Fish Dishes');
    await page1.getByRole('combobox', { name: 'Category Type *' }).click();
    await page1.getByRole('option', { name: 'Food' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).fill('Fresh fish prepared grilled, fried, or cooked in spices.');
    await page1.getByRole('button', { name: 'Save' }).click();
    await page1.waitForTimeout(1000);

    await page1.getByRole('button', { name: 'Add Sub Category' }).click();
    await page1.getByRole('combobox', { name: 'Main Category *' }).click();
    await page1.getByRole('option', { name: 'Main Course' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).fill('Prawn Dishes');
    await page1.getByRole('combobox', { name: 'Category Type *' }).click();
    await page1.getByRole('option', { name: 'Food' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).fill('Seafood prawn meals cooked with rich spices and sauces.');
    await page1.getByRole('button', { name: 'Save' }).click();
    await page1.waitForTimeout(1000);

    await page1.getByRole('button', { name: 'Add Sub Category' }).click();
    await page1.getByRole('combobox', { name: 'Main Category *' }).click();
    await page1.getByRole('option', { name: 'Main Course' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).fill('Kottu');
    await page1.getByRole('combobox', { name: 'Category Type *' }).click();
    await page1.getByRole('option', { name: 'Food' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).fill('Sri Lankan chopped roti mixed with vegetables, meat, and spices.');
    await page1.getByRole('button', { name: 'Save' }).click();
    await page1.waitForTimeout(1000);

    await page1.getByRole('button', { name: 'Add Sub Category' }).click();
    await page1.getByRole('combobox', { name: 'Main Category *' }).click();
    await page1.getByRole('option', { name: 'Starters' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).fill('Vegetarian Starters');
    await page1.getByRole('combobox', { name: 'Category Type *' }).click();
    await page1.getByRole('option', { name: 'Food' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).fill('Fresh vegetable-based starters prepared without any meat ingredients used.');
    await page1.getByRole('button', { name: 'Save' }).click();
    await page1.waitForTimeout(1000);

    await page1.getByRole('button', { name: 'Add Sub Category' }).click();
    await page1.getByRole('combobox', { name: 'Main Category *' }).click();
    await page1.getByRole('option', { name: 'Starters' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).fill('Non-Vegetarian Starters');
    await page1.getByRole('combobox', { name: 'Category Type *' }).click();
    await page1.getByRole('option', { name: 'Food' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).fill('Starters containing meat, seafood, or poultry prepared with spices.');
    await page1.getByRole('button', { name: 'Save' }).click();
    await page1.waitForTimeout(1000);

    await page1.getByRole('button', { name: 'Add Sub Category' }).click();
    await page1.getByRole('combobox', { name: 'Main Category *' }).click();
    await page1.getByRole('option', { name: 'Starters' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).fill('Seafood Starters');
    await page1.getByRole('combobox', { name: 'Category Type *' }).click();
    await page1.getByRole('option', { name: 'Food' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).fill('Fresh seafood starters prepared with fish, prawns, squid, spices.');
    await page1.getByRole('button', { name: 'Save' }).click();
    await page1.waitForTimeout(1000);

    await page1.getByRole('button', { name: 'Add Sub Category' }).click();
    await page1.getByRole('combobox', { name: 'Main Category *' }).click();
    await page1.getByRole('option', { name: 'Soups' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).fill('Cream Soups');
    await page1.getByRole('combobox', { name: 'Category Type *' }).click();
    await page1.getByRole('option', { name: 'Food' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).fill('Rich creamy soups made with milk, cream, and vegetables.');
    await page1.getByRole('button', { name: 'Save' }).click();
    await page1.waitForTimeout(1000);

    await page1.getByRole('button', { name: 'Add Sub Category' }).click();
    await page1.getByRole('combobox', { name: 'Main Category *' }).click();
    await page1.getByRole('option', { name: 'Soups' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).fill('Clear Soups');
    await page1.getByRole('combobox', { name: 'Category Type *' }).click();
    await page1.getByRole('option', { name: 'Food' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).fill('Light clear broth soups served hot for healthy digestion.');
    await page1.getByRole('button', { name: 'Save' }).click();
    await page1.waitForTimeout(1000);

    await page1.getByRole('button', { name: 'Add Sub Category' }).click();
    await page1.getByRole('combobox', { name: 'Main Category *' }).click();
    await page1.getByRole('option', { name: 'Desserts' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).fill('Cakes');
    await page1.getByRole('combobox', { name: 'Category Type *' }).click();
    await page1.getByRole('option', { name: 'Food' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).fill('Soft baked desserts layered with cream, sugar, and decorations.');
    await page1.getByRole('button', { name: 'Save' }).click();
    await page1.waitForTimeout(1000);

    await page1.getByRole('button', { name: 'Add Sub Category' }).click();
    await page1.getByRole('combobox', { name: 'Main Category *' }).click();
    await page1.getByRole('option', { name: 'Desserts' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).fill('Ice Cream');
    await page1.getByRole('combobox', { name: 'Category Type *' }).click();
    await page1.getByRole('option', { name: 'Food' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).fill('Cold sweet dessert made from milk, cream, and flavoring.');
    await page1.getByRole('button', { name: 'Save' }).click();
    await page1.waitForTimeout(1000);

    await page1.getByRole('button', { name: 'Add Sub Category' }).click();
    await page1.getByRole('combobox', { name: 'Main Category *' }).click();
    await page1.getByRole('option', { name: 'Desserts' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).fill('Traditional Desserts');
    await page1.getByRole('combobox', { name: 'Category Type *' }).click();
    await page1.getByRole('option', { name: 'Food' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).fill('Classic traditional sweets prepared using local ingredients and recipes.');
    await page1.getByRole('button', { name: 'Save' }).click();
    await page1.waitForTimeout(1000);

    await page1.getByRole('button', { name: 'Add Sub Category' }).click();
    await page1.getByRole('combobox', { name: 'Main Category *' }).click();
    await page1.getByRole('option', { name: 'Pizza' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).fill('Vegetarian Pizza');
    await page1.getByRole('combobox', { name: 'Category Type *' }).click();
    await page1.getByRole('option', { name: 'Food' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).fill('Pizza topped with fresh vegetables, cheese, and tomato sauce.');
    await page1.getByRole('button', { name: 'Save' }).click();
    await page1.waitForTimeout(1000);

    await page1.getByRole('button', { name: 'Add Sub Category' }).click();
    await page1.getByRole('combobox', { name: 'Main Category *' }).click();
    await page1.getByRole('option', { name: 'Pizza' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).fill('Chicken Pizza');
    await page1.getByRole('combobox', { name: 'Category Type *' }).click();
    await page1.getByRole('option', { name: 'Food' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).fill('Pizza topped with seasoned chicken, cheese, and tomato sauce.');
    await page1.getByRole('button', { name: 'Save' }).click();
    await page1.waitForTimeout(1000);

    await page1.getByRole('button', { name: 'Add Sub Category' }).click();
    await page1.getByRole('combobox', { name: 'Main Category *' }).click();
    await page1.getByRole('option', { name: 'Pizza' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).fill('Premium Pizza');
    await page1.getByRole('combobox', { name: 'Category Type *' }).click();
    await page1.getByRole('option', { name: 'Food' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).fill('High-quality pizza with rich toppings, sauces, and fresh ingredients.');
    await page1.getByRole('button', { name: 'Save' }).click();
    await page1.waitForTimeout(1000);

    // ----- Add sub category (Beverages) -----

    await page1.getByRole('button', { name: 'Beverage' }).click();

    await page1.getByRole('button', { name: 'Add Sub Category' }).click();
    await page1.getByRole('combobox', { name: 'Main Category *' }).click();
    await page1.getByRole('option', { name: 'Cold Beverages' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).fill('Soft Drinks');
    await page1.getByRole('combobox', { name: 'Category Type *' }).click();
    await page1.getByRole('option', { name: 'Beverage' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).fill('Carbonated drinks served chilled including cola, soda, and flavored.');
    await page1.getByRole('button', { name: 'Save' }).click();
    await page1.waitForTimeout(1000);

    await page1.getByRole('button', { name: 'Add Sub Category' }).click();
    await page1.getByRole('combobox', { name: 'Main Category *' }).click();
    await page1.getByRole('option', { name: 'Cold Beverages' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).fill('Iced Drinks');
    await page1.getByRole('combobox', { name: 'Category Type *' }).click();
    await page1.getByRole('option', { name: 'Beverage' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).fill('Cold beverages served with ice including tea, coffee, juices.');
    await page1.getByRole('button', { name: 'Save' }).click();
    await page1.waitForTimeout(1000);

    await page1.getByRole('button', { name: 'Add Sub Category' }).click();
    await page1.getByRole('combobox', { name: 'Main Category *' }).click();
    await page1.getByRole('option', { name: 'Cold Beverages' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).fill('Bottle Drinks');
    await page1.getByRole('combobox', { name: 'Category Type *' }).click();
    await page1.getByRole('option', { name: 'Beverage' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).fill('Ready-to-drink chilled beverages packed in sealed bottles for convenience.');
    await page1.getByRole('button', { name: 'Save' }).click();
    await page1.waitForTimeout(1000);

    await page1.getByRole('button', { name: 'Add Sub Category' }).click();
    await page1.getByRole('combobox', { name: 'Main Category *' }).click();
    await page1.getByRole('option', { name: 'Hot Beverages' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).fill('Tea');
    await page1.getByRole('combobox', { name: 'Category Type *' }).click();
    await page1.getByRole('option', { name: 'Beverage' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).fill('THot beverage brewed from tea leaves with refreshing mild taste.');
    await page1.getByRole('button', { name: 'Save' }).click();
    await page1.waitForTimeout(1000);

    await page1.getByRole('button', { name: 'Add Sub Category' }).click();
    await page1.getByRole('combobox', { name: 'Main Category *' }).click();
    await page1.getByRole('option', { name: 'Hot Beverages' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).fill('Coffee');
    await page1.getByRole('combobox', { name: 'Category Type *' }).click();
    await page1.getByRole('option', { name: 'Beverage' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).fill('Hot drink made from roasted coffee beans with strong flavor.');
    await page1.getByRole('button', { name: 'Save' }).click();
    await page1.waitForTimeout(1000);

    await page1.getByRole('button', { name: 'Add Sub Category' }).click();
    await page1.getByRole('combobox', { name: 'Main Category *' }).click();
    await page1.getByRole('option', { name: 'Fresh Juices' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).click();
    await page1.getByRole('textbox', { name: 'Enter category name' }).fill('Fruit Juices');
    await page1.getByRole('combobox', { name: 'Category Type *' }).click();
    await page1.getByRole('option', { name: 'Beverage' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).click();
    await page1.getByRole('textbox', { name: 'Enter description' }).fill('Fresh natural juices made from fruits with sweet healthy taste.');
    await page1.getByRole('button', { name: 'Save' }).click();
    await page1.waitForTimeout(1000);

    // await page1.getByRole('button', { name: 'Add Sub Category' }).click();
    // await page1.getByRole('combobox', { name: 'Main Category *' }).click();
    // await page1.getByRole('option', { name: 'Fresh Juices' }).click();
    // await page1.getByRole('textbox', { name: 'Enter category name' }).click();
    // await page1.getByRole('textbox', { name: 'Enter category name' }).fill('Detox & Healthy Juices');
    // await page1.getByRole('combobox', { name: 'Category Type *' }).click();
    // await page1.getByRole('option', { name: 'Beverage' }).click();
    // await page1.getByRole('textbox', { name: 'Enter description' }).click();
    // await page1.getByRole('textbox', { name: 'Enter description' }).fill('Healthy fruit juices supporting detoxification and boosting natural immunity.');
    // await page1.getByRole('button', { name: 'Save' }).click();
    // await page1.waitForTimeout(3000);

});