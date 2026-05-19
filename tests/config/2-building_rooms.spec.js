import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    
    test.setTimeout(120000);

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
    // await page.getByRole('button', { name: 'Manage Property' }).first().click();
    // await page.getByRole('button', { name: 'Configuration System settings' }).click();
    // await page.getByRole('link', { name: 'Rooms' }).click();
    // await page.getByRole('button', { name: 'Close Sidebar' }).click();

    // // ----- First building -----

    // await page.getByRole('button', { name: '+ Add New' }).click();
    // await page.getByRole('button', { name: 'New Building' }).click();
    // await page.getByRole('textbox', { name: 'Enter building name' }).fill('Main building');
    // await page.getByRole('button', { name: 'Create' }).click();

    // // First floor -----

    // await page.getByText('Main building0 floors').click();
    // await page.getByRole('button', { name: 'New Floor' }).click();
    // await page.getByRole('textbox', { name: 'e.g. Ground Floor' }).fill('Ground floor');
    // await page.getByPlaceholder('e.g. 0 for Ground, 1, 2,').click();
    // await page.getByPlaceholder('e.g. 0 for Ground, 1, 2,').fill('0');
    // await page.getByRole('button', { name: 'Create' }).click();

    // // Second floor -----

    // await page.getByRole('button', { name: 'New Floor' }).click();
    // await page.getByRole('textbox', { name: 'e.g. Ground Floor' }).fill('First floor');
    // await page.getByPlaceholder('e.g. 0 for Ground, 1, 2,').click();
    // await page.getByPlaceholder('e.g. 0 for Ground, 1, 2,').fill('1');
    // await page.getByRole('button', { name: 'Create' }).click();

    // // ----- Add rooms -----

    // await page.getByText('Ground floorOrientation: NORTHLevel: 0Rooms:').click();
    // await page.getByRole('button', { name: 'Add Block' }).click();
    // await page.locator('select').selectOption('CUSTOM');
    // await page.getByText('Segment (Vertical)1 lines').click();
    // await page.locator('select').selectOption('Horizontal');
    // await page.getByRole('button', { name: 'Add Unit', exact: true }).click();
    // await page.getByRole('textbox', { name: 'e.g., 301,' }).click();
    // await page.getByRole('textbox', { name: 'e.g., 301,' }).fill('100');
    // await page.getByRole('combobox').filter({ hasText: 'Select room class' }).click();
    // await page.getByText('Single Standard').click();
    // await page.getByRole('combobox').filter({ hasText: 'Select room view' }).click();
    // await page.getByText('Sea View').click();
    // await page.getByRole('combobox').filter({ hasText: 'Secondary Classes' }).click();
    // await page.getByText('Double Deluxe').click();
    // await page.getByPlaceholder('e.g., 35.5').click();
    // await page.getByPlaceholder('e.g., 35.5').fill('100');
    // await page.getByRole('button', { name: 'Add Unit', exact: true }).click();
    // await page.getByRole('textbox', { name: 'e.g., 301,' }).click();
    // await page.getByRole('textbox', { name: 'e.g., 301,' }).fill('200');
    // await page.getByRole('combobox').filter({ hasText: 'Select room class' }).click();
    // await page.getByText('Double Deluxe').click();
    // await page.getByRole('combobox').filter({ hasText: 'Select room view' }).click();
    // await page.getByText('Mountain View').click();
    // await page.getByRole('combobox').filter({ hasText: 'Secondary Classes' }).click();
    // await page.getByText('Twin Executive').click();
    // await page.getByPlaceholder('e.g., 35.5').click();
    // await page.getByPlaceholder('e.g., 35.5').fill('200');
    // await page.getByRole('button', { name: 'Save' }).click();
    // await page.getByRole('button').filter({ hasText: /^$/ }).nth(3).click();
    // await page.getByText('First floorOrientation: NORTHLevel: 1Rooms:').click();
    // await page.getByRole('button', { name: 'Add Block' }).click();
    // await page.locator('select').selectOption('CUSTOM');
    // await page.getByRole('button', { name: 'Add Unit', exact: true }).click();
    // await page.getByRole('textbox', { name: 'e.g., 301,' }).click();
    // await page.getByRole('textbox', { name: 'e.g., 301,' }).fill('300');
    // await page.getByRole('combobox').filter({ hasText: 'Select room class' }).click();
    // await page.getByText('Twin Executive').click();
    // await page.getByRole('combobox').filter({ hasText: 'Select room view' }).click();
    // await page.getByRole('option', { name: 'N/A' }).click();
    // await page.getByRole('combobox').filter({ hasText: 'Secondary Classes' }).click();
    // await page.getByText('Single Standard').click();
    // await page.getByPlaceholder('e.g., 35.5').click();
    // await page.getByPlaceholder('e.g., 35.5').fill('200.5');
    // await page.getByRole('button', { name: 'Save' }).click();
    // await page.getByRole('button').filter({ hasText: /^$/ }).nth(3).click();
    // await page.waitForTimeout(4000);

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
    await page1.getByRole('button', { name: 'Manage Property' }).first().click();
    await page1.getByRole('button', { name: 'Configuration System settings' }).click();
    await page1.getByRole('link', { name: 'Rooms' }).click();
    await page1.getByRole('button', { name: 'Close Sidebar' }).click();

    // ----- First building -----

    await page1.getByRole('button', { name: '+ Add New' }).click();
    await page1.getByRole('button', { name: 'New Building' }).click();
    await page1.getByRole('textbox', { name: 'Enter building name' }).fill('Main building');
    await page1.getByRole('button', { name: 'Create' }).click();

    // First floor -----

    await page1.getByText('Main building0 floors').click();
    await page1.getByRole('button', { name: 'New Floor' }).click();
    await page1.getByRole('textbox', { name: 'e.g. Ground Floor' }).fill('Ground floor');
    await page1.getByPlaceholder('e.g. 0 for Ground, 1, 2,').click();
    await page1.getByPlaceholder('e.g. 0 for Ground, 1, 2,').fill('0');
    await page1.getByRole('button', { name: 'Create' }).click();

    // Second floor -----

    await page1.getByRole('button', { name: 'New Floor' }).click();
    await page1.getByRole('textbox', { name: 'e.g. Ground Floor' }).fill('First floor');
    await page1.getByPlaceholder('e.g. 0 for Ground, 1, 2,').click();
    await page1.getByPlaceholder('e.g. 0 for Ground, 1, 2,').fill('1');
    await page1.getByRole('button', { name: 'Create' }).click();

    // ----- Add rooms -----

    await page1.getByText('Ground floorOrientation: NORTHLevel: 0Rooms:').click();
    await page1.getByRole('button', { name: 'Add Block' }).click();
    await page1.locator('select').selectOption('CUSTOM');
    await page1.getByText('Segment (Vertical)1 lines').click();
    await page1.locator('select').selectOption('Horizontal');
    await page1.getByRole('button', { name: 'Add Unit', exact: true }).click();
    await page1.getByRole('textbox', { name: 'e.g., 301,' }).click();
    await page1.getByRole('textbox', { name: 'e.g., 301,' }).fill('100');
    await page1.getByRole('combobox').filter({ hasText: 'Select room class' }).click();
    await page1.getByText('Single Standard').click();
    await page1.getByRole('combobox').filter({ hasText: 'Select room view' }).click();
    await page1.getByText('Sea View').click();
    await page1.getByRole('combobox').filter({ hasText: 'Secondary Classes' }).click();
    await page1.getByText('Double Deluxe').click();
    await page1.getByPlaceholder('e.g., 35.5').click();
    await page1.getByPlaceholder('e.g., 35.5').fill('100');
    await page1.getByRole('button', { name: 'Add Unit', exact: true }).click();
    await page1.getByRole('textbox', { name: 'e.g., 301,' }).click();
    await page1.getByRole('textbox', { name: 'e.g., 301,' }).fill('200');
    await page1.getByRole('combobox').filter({ hasText: 'Select room class' }).click();
    await page1.getByText('Double Deluxe').click();
    await page1.getByRole('combobox').filter({ hasText: 'Select room view' }).click();
    await page1.getByText('Mountain View').click();
    await page1.getByRole('combobox').filter({ hasText: 'Secondary Classes' }).click();
    await page1.getByText('Twin Executive').click();
    await page1.getByPlaceholder('e.g., 35.5').click();
    await page1.getByPlaceholder('e.g., 35.5').fill('200');
    await page1.getByRole('button', { name: 'Save' }).click();
    await page1.getByRole('button').filter({ hasText: /^$/ }).nth(3).click();
    await page1.getByText('First floorOrientation: NORTHLevel: 1Rooms:').click();
    await page1.getByRole('button', { name: 'Add Block' }).click();
    await page1.locator('select').selectOption('CUSTOM');
    await page1.getByRole('button', { name: 'Add Unit', exact: true }).click();
    await page1.getByRole('textbox', { name: 'e.g., 301,' }).click();
    await page1.getByRole('textbox', { name: 'e.g., 301,' }).fill('300');
    await page1.getByRole('combobox').filter({ hasText: 'Select room class' }).click();
    await page1.getByText('Twin Executive').click();
    await page1.getByRole('combobox').filter({ hasText: 'Select room view' }).click();
    await page1.getByRole('option', { name: 'N/A' }).click();
    await page1.getByRole('combobox').filter({ hasText: 'Secondary Classes' }).click();
    await page1.getByText('Single Standard').click();
    await page1.getByPlaceholder('e.g., 35.5').click();
    await page1.getByPlaceholder('e.g., 35.5').fill('200.5');
    await page1.getByRole('button', { name: 'Save' }).click();
    await page1.getByRole('button').filter({ hasText: /^$/ }).nth(3).click();
    await page1.waitForTimeout(4000);

});