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
    await page.getByRole('button', { name: 'Front Desk Reservations,' }).click();
    await page.getByRole('button', { name: 'Extras' }).click();
    await page.getByRole('button', { name: 'Guest Services' }).click();
    await page.getByRole('button', { name: 'Close Sidebar' }).click();

    // ----- Add first guest service -----

    await page.getByRole('button', { name: 'Add Service' }).click();
    await page.getByRole('textbox', { name: 'Service Name *' }).click();
    await page.getByRole('textbox', { name: 'Service Name *' }).fill('Laundry Service');
    await page.getByRole('textbox', { name: 'Description' }).click();
    await page.getByRole('textbox', { name: 'Description' }).fill('Washing and ironing of guest clothes.');
    await page.getByRole('button', { name: 'Save Service' }).click();
    await page.waitForTimeout(2000);

    // ----- Add second guest service -----

    await page.getByRole('button', { name: 'Add Service' }).click();
    await page.getByRole('textbox', { name: 'Service Name *' }).click();
    await page.getByRole('textbox', { name: 'Service Name *' }).fill('Room Service');
    await page.getByRole('textbox', { name: 'Description' }).click();
    await page.getByRole('textbox', { name: 'Description' }).fill('Food and beverages delivered to rooms.');
    await page.getByRole('button', { name: 'Save Service' }).click();
    await page.waitForTimeout(2000);

    // ----- Add third guest service -----

    await page.getByRole('button', { name: 'Add Service' }).click();
    await page.getByRole('textbox', { name: 'Service Name *' }).click();
    await page.getByRole('textbox', { name: 'Service Name *' }).fill('Airport Transfer');
    await page.getByRole('textbox', { name: 'Description' }).click();
    await page.getByRole('textbox', { name: 'Description' }).fill('Transportation between hotel and airport.');
    await page.getByRole('button', { name: 'Save Service' }).click();
    await page.waitForTimeout(2000);

    // ----- Add fourth guest service -----

    await page.getByRole('button', { name: 'Add Service' }).click();
    await page.getByRole('textbox', { name: 'Service Name *' }).click();
    await page.getByRole('textbox', { name: 'Service Name *' }).fill('Extra Bed Service');
    await page.getByRole('textbox', { name: 'Description' }).click();
    await page.getByRole('textbox', { name: 'Description' }).fill('Additional bed provided on request.');
    await page.getByRole('button', { name: 'Save Service' }).click();
    await page.waitForTimeout(2000);

    // ----- Add fifth guest service -----

    await page.getByRole('button', { name: 'Add Service' }).click();
    await page.getByRole('textbox', { name: 'Service Name *' }).click();
    await page.getByRole('textbox', { name: 'Service Name *' }).fill('Spa Service');
    await page.getByRole('textbox', { name: 'Description' }).click();
    await page.getByRole('textbox', { name: 'Description' }).fill('Relaxing wellness and massage treatments.');
    await page.getByRole('button', { name: 'Save Service' }).click();
    await page.waitForTimeout(2000);

    // ----- Add sixth guest service -----

    await page.getByRole('button', { name: 'Add Service' }).click();
    await page.getByRole('textbox', { name: 'Service Name *' }).click();
    await page.getByRole('textbox', { name: 'Service Name *' }).fill('Taxi Service');
    await page.getByRole('textbox', { name: 'Description' }).click();
    await page.getByRole('textbox', { name: 'Description' }).fill('Taxi booking for guest transportation.');
    await page.getByRole('button', { name: 'Save Service' }).click();
    await page.waitForTimeout(2000);

    // ----- Add seventh guest service -----

    await page.getByRole('button', { name: 'Add Service' }).click();
    await page.getByRole('textbox', { name: 'Service Name *' }).click();
    await page.getByRole('textbox', { name: 'Service Name *' }).fill('Pet Care Service');
    await page.getByRole('textbox', { name: 'Description' }).click();
    await page.getByRole('textbox', { name: 'Description' }).fill('Care and assistance for guest pets.');
    await page.getByRole('button', { name: 'Save Service' }).click();
    await page.waitForTimeout(2000);

    // ----- Add eighth guest service -----

    await page.getByRole('button', { name: 'Add Service' }).click();
    await page.getByRole('textbox', { name: 'Service Name *' }).click();
    await page.getByRole('textbox', { name: 'Service Name *' }).fill('Packed Meal Service');
    await page.getByRole('textbox', { name: 'Description' }).click();
    await page.getByRole('textbox', { name: 'Description' }).fill('Meals packed for travel or tours.');
    await page.getByRole('button', { name: 'Save Service' }).click();
    await page.waitForTimeout(2000);

    // ----- Add ninth guest service -----

    await page.getByRole('button', { name: 'Add Service' }).click();
    await page.getByRole('textbox', { name: 'Service Name *' }).click();
    await page.getByRole('textbox', { name: 'Service Name *' }).fill('Mini Bar Service');
    await page.getByRole('textbox', { name: 'Description' }).click();
    await page.getByRole('textbox', { name: 'Description' }).fill('Snacks and drinks available in room.');
    await page.getByRole('button', { name: 'Save Service' }).click();
    await page.waitForTimeout(2000);

    // ----- Add tenth guest service -----

    await page.getByRole('button', { name: 'Add Service' }).click();
    await page.getByRole('textbox', { name: 'Service Name *' }).click();
    await page.getByRole('textbox', { name: 'Service Name *' }).fill('Ironing Service');
    await page.getByRole('textbox', { name: 'Description' }).click();
    await page.getByRole('textbox', { name: 'Description' }).fill('Professional ironing of clothes.');
    await page.getByRole('button', { name: 'Save Service' }).click();
    await page.waitForTimeout(4000);

});