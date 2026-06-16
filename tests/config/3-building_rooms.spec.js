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
    await page.getByRole('button', { name: 'Property and Rooms' }).click();
    await page.getByRole('button', { name: 'Setup' }).click();
    await page.getByRole('link', { name: 'Rooms' }).click();
    await page.getByRole('button', { name: 'Close Sidebar' }).click();

    // Add first building

    await page.getByRole('button', { name: 'Add New Room' }).click();
    await page.getByRole('button', { name: 'New Building' }).click();
    await page.getByRole('textbox', { name: 'Enter building name' }).fill('Main buliding');
    await page.getByRole('button', { name: 'Create' }).click();
    await page.getByText('Main buliding0 floors0 rooms').click();

    // Add first floor

    await page.getByRole('button', { name: 'New Floor' }).click();
    await page.getByRole('textbox', { name: 'e.g. Ground Floor' }).fill('Ground floor');
    await page.getByPlaceholder('e.g. 0 for Ground, 1, 2,').click();
    await page.getByPlaceholder('e.g. 0 for Ground, 1, 2,').fill('0');
    await page.getByRole('button', { name: 'Create' }).click();
    await page.getByText('Ground floorOrientation: NORTHLevel: 0Rooms:').click();
    await page.getByRole('button', { name: 'Add First Block' }).click();
    await page.getByRole('button', { name: 'Add Segment' }).click();
    await page.getByRole('button', { name: 'Add Unit Line', exact: true }).click();
    await page.locator('button').filter({ hasText: 'Add Unit' }).click();
    await page.getByText('Segment (Vertical)1 lines').click();
    await page.locator('select').selectOption('Horizontal');

    // Add first room

    await page.locator('div').filter({ hasText: /^ROOM$/ }).nth(1).click();
    await page.getByRole('textbox', { name: 'e.g., 301,' }).click();
    await page.getByRole('textbox', { name: 'e.g., 301,' }).fill('100');
    await page.getByRole('combobox').filter({ hasText: 'Select room category' }).click();
    await page.getByText('Standard').click();
    await page.getByRole('combobox').filter({ hasText: 'Select room type' }).click();
    await page.getByRole('option', { name: 'Single' }).click();
    await page.getByRole('combobox').filter({ hasText: 'Select room view' }).click();
    await page.getByText('default view').click();
    // await page.getByText('Sea View').click();
    await page.getByPlaceholder('e.g., 35.5').click();
    await page.getByPlaceholder('e.g., 35.5').fill('100');

    // Add second room

    await page.getByRole('button', { name: 'Add Unit', exact: true }).click();
    await page.getByRole('textbox', { name: 'e.g., 301,' }).click();
    await page.getByRole('textbox', { name: 'e.g., 301,' }).fill('200');
    await page.getByRole('combobox').filter({ hasText: 'Select room category' }).click();
    await page.getByText('Standard').click();
    await page.getByRole('combobox').filter({ hasText: 'Select room type' }).click();
    await page.getByRole('option', { name: 'Single' }).click();
    await page.getByRole('combobox').filter({ hasText: 'Select room view' }).click();
    await page.getByText('default view').click();
    // await page.getByText('Sea View').click();
    await page.getByPlaceholder('e.g., 35.5').click();
    await page.getByPlaceholder('e.g., 35.5').fill('100.5');

    // Add third room

    await page.getByRole('button', { name: 'Add Unit', exact: true }).click();
    await page.getByRole('textbox', { name: 'e.g., 301,' }).click();
    await page.getByRole('textbox', { name: 'e.g., 301,' }).fill('300');
    await page.getByRole('combobox').filter({ hasText: 'Select room category' }).click();
    await page.getByText('Deluxe').click();
    await page.getByRole('combobox').filter({ hasText: 'Select room type' }).click();
    await page.getByRole('option', { name: 'Single' }).click();
    await page.getByRole('combobox').filter({ hasText: 'Select room view' }).click();
    await page.getByText('default view').click();
    // await page.getByText('Sea View').click();
    await page.getByPlaceholder('e.g., 35.5').click();
    await page.getByPlaceholder('e.g., 35.5').fill('101.5');
    await page.getByRole('button', { name: 'Save' }).click();

    // Add second floor

    await page.getByRole('button').filter({ hasText: /^$/ }).nth(3).click();
    await page.getByRole('button', { name: 'New Floor' }).click();
    await page.getByRole('textbox', { name: 'e.g. Ground Floor' }).fill('First floor');
    await page.getByPlaceholder('e.g. 0 for Ground, 1, 2,').click();
    await page.getByPlaceholder('e.g. 0 for Ground, 1, 2,').fill('1');
    await page.getByRole('button', { name: 'Create' }).click();
    await page.getByText('First floorOrientation: NORTHLevel: 1Rooms:').click();
    await page.getByRole('button', { name: 'Add First Block' }).click();
    await page.getByRole('button', { name: 'Add Segment' }).click();
    await page.getByRole('button', { name: 'Add Unit Line', exact: true }).click();
    await page.locator('button').filter({ hasText: 'Add Unit' }).click();
    await page.getByText('lines').click();
    await page.locator('select').selectOption('Horizontal');

    // Add first room

    await page.locator('div').filter({ hasText: /^ROOM$/ }).nth(1).click();
    await page.getByRole('textbox', { name: 'e.g., 301,' }).click();
    await page.getByRole('textbox', { name: 'e.g., 301,' }).fill('400');
    await page.getByRole('combobox').filter({ hasText: 'Select room category' }).click();
    await page.getByText('Standard').click();
    await page.getByRole('combobox').filter({ hasText: 'Select room type' }).click();
    await page.getByRole('option', { name: 'Double/Twin' }).click();
    await page.getByRole('combobox').filter({ hasText: 'Select room view' }).click();
    await page.getByText('default view').click();
    // await page.getByText('Sea View').click();
    await page.getByPlaceholder('e.g., 35.5').click();
    await page.getByPlaceholder('e.g., 35.5').fill('100');

    // Add second room

    await page.getByRole('button', { name: 'Add Unit', exact: true }).click();
    await page.getByRole('textbox', { name: 'e.g., 301,' }).click();
    await page.getByRole('textbox', { name: 'e.g., 301,' }).fill('500');
    await page.getByRole('combobox').filter({ hasText: 'Select room category' }).click();
    await page.getByText('Standard').click();
    await page.getByRole('combobox').filter({ hasText: 'Select room type' }).click();
    await page.getByRole('option', { name: 'Double/Twin' }).click();
    await page.getByRole('combobox').filter({ hasText: 'Select room view' }).click();
    await page.getByText('default view').click();
    // await page.getByText('Sea View').click();
    await page.getByPlaceholder('e.g., 35.5').click();
    await page.getByPlaceholder('e.g., 35.5').fill('100');

    // Add second room

    await page.getByRole('button', { name: 'Add Unit', exact: true }).click();
    await page.locator('div').filter({ hasText: /^ROOM$/ }).click();
    await page.getByRole('textbox', { name: 'e.g., 301,' }).click();
    await page.getByRole('textbox', { name: 'e.g., 301,' }).fill('600');
    await page.getByRole('combobox').filter({ hasText: 'Select room category' }).click();
    await page.getByText('Deluxe').click();
    await page.getByRole('combobox').filter({ hasText: 'Select room type' }).click();
    await page.getByRole('option', { name: 'Double/Twin' }).click();
    await page.getByRole('combobox').filter({ hasText: 'Select room view' }).click();
    await page.getByText('default view').click();
    // await page.getByText('Sea View').click();
    await page.getByPlaceholder('e.g., 35.5').click();
    await page.getByPlaceholder('e.g., 35.5').fill('101');
    await page.getByRole('button', { name: 'Save' }).click();
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
    // await page1.getByRole('link', { name: 'Rooms' }).click();
    // await page1.getByRole('button', { name: 'Close Sidebar' }).click();

    // // Add first building

    // await page1.getByRole('button', { name: 'Add New Room' }).click();
    // await page1.getByRole('button', { name: 'New Building' }).click();
    // await page1.getByRole('textbox', { name: 'Enter building name' }).fill('Main buliding');
    // await page1.getByRole('button', { name: 'Create' }).click();
    // await page1.getByText('Main buliding0 floors0 rooms').click();

    // // Add first floor

    // await page1.getByRole('button', { name: 'New Floor' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. Ground Floor' }).fill('Ground floor');
    // await page1.getByPlaceholder('e.g. 0 for Ground, 1, 2,').click();
    // await page1.getByPlaceholder('e.g. 0 for Ground, 1, 2,').fill('0');
    // await page1.getByRole('button', { name: 'Create' }).click();
    // await page1.getByText('Ground floorOrientation: NORTHLevel: 0Rooms:').click();
    // await page1.getByRole('button', { name: 'Add First Block' }).click();
    // await page1.getByRole('button', { name: 'Add Segment' }).click();
    // await page1.getByRole('button', { name: 'Add Unit Line', exact: true }).click();
    // await page1.locator('button').filter({ hasText: 'Add Unit' }).click();
    // await page1.getByText('Segment (Vertical)1 lines').click();
    // await page1.locator('select').selectOption('Horizontal');

    // // Add first room

    // await page1.locator('div').filter({ hasText: /^ROOM$/ }).nth(1).click();
    // await page1.getByRole('textbox', { name: 'e.g., 301,' }).click();
    // await page1.getByRole('textbox', { name: 'e.g., 301,' }).fill('100');
    // await page1.getByRole('combobox').filter({ hasText: 'Select room category' }).click();
    // await page1.getByText('Standard').click();
    // await page1.getByRole('combobox').filter({ hasText: 'Select room type' }).click();
    // await page1.getByRole('option', { name: 'Single' }).click();
    // await page1.getByRole('combobox').filter({ hasText: 'Select room view' }).click();
    // await page1.getByText('default view').click();
    // // await page1.getByText('Sea View').click();
    // await page1.getByPlaceholder('e.g., 35.5').click();
    // await page1.getByPlaceholder('e.g., 35.5').fill('100');

    // // Add second room

    // await page1.getByRole('button', { name: 'Add Unit', exact: true }).click();
    // await page1.getByRole('textbox', { name: 'e.g., 301,' }).click();
    // await page1.getByRole('textbox', { name: 'e.g., 301,' }).fill('200');
    // await page1.getByRole('combobox').filter({ hasText: 'Select room category' }).click();
    // await page1.getByText('Standard').click();
    // await page1.getByRole('combobox').filter({ hasText: 'Select room type' }).click();
    // await page1.getByRole('option', { name: 'Single' }).click();
    // await page1.getByRole('combobox').filter({ hasText: 'Select room view' }).click();
    // await page1.getByText('default view').click();
    // // await page1.getByText('Sea View').click();
    // await page1.getByPlaceholder('e.g., 35.5').click();
    // await page1.getByPlaceholder('e.g., 35.5').fill('100.5');

    // // Add third room

    // await page1.getByRole('button', { name: 'Add Unit', exact: true }).click();
    // await page1.getByRole('textbox', { name: 'e.g., 301,' }).click();
    // await page1.getByRole('textbox', { name: 'e.g., 301,' }).fill('300');
    // await page1.getByRole('combobox').filter({ hasText: 'Select room category' }).click();
    // await page1.getByText('Deluxe').click();
    // await page1.getByRole('combobox').filter({ hasText: 'Select room type' }).click();
    // await page1.getByRole('option', { name: 'Single' }).click();
    // await page1.getByRole('combobox').filter({ hasText: 'Select room view' }).click();
    // await page1.getByText('default view').click();
    // // await page1.getByText('Sea View').click();
    // await page1.getByPlaceholder('e.g., 35.5').click();
    // await page1.getByPlaceholder('e.g., 35.5').fill('101.5');
    // await page1.getByRole('button', { name: 'Save' }).click();

    // // Add second floor

    // await page1.getByRole('button').filter({ hasText: /^$/ }).nth(3).click();
    // await page1.getByRole('button', { name: 'New Floor' }).click();
    // await page1.getByRole('textbox', { name: 'e.g. Ground Floor' }).fill('First floor');
    // await page1.getByPlaceholder('e.g. 0 for Ground, 1, 2,').click();
    // await page1.getByPlaceholder('e.g. 0 for Ground, 1, 2,').fill('1');
    // await page1.getByRole('button', { name: 'Create' }).click();
    // await page1.getByText('First floorOrientation: NORTHLevel: 1Rooms:').click();
    // await page1.getByRole('button', { name: 'Add First Block' }).click();
    // await page1.getByRole('button', { name: 'Add Segment' }).click();
    // await page1.getByRole('button', { name: 'Add Unit Line', exact: true }).click();
    // await page1.locator('button').filter({ hasText: 'Add Unit' }).click();
    // await page1.getByText('lines').click();
    // await page1.locator('select').selectOption('Horizontal');

    // // Add first room

    // await page1.locator('div').filter({ hasText: /^ROOM$/ }).nth(1).click();
    // await page1.getByRole('textbox', { name: 'e.g., 301,' }).click();
    // await page1.getByRole('textbox', { name: 'e.g., 301,' }).fill('400');
    // await page1.getByRole('combobox').filter({ hasText: 'Select room category' }).click();
    // await page1.getByText('Standard').click();
    // await page1.getByRole('combobox').filter({ hasText: 'Select room type' }).click();
    // await page1.getByRole('option', { name: 'Double/Twin' }).click();
    // await page1.getByRole('combobox').filter({ hasText: 'Select room view' }).click();
    // await page1.getByText('default view').click();
    // // await page1.getByText('Sea View').click();
    // await page1.getByPlaceholder('e.g., 35.5').click();
    // await page1.getByPlaceholder('e.g., 35.5').fill('100');

    // // Add second room

    // await page1.getByRole('button', { name: 'Add Unit', exact: true }).click();
    // await page1.getByRole('textbox', { name: 'e.g., 301,' }).click();
    // await page1.getByRole('textbox', { name: 'e.g., 301,' }).fill('500');
    // await page1.getByRole('combobox').filter({ hasText: 'Select room category' }).click();
    // await page1.getByText('Standard').click();
    // await page1.getByRole('combobox').filter({ hasText: 'Select room type' }).click();
    // await page1.getByRole('option', { name: 'Double/Twin' }).click();
    // await page1.getByRole('combobox').filter({ hasText: 'Select room view' }).click();
    // await page1.getByText('default view').click();
    // // await page1.getByText('Sea View').click();
    // await page1.getByPlaceholder('e.g., 35.5').click();
    // await page1.getByPlaceholder('e.g., 35.5').fill('100');

    // // Add second room

    // await page1.getByRole('button', { name: 'Add Unit', exact: true }).click();
    // await page1.locator('div').filter({ hasText: /^ROOM$/ }).click();
    // await page1.getByRole('textbox', { name: 'e.g., 301,' }).click();
    // await page1.getByRole('textbox', { name: 'e.g., 301,' }).fill('600');
    // await page1.getByRole('combobox').filter({ hasText: 'Select room category' }).click();
    // await page1.getByText('Deluxe').click();
    // await page1.getByRole('combobox').filter({ hasText: 'Select room type' }).click();
    // await page1.getByRole('option', { name: 'Double/Twin' }).click();
    // await page1.getByRole('combobox').filter({ hasText: 'Select room view' }).click();
    // await page1.getByText('default view').click();
    // // await page1.getByText('Sea View').click();
    // await page1.getByPlaceholder('e.g., 35.5').click();
    // await page1.getByPlaceholder('e.g., 35.5').fill('101');
    // await page1.getByRole('button', { name: 'Save' }).click();
    // await page1.waitForTimeout(3000);

});