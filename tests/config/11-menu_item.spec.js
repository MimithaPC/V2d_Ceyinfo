import { test, expect } from '@playwright/test';
import path from 'path';

test('test', async ({ page }) => {

    test.setTimeout(500000);

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

    // Image helper function

    const imagePath = (fileName) => {
        return path.join(
            process.cwd(),
            'tests',
            'images',
            fileName
        );
    };

    // ----- Cold Beverages -----

    // ---- 1 -----

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Coca Cola');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('COKE');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('CB-SD-001');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Beverage]Cold Beverages').getByText('[Beverage]Cold Beverages').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Soft Drinks').getByText('Soft Drinks').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Chilled classic cola');
    await page.setInputFiles('input[type="file"]',imagePath('Caramel Pudding.jpeg'));
    await page.getByText('Upload').click();
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000);
    
    // ---- 2 -----

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Sprite');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('SPRITE');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('CB-SD-002');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Beverage]Cold Beverages').getByText('[Beverage]Cold Beverages').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Soft Drinks').getByText('Soft Drinks').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Refreshing lemon-lime drink');
    await page.setInputFiles('input[type="file"]',imagePath('Caramel Pudding.jpeg'));
    await page.getByText('Upload').click();
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000);

    // ---- 3 -----

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Iced Lemon Tea');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('ICE LEM TEA');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('CB-ID-001');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Beverage]Cold Beverages').getByText('[Beverage]Cold Beverages').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Iced Drinks').getByText('Iced Drinks').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Chilled tea with lemon');
    await page.setInputFiles('input[type="file"]',imagePath('Caramel Pudding.jpeg'));
    await page.getByText('Upload').click();
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000);

    // ---- 4 -----

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Iced Coffee');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('ICE COF');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('CB-ID-002');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Beverage]Cold Beverages').getByText('[Beverage]Cold Beverages').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Iced Drinks').getByText('Iced Drinks').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Cold coffee with milk');
    await page.setInputFiles('input[type="file"]',imagePath('Caramel Pudding.jpeg'));
    await page.getByText('Upload').click();
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000);

    // ---- 5 -----

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Mineral Water');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('MIN WATER');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('CB-BD-001');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Beverage]Cold Beverages').getByText('[Beverage]Cold Beverages').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Bottle Drinks').getByText('Bottle Drinks').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Pure bottled water');
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000);

    // ---- 6 -----

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Soda Water');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('SODA WTR');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('CB-BD-002');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Beverage]Cold Beverages').getByText('[Beverage]Cold Beverages').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Bottle Drinks').getByText('Bottle Drinks').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Sparkling soda water');
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000);

    // ----- Hot Beverages -----

    // ---- 1 -----

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Ceylon Tea');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('CEY TEA');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('HB-TEA-001');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Beverage]Hot Beverages').getByText('[Beverage]Hot Beverages').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Tea').getByText('Tea').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Fresh brewed Ceylon tea');
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000);

    // ---- 2 -----

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Ginger Tea');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('GIN TEA');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('HB-TEA-002');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Beverage]Hot Beverages').getByText('[Beverage]Hot Beverages').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Tea').getByText('Tea').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Hot tea infused with ginger');
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000);

    // ---- 3 -----

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Cappuccino');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('CAPPU');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('HB-COF-001');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Beverage]Hot Beverages').getByText('[Beverage]Hot Beverages').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Coffee').getByText('Coffee').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Espresso with steamed milk');
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000);

    // ---- 4 -----

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Café Latte');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('LATTE');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('HB-COF-002');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Beverage]Hot Beverages').getByText('[Beverage]Hot Beverages').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Coffee').getByText('Coffee').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Smooth coffee with milk');
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000);

    // ----- Fresh Juices -----

    // ---- 1 -----

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Orange Juice');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('ORG JCE');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('FJ-FJ-001');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Beverage]Fresh Juices').getByText('[Beverage]Fresh Juices').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Fruit Juices').getByText('Fruit Juices').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Fresh squeezed orange juice');
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000); 

    // ---- 2 -----

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Watermelon Juice');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('WTM JCE');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('FJ-FJ-002');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Beverage]Fresh Juices').getByText('[Beverage]Fresh Juices').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Fruit Juices').getByText('Fruit Juices').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Fresh watermelon blend');
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000);

    // ---- 3 -----

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Green Detox Juice');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('GRN DETOX');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('FJ-DH-001');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Beverage]Fresh Juices').getByText('[Beverage]Fresh Juices').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Detox & Healthy Juices').getByText('Detox & Healthy Juices').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Cucumber and apple juice');
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000);
    
    // ---- 4 -----

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Carrot Boost Juice');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('CRT BOOST');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('FJ-DH-002');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Beverage]Fresh Juices').getByText('[Beverage]Fresh Juices').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Detox & Healthy Juices').getByText('Detox & Healthy Juices').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Fresh carrot health drink');
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000);

    // ----- Soups -----

    // ---- 1 -----

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Chicken Clear Soup');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('CHK CLR SUP');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('SP-CS-001');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Food]Soups').getByText('[Food]Soups').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Clear Soups').getByText('Clear Soups').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Light chicken broth');
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000);

    // ---- 2 -----

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Vegetable Clear Soup');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('VEG CLR SUP');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('SP-CS-002');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Food]Soups').getByText('[Food]Soups').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Clear Soups').getByText('Clear Soups').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Fresh vegetable broth');
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000);

    // ---- 3 -----

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Cream of Chicken');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('CRM CHK SUP');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('SP-CR-001');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Food]Soups').getByText('[Food]Soups').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Cream Soups').getByText('Cream Soups').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Rich creamy chicken soup');
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000);

    // ---- 4 -----

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Cream of Mushroom');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('CRM MSH SUP');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('SP-CR-002');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Food]Soups').getByText('[Food]Soups').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Cream Soups').getByText('Cream Soups').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Creamy mushroom soup');
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000);

    // ----- Starters -----

    // ---- 1 -----

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Crispy Calamari');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('CRS CALA');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('ST-SS-001');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Food]Starters').getByText('[Food]Starters').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Seafood Starters').getByText('Seafood Starters').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Fried squid rings');
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000);

    // ---- 2 -----

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Garlic Butter Prawns');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('GLC PRAWN');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('ST-SS-002');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Food]Starters').getByText('[Food]Starters').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Seafood Starters').getByText('Seafood Starters').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Prawns in garlic butter');
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000);

    // ---- 3 -----

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Chicken Wings');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('CHK WINGS');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('ST-NV-001');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Food]Starters').getByText('[Food]Starters').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Non-Vegetarian Starters').getByText('Non-Vegetarian Starters').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Spicy fried chicken wings');
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000);

    // ---- 4 -----

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Chicken Satay');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('CHK SATAY');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('ST-NV-002');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Food]Starters').getByText('[Food]Starters').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Non-Vegetarian Starters').getByText('Non-Vegetarian Starters').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Grilled chicken skewers');
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000);

    // ---- 5 -----

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Vegetable Spring Rolls');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('VEG SPR RL');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('ST-VG-001');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Food]Starters').getByText('[Food]Starters').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Vegetarian Starters', { exact: true }).getByText('Vegetarian Starters').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Crispy vegetable rolls');
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000); 

    // ---- 6 -----

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Paneer Tikka');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('PAN TIKKA');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('ST-VG-002');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Food]Starters').getByText('[Food]Starters').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Vegetarian Starters', { exact: true }).getByText('Vegetarian Starters').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Grilled cottage cheese cubes');
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000);

    // ----- Main Course -----

    // ---- 1 -----       

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Chicken Kottu');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('CHK KOTTU');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('MC-KT-001');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Food]Main Course').getByText('[Food]Main Course').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Kottu').getByText('Kottu').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Chopped roti with chicken');
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000);
    
    // ---- 2 -----         

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Cheese Kottu');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('CHS KOTTU');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('MC-KT-002');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Food]Main Course').getByText('[Food]Main Course').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Kottu').getByText('Kottu').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Kottu with melted cheese ');
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000);

    // ---- 3 -----           

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Devilled Prawns');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('DEV PRAWN');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('MC-PR-001');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Food]Main Course').getByText('[Food]Main Course').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Prawn Dishes').getByText('Prawn Dishes').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Spicy stir-fried prawns');
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000);

    // ---- 4 -----    

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Butter Garlic Prawns');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('BTR PRAWN');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('MC-PR-002');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Food]Main Course').getByText('[Food]Main Course').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Prawn Dishes').getByText('Prawn Dishes').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Prawns in garlic butter sauce');
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000);

    // ---- 5 -----              |            |     |   | 

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Grilled Fish');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('GRL FISH');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('MC-FS-001');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Food]Main Course').getByText('[Food]Main Course').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Fish Dishes').getByText('Fish Dishes').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Herb grilled fish fillet');
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000);

    // ---- 6 -----      

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Devilled Fish');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('DEV FISH');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('MC-FS-002');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Food]Main Course').getByText('[Food]Main Course').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Fish Dishes').getByText('Fish Dishes').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Spicy devilled fish');
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000);

    // ---- 7 -----            |           |    |   |  

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Chicken Curry');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('CHK CURRY');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('MC-CH-001');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Food]Main Course').getByText('[Food]Main Course').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Chicken Dishes').getByText('Chicken Dishes').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Traditional chicken curry');
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000);

    // ---- 8 -----

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Grilled Chicken');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('GRL CHK');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('MC-CH-002');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Food]Main Course').getByText('[Food]Main Course').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Chicken Dishes').getByText('Chicken Dishes').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Herb-marinated grilled chicken');
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000);

    // ---- 9 -----                  

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Chicken Alfredo Pasta');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('CHK ALF PST');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('MC-PA-001');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Food]Main Course').getByText('[Food]Main Course').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Pasta & Dishes').getByText('Pasta & Dishes').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Creamy chicken pasta ');
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000);

    // ---- 10 -----           

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Seafood Pasta');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('SEA PSTA');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('MC-PA-002');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Food]Main Course').getByText('[Food]Main Course').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Pasta & Dishes').getByText('Pasta & Dishes').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Pasta with mixed seafood');
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000);

    // ---- 11 -----      

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Chicken Fried Rice');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('CHK FR RICE');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('MC-RC-001');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Food]Main Course').getByText('[Food]Main Course').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Rice Dishes').getByText('Rice Dishes').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Fried rice with chicken');
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000); 

    // ---- 12 -----    

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Seafood Fried Rice');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('MC-RC-002');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('MI-0002');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Food]Main Course').getByText('[Food]Main Course').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Rice Dishes').getByText('Rice Dishes').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Fried rice with seafood');
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000);

    // ----- Pizza -----

    // ---- 1 -----             |           |    |   |   

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Supreme Pizza');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('SUP PIZZA');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('PZ-PR-001');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Food]Pizza').getByText('[Food]Pizza').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Premium Pizza').getByText('Premium Pizza').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Loaded premium toppings');
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000);
    
    // ---- 2 -----      

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Meat Lovers Pizza');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('MTL PIZZA');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('PZ-PR-002');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Food]Pizza').getByText('[Food]Pizza').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Premium Pizza').getByText('Premium Pizza').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Assorted meat toppings');
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000);
    
    // ---- 3 -----           

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('BBQ Chicken Pizza');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('BBQ CHK PZ');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('PZ-CH-001');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Food]Pizza').getByText('[Food]Pizza').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Chicken Pizza').getByText('Chicken Pizza').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('BBQ chicken and cheese');
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000);

    // ---- 4 -----     

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Spicy Chicken Pizza');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('SPY CHK PZ');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('PZ-CH-002');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Food]Pizza').getByText('[Food]Pizza').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Chicken Pizza').getByText('Chicken Pizza').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Spicy chicken topping');
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000);

    // ---- 5 -----          

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Veggie Delight Pizza');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('VEG DLT PZ');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('PZ-VG-001');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Food]Pizza').getByText('[Food]Pizza').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Vegetarian Pizza').getByText('Vegetarian Pizza').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Fresh vegetable toppings');
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000);

    // ---- 6 ----- 

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Mushroom Pizza');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('MSH PIZZA');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('PZ-VG-002');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Food]Pizza').getByText('[Food]Pizza').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Vegetarian Pizza').getByText('Vegetarian Pizza').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Mushroom and cheese pizza');
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000);

    // ----- Desserts -----

    // ---- 1 -----  

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Watalappam');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('WTL APPM');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('DS-TD-001');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Food]Desserts').getByText('[Food]Desserts').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Traditional Desserts').getByText('Traditional Desserts').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Traditional Sri Lankan dessert');
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000);

    // ---- 2 -----         

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Curd & Treacle');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('CRD TRCL');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('DS-TD-002');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Food]Desserts').getByText('[Food]Desserts').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Traditional Desserts').getByText('Traditional Desserts').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Buffalo curd with treacle');
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000);

    // ---- 3 -----                

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Vanilla Ice Cream');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('VAN ICE');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('DS-IC-001');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Food]Desserts').getByText('[Food]Desserts').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Ice Cream').getByText('Ice Cream').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Classic vanilla scoop');
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000);

    // ---- 4 -----   

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Chocolate Ice Cream');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('CHO ICE');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('DS-IC-002');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Food]Desserts').getByText('[Food]Desserts').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Ice Cream').getByText('Ice Cream').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Rich chocolate ice cream');
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000);

    // ---- 5 -----                     |         |     |   |  

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Chocolate Cake');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('CHO CAKE');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('DS-CK-001');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Food]Desserts').getByText('[Food]Desserts').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Cakes').getByText('Cakes').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Moist chocolate cake slice');
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000); 

    // ---- 6 -----               |  |   |  

    await page.getByRole('button', { name: 'Add Menu Item' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    await page.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Cheese Cake');
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    await page.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('CHEESE CAKE');
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    await page.getByRole('textbox', { name: 'e.g. CFR001' }).fill('DS-CK-002');
    await page.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    await page.getByLabel('[Food]Desserts').getByText('[Food]Desserts').click();
    await page.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    await page.getByLabel('Cakes').getByText('Cakes').click();
    await page.getByPlaceholder('e.g. 15').click();
    await page.getByPlaceholder('e.g. 15').fill('15');
    await page.getByRole('textbox', { name: 'Enter item description' }).click();
    await page.getByRole('textbox', { name: 'Enter item description' }).fill('Creamy baked cheese Cake');
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Add Item' }).click();
    await page.waitForTimeout(1000);

    
    
    
    
    
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
    // await page1.getByRole('button', { name: 'F&B Operations' }).click();
    // await page1.getByRole('link', { name: 'Menu', exact: true }).click();
    // await page1.getByRole('button', { name: 'Close Sidebar' }).click();

    // // ---- First menu items -----

    // await page1.getByRole('button', { name: 'Add Menu Item' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Lemon Iced Tea');
    // await page1.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('LEM ICD TEA');
    // await page1.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. CFR001' }).fill('MI-0001');
    // await page1.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    // await page1.getByLabel('[Beverage]Cold Beverages').getByText('[Beverage]Cold Beverages').click();
    // await page1.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    // await page1.getByLabel('Iced Tea').getByText('Iced Tea').click();
    // await page1.getByPlaceholder('e.g. 15').click();
    // await page1.getByPlaceholder('e.g. 15').fill('15');
    // await page1.getByRole('textbox', { name: 'Enter item description' }).click();
    // await page1.getByRole('textbox', { name: 'Enter item description' }).fill('Refreshing lemon-flavored iced tea served chilled with ice cubes.');
    // await page1.getByRole('button', { name: 'Add Item' }).click();
    // await page1.waitForTimeout(2000);

    // // ---- Second menu items -----

    // await page1.getByRole('button', { name: 'Add Menu Item' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Spicy Fish Curry');
    // await page1.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('SPCY FSH CURRY');
    // await page1.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. CFR001' }).fill('MI-0002');
    // await page1.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    // await page1.getByLabel('[Food]Curries').getByText('[Food]Curries').click();
    // await page1.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    // await page1.getByLabel('Fish curries').getByText('Fish curries').click();
    // await page1.getByPlaceholder('e.g. 15').click();
    // await page1.getByPlaceholder('e.g. 15').fill('15');
    // await page1.getByRole('textbox', { name: 'Enter item description' }).click();
    // await page1.getByRole('textbox', { name: 'Enter item description' }).fill('Spicy and flavorful fish curry with a perfect balance of spices.');
    // await page1.getByRole('button', { name: 'Add Item' }).click();
    // await page1.waitForTimeout(2000);

    // // ---- Third menu items -----

    // await page1.getByRole('button', { name: 'Add Menu Item' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Spicy Fish Curry');
    // await page1.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('SPCY FSH CURRY');
    // await page1.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. CFR001' }).fill('MI-0002');
    // await page1.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    // await page1.getByLabel('[Food]Curries').getByText('[Food]Curries').click();
    // await page1.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    // await page1.getByLabel('Fish curries').getByText('Fish curries').click();
    // await page1.getByPlaceholder('e.g. 15').click();
    // await page1.getByPlaceholder('e.g. 15').fill('15');
    // await page1.getByRole('textbox', { name: 'Enter item description' }).click();
    // await page1.getByRole('textbox', { name: 'Enter item description' }).fill('Spicy and flavorful fish curry with a perfect balance of spices.');
    // await page1.getByRole('button', { name: 'Add Item' }).click();
    // await page1.waitForTimeout(2000);

    // // ---- Fourth menu items -----

    // await page1.getByRole('button', { name: 'Add Menu Item' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Spicy Fish Curry');
    // await page1.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('SPCY FSH CURRY');
    // await page1.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. CFR001' }).fill('MI-0002');
    // await page1.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    // await page1.getByLabel('[Food]Curries').getByText('[Food]Curries').click();
    // await page1.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    // await page1.getByLabel('Fish curries').getByText('Fish curries').click();
    // await page1.getByPlaceholder('e.g. 15').click();
    // await page1.getByPlaceholder('e.g. 15').fill('15');
    // await page1.getByRole('textbox', { name: 'Enter item description' }).click();
    // await page1.getByRole('textbox', { name: 'Enter item description' }).fill('Spicy and flavorful fish curry with a perfect balance of spices.');
    // await page1.getByRole('button', { name: 'Add Item' }).click();
    // await page1.waitForTimeout(2000);

    // // ---- Fifth menu items -----

    // await page1.getByRole('button', { name: 'Add Menu Item' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Spicy Fish Curry');
    // await page1.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('SPCY FSH CURRY');
    // await page1.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. CFR001' }).fill('MI-0002');
    // await page1.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    // await page1.getByLabel('[Food]Curries').getByText('[Food]Curries').click();
    // await page1.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    // await page1.getByLabel('Fish curries').getByText('Fish curries').click();
    // await page1.getByPlaceholder('e.g. 15').click();
    // await page1.getByPlaceholder('e.g. 15').fill('15');
    // await page1.getByRole('textbox', { name: 'Enter item description' }).click();
    // await page1.getByRole('textbox', { name: 'Enter item description' }).fill('Spicy and flavorful fish curry with a perfect balance of spices.');
    // await page1.getByRole('button', { name: 'Add Item' }).click();
    // await page1.waitForTimeout(2000);

    // // ---- Sixth menu items -----

    // await page1.getByRole('button', { name: 'Add Menu Item' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Spicy Fish Curry');
    // await page1.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('SPCY FSH CURRY');
    // await page1.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. CFR001' }).fill('MI-0002');
    // await page1.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    // await page1.getByLabel('[Food]Curries').getByText('[Food]Curries').click();
    // await page1.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    // await page1.getByLabel('Fish curries').getByText('Fish curries').click();
    // await page1.getByPlaceholder('e.g. 15').click();
    // await page1.getByPlaceholder('e.g. 15').fill('15');
    // await page1.getByRole('textbox', { name: 'Enter item description' }).click();
    // await page1.getByRole('textbox', { name: 'Enter item description' }).fill('Spicy and flavorful fish curry with a perfect balance of spices.');
    // await page1.getByRole('button', { name: 'Add Item' }).click();
    // await page1.waitForTimeout(2000);

    // // ---- Seventh menu items -----

    // await page1.getByRole('button', { name: 'Add Menu Item' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Spicy Fish Curry');
    // await page1.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('SPCY FSH CURRY');
    // await page1.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. CFR001' }).fill('MI-0002');
    // await page1.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    // await page1.getByLabel('[Food]Curries').getByText('[Food]Curries').click();
    // await page1.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    // await page1.getByLabel('Fish curries').getByText('Fish curries').click();
    // await page1.getByPlaceholder('e.g. 15').click();
    // await page1.getByPlaceholder('e.g. 15').fill('15');
    // await page1.getByRole('textbox', { name: 'Enter item description' }).click();
    // await page1.getByRole('textbox', { name: 'Enter item description' }).fill('Spicy and flavorful fish curry with a perfect balance of spices.');
    // await page1.getByRole('button', { name: 'Add Item' }).click();
    // await page1.waitForTimeout(2000);

    // // ---- Eighth menu items -----

    // await page1.getByRole('button', { name: 'Add Menu Item' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Spicy Fish Curry');
    // await page1.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('SPCY FSH CURRY');
    // await page1.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. CFR001' }).fill('MI-0002');
    // await page1.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    // await page1.getByLabel('[Food]Curries').getByText('[Food]Curries').click();
    // await page1.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    // await page1.getByLabel('Fish curries').getByText('Fish curries').click();
    // await page1.getByPlaceholder('e.g. 15').click();
    // await page1.getByPlaceholder('e.g. 15').fill('15');
    // await page1.getByRole('textbox', { name: 'Enter item description' }).click();
    // await page1.getByRole('textbox', { name: 'Enter item description' }).fill('Spicy and flavorful fish curry with a perfect balance of spices.');
    // await page1.getByRole('button', { name: 'Add Item' }).click();
    // await page1.waitForTimeout(2000);

    // // ---- Ninth menu items -----

    // await page1.getByRole('button', { name: 'Add Menu Item' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Spicy Fish Curry');
    // await page1.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('SPCY FSH CURRY');
    // await page1.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. CFR001' }).fill('MI-0002');
    // await page1.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    // await page1.getByLabel('[Food]Curries').getByText('[Food]Curries').click();
    // await page1.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    // await page1.getByLabel('Fish curries').getByText('Fish curries').click();
    // await page1.getByPlaceholder('e.g. 15').click();
    // await page1.getByPlaceholder('e.g. 15').fill('15');
    // await page1.getByRole('textbox', { name: 'Enter item description' }).click();
    // await page1.getByRole('textbox', { name: 'Enter item description' }).fill('Spicy and flavorful fish curry with a perfect balance of spices.');
    // await page1.getByRole('button', { name: 'Add Item' }).click();
    // await page1.waitForTimeout(2000);

    // // ---- Tenth menu items -----

    // await page1.getByRole('button', { name: 'Add Menu Item' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Spicy Fish Curry');
    // await page1.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('SPCY FSH CURRY');
    // await page1.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. CFR001' }).fill('MI-0002');
    // await page1.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    // await page1.getByLabel('[Food]Curries').getByText('[Food]Curries').click();
    // await page1.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    // await page1.getByLabel('Fish curries').getByText('Fish curries').click();
    // await page1.getByPlaceholder('e.g. 15').click();
    // await page1.getByPlaceholder('e.g. 15').fill('15');
    // await page1.getByRole('textbox', { name: 'Enter item description' }).click();
    // await page1.getByRole('textbox', { name: 'Enter item description' }).fill('Spicy and flavorful fish curry with a perfect balance of spices.');
    // await page1.getByRole('button', { name: 'Add Item' }).click();
    // await page1.waitForTimeout(2000);

    // // ---- Eleventh menu items -----

    // await page1.getByRole('button', { name: 'Add Menu Item' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Spicy Fish Curry');
    // await page1.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('SPCY FSH CURRY');
    // await page1.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. CFR001' }).fill('MI-0002');
    // await page1.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    // await page1.getByLabel('[Food]Curries').getByText('[Food]Curries').click();
    // await page1.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    // await page1.getByLabel('Fish curries').getByText('Fish curries').click();
    // await page1.getByPlaceholder('e.g. 15').click();
    // await page1.getByPlaceholder('e.g. 15').fill('15');
    // await page1.getByRole('textbox', { name: 'Enter item description' }).click();
    // await page1.getByRole('textbox', { name: 'Enter item description' }).fill('Spicy and flavorful fish curry with a perfect balance of spices.');
    // await page1.getByRole('button', { name: 'Add Item' }).click();
    // await page1.waitForTimeout(2000); 

    // // ---- Twelfth menu items -----

    // await page1.getByRole('button', { name: 'Add Menu Item' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. Chicken Fried Rice' }).fill('Spicy Fish Curry');
    // await page1.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. CHK FR RICE' }).fill('SPCY FSH CURRY');
    // await page1.getByRole('textbox', { name: 'e.g. CFR001' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. CFR001' }).fill('MI-0002');
    // await page1.getByRole('combobox').filter({ hasText: /^Select category$/ }).click();
    // await page1.getByLabel('[Food]Curries').getByText('[Food]Curries').click();
    // await page1.getByRole('combobox').filter({ hasText: 'Select sub category' }).click();
    // await page1.getByLabel('Fish curries').getByText('Fish curries').click();
    // await page1.getByPlaceholder('e.g. 15').click();
    // await page1.getByPlaceholder('e.g. 15').fill('15');
    // await page1.getByRole('textbox', { name: 'Enter item description' }).click();
    // await page1.getByRole('textbox', { name: 'Enter item description' }).fill('Spicy and flavorful fish curry with a perfect balance of spices.');
    // await page1.getByRole('button', { name: 'Add Item' }).click();
    // await page1.waitForTimeout(2000);
            

});