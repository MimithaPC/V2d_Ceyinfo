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
    await page.getByRole('button', { name: 'Setup' }).click();
    await page.getByRole('link', { name: 'Meal Location & Items' }).click();
    await page.getByRole('button', { name: 'Close Sidebar' }).click();

    // ----- Bar Preparation Area -----

    await page.getByRole('combobox').filter({ hasText: 'Select Kitchen Location' }).click();
    await page.getByText('Bar Preparation Area').click();
    await page.getByRole('combobox').filter({ hasText: 'Select Type' }).click();
    await page.getByText('Beverage').click();
    await page.getByRole('combobox').filter({ hasText: 'Select Main Category' }).click();
    await page.getByText('Cold Beverages').click();
    await page.getByRole('combobox').filter({ hasText: 'Select Sub Category' }).click();
    await page.getByText('Bottle Drinks').click();
    await page.getByRole('button', { name: 'Mineral Water' }).click();
    await page.getByRole('button', { name: 'Soda Water' }).click();
    await page.getByRole('combobox').filter({ hasText: 'Bottle Drinks' }).click();
    await page.getByText('Iced Drinks').click();
    await page.getByRole('button', { name: 'Iced Coffee' }).click();
    await page.getByRole('button', { name: 'Iced Lemon Tea' }).click();
    await page.getByRole('combobox').filter({ hasText: 'Iced Drinks' }).click();
    await page.getByText('Soft Drinks').click();
    await page.getByRole('button', { name: 'Coca Cola' }).click();
    await page.getByRole('button', { name: 'Sprite' }).click();
    await page.getByRole('button', { name: 'Save Menu Items' }).click();
    await page.waitForTimeout(1000);

    // ----- Café Kitchen -----

    await page.getByRole('combobox').filter({ hasText: 'Bar Preparation Area' }).click();
    await page.getByText('Café Kitchen').click();
    await page.getByRole('combobox').filter({ hasText: 'Cold Beverages' }).click();
    await page.getByText('Hot Beverages').click();
    await page.getByRole('combobox').filter({ hasText: /^$/ }).click();
    await page.getByText('Coffee').click();
    await page.getByRole('button', { name: 'Café Latte' }).click();
    await page.getByRole('button', { name: 'Cappuccino' }).click();
    await page.getByRole('combobox').filter({ hasText: 'Coffee' }).click();
    await page.getByText('Tea').click();
    await page.getByRole('button', { name: 'Ceylon Tea' }).click();
    await page.getByRole('button', { name: 'Ginger Tea' }).click();
    await page.getByRole('combobox').filter({ hasText: /^Beverage$/ }).click();
    await page.getByText('Food').click();
    await page.getByRole('combobox').nth(3).click();
    await page.getByText('Desserts').click();
    await page.getByRole('combobox').filter({ hasText: /^$/ }).click();
    await page.getByText('Cakes').click();
    await page.getByRole('button', { name: 'Cheese Cake' }).click();
    await page.getByRole('button', { name: 'Chocolate Cake' }).click();
    await page.getByRole('button', { name: 'Save Menu Items' }).click();
    await page.waitForTimeout(1000);

    // ----- Poolside Kitchen -----

    await page.getByRole('combobox').filter({ hasText: 'Café Kitchen' }).click();
    await page.getByText('Poolside Kitchen').click();
    await page.getByRole('combobox').filter({ hasText: 'Food' }).click();
    await page.getByText('Beverage').click();
    await page.getByRole('combobox').nth(3).click();
    await page.getByText('Fresh Juices').click();
    await page.getByRole('combobox').filter({ hasText: /^$/ }).click();
    await page.getByText('Detox & Healthy Juices').click();
    await page.getByRole('button', { name: 'Carrot Boost Juice' }).click();
    await page.getByRole('button', { name: 'Green Detox Juice' }).click();
    await page.getByRole('combobox').filter({ hasText: 'Detox & Healthy Juices' }).click();
    await page.getByText('Fruit Juices').click();
    await page.getByRole('button', { name: 'Orange Juice' }).click();
    await page.getByRole('button', { name: 'Watermelon Juice' }).click();
    await page.getByRole('combobox').filter({ hasText: 'Beverage' }).click();
    await page.getByText('Food').click();
    await page.getByRole('combobox').nth(3).click();
    await page.getByText('Desserts').click();
    await page.getByRole('combobox').filter({ hasText: /^$/ }).click();
    await page.getByText('Ice Cream').click();
    await page.getByRole('button', { name: 'Chocolate Ice Cream' }).click();
    await page.getByRole('button', { name: 'Vanilla Ice Cream' }).click();
    await page.getByRole('button', { name: 'Save Menu Items' }).click();
    await page.waitForTimeout(1000);

    // ----- Main Kitchen -----

    await page.getByRole('combobox').filter({ hasText: 'Poolside Kitchen' }).click();
    await page.getByText('Main Kitchen').click();
    await page.getByRole('combobox').filter({ hasText: 'Desserts' }).click();
    await page.getByText('Soups').click();
    await page.getByRole('combobox').filter({ hasText: /^$/ }).click();
    await page.getByText('Clear Soups').click();
    await page.getByRole('button', { name: 'Chicken Clear Soup' }).click();
    await page.getByRole('button', { name: 'Vegetable Clear Soup' }).click();
    await page.getByRole('combobox').filter({ hasText: 'Clear Soups' }).click();
    await page.getByText('Cream Soups').click();
    await page.getByRole('button', { name: 'Cream of Chicken' }).click();
    await page.getByRole('button', { name: 'Cream of Mushroom' }).click();
    await page.getByRole('combobox').filter({ hasText: /^Soups$/ }).click();
    await page.getByText('Starters').click();
    await page.getByRole('combobox').filter({ hasText: /^$/ }).click();
    await page.getByText('Non-Vegetarian Starters').click();
    await page.getByRole('button', { name: 'Chicken Satay' }).click();
    await page.getByRole('button', { name: 'Chicken Wings' }).click();
    await page.getByRole('combobox').filter({ hasText: 'Non-Vegetarian Starters' }).click();
    await page.getByText('Seafood Starters').click();
    await page.getByRole('button', { name: 'Crispy Calamari' }).click();
    await page.getByRole('button', { name: 'Garlic Butter Prawns' }).click();
    await page.getByRole('combobox').filter({ hasText: 'Seafood Starters' }).click();
    await page.getByText('Vegetarian Starters', { exact: true }).click();
    await page.getByRole('button', { name: 'Paneer Tikka' }).click();
    await page.getByRole('button', { name: 'Vegetable Spring Rolls' }).click();
    await page.getByRole('combobox').filter({ hasText: /^Starters$/ }).click();
    await page.getByText('Main Course').click();
    await page.getByRole('combobox').filter({ hasText: /^$/ }).click();
    await page.getByText('Kottu').click();
    await page.getByRole('button', { name: 'Cheese Kottu' }).click();
    await page.getByRole('button', { name: 'Chicken Kottu' }).click();
    await page.getByRole('combobox').filter({ hasText: 'Kottu' }).click();
    await page.getByText('Prawn Dishes').click();
    await page.getByRole('button', { name: 'Butter Garlic Prawns' }).click();
    await page.getByRole('button', { name: 'Devilled Prawns' }).click();
    await page.getByRole('combobox').filter({ hasText: 'Prawn Dishes' }).click();
    await page.getByText('Fish Dishes').click();
    await page.getByRole('button', { name: 'Devilled Fish' }).click();
    await page.getByRole('button', { name: 'Grilled Fish' }).click();
    await page.getByRole('combobox').filter({ hasText: 'Fish Dishes' }).click();
    await page.getByText('Chicken Dishes').click();
    await page.getByRole('button', { name: 'Chicken Curry' }).click();
    await page.getByRole('button', { name: 'Grilled Chicken' }).click();
    await page.getByRole('combobox').filter({ hasText: 'Chicken Dishes' }).click();
    await page.getByText('Pasta & Dishes').click();
    await page.getByRole('button', { name: 'Chicken Alfredo Pasta' }).click();
    await page.getByRole('button', { name: 'Seafood Pasta' }).click();
    await page.getByRole('combobox').filter({ hasText: 'Pasta & Dishes' }).click();
    await page.getByText('Rice Dishes').click();
    await page.getByRole('button', { name: 'Chicken Fried Rice' }).click();
    await page.getByRole('button', { name: 'Seafood Fried Rice' }).click();
    await page.getByRole('combobox').filter({ hasText: 'Main Course' }).click();
    await page.getByText('Pizza').click();
    await page.getByRole('combobox').filter({ hasText: /^$/ }).click();
    await page.getByText('Chicken Pizza').click();
    await page.getByRole('button', { name: 'BBQ Chicken Pizza' }).click();
    await page.getByRole('button', { name: 'Spicy Chicken Pizza' }).click();
    await page.getByRole('combobox').filter({ hasText: 'Chicken Pizza' }).click();
    await page.getByText('Premium Pizza').click();
    await page.getByRole('button', { name: 'Meat Lovers Pizza' }).click();
    await page.getByRole('button', { name: 'Supreme Pizza' }).click();
    await page.getByRole('combobox').filter({ hasText: 'Premium Pizza' }).click();
    await page.getByText('Vegetarian Pizza').click();
    await page.getByRole('button', { name: 'Mushroom Pizza' }).click();
    await page.getByRole('button', { name: 'Veggie Delight Pizza' }).click();
    await page.getByRole('combobox').filter({ hasText: /^Pizza$/ }).click();
    await page.getByText('Desserts').click();
    await page.getByRole('combobox').filter({ hasText: /^$/ }).click();
    await page.getByText('Traditional Desserts').click();
    await page.getByRole('button', { name: 'Curd & Treacle' }).click();
    await page.getByRole('button', { name: 'Watalappam' }).click();
    await page.getByRole('button', { name: 'Save Menu Items' }).click();
    await page.waitForTimeout(3000);
        





    // //  Production

    // await page.goto('https://ceyinfo.com/', { waitUntil: 'networkidle' });
    // const page1Promise = page.waitForEvent('popup');
    // await page.getByRole('link', { name: 'Login' }).click();
    // const page1 = await page1Promise;
    // await page1.getByRole('textbox', { name: 'Email' }).click();
    // await page1.getByRole('textbox', { name: 'Email' }).fill('mimithaprabodani@gmail.com');
    // await page1.getByRole('textbox', { name: '********' }).click();
    // await page1.getByRole('textbox', { name: '********' }).fill('Mi@123');
    // await page1.getByRole('button', { name: 'Login' }).click();
    // await page1.waitForTimeout(2000);
    // // await page1.locator('div:nth-child(14) > .inline-flex').click();
    // // await page1.getByRole('button', { name: 'Manage Property' }).nth(2).click();
    // await page1.waitForTimeout(2000);
    // // await page1.getByRole('button', { name: 'Manage Property' }).first().click();
    // await page1.getByRole('button', { name: 'Configuration System settings' }).click();
    // await page1.getByRole('button', { name: 'Property and Rooms' }).click();
    // await page1.getByRole('button', { name: 'Setup' }).click();
    // await page1.getByRole('link', { name: 'Room view / Type / Category' }).click();
    // await page1.getByRole('button', { name: 'Close Sidebar' }).click();

    // // ----- Set not applicable -----

    // await page1.getByRole('switch', { name: 'Not Applicable' }).click();
    // await page1.getByRole('button', { name: 'Confirm' }).click();
    // await page1.waitForTimeout(3000);


    // // // ----- First view -----

    // // await page1.getByRole('button', { name: 'Add' }).first().click();
    // // await page1.getByRole('textbox', { name: 'Room View *' }).fill('Sea View');
    // // await page1.getByRole('button', { name: 'Save' }).click();
    // // await page1.waitForTimeout(2000);

    // // // ----- Second view -----

    // // await page1.getByRole('button', { name: 'Add' }).first().click();
    // // await page1.getByRole('textbox', { name: 'Room View *' }).fill('N/A View');
    // // await page1.getByRole('button', { name: 'Save' }).click();
    // // await page1.waitForTimeout(2000);

    // // // ----- Third view -----

    // // await page1.getByRole('button', { name: 'Add' }).first().click();
    // // await page1.getByRole('textbox', { name: 'Room View *' }).fill('Garden View');
    // // await page1.getByRole('button', { name: 'Save' }).click();
    // // await page1.waitForTimeout(3000);

});