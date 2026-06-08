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
    await page.getByRole('button', { name: 'Travel Agencies' }).click();
    await page.getByRole('button', { name: 'Close Sidebar' }).click();

    // ----- Add first travel agency -----

    await page.getByRole('button', { name: 'Add Agency' }).click();
    await page.getByRole('textbox', { name: 'Enter agency name' }).click();
    await page.getByRole('textbox', { name: 'Enter agency name' }).fill('Dream Journey Travel');
    await page.getByRole('textbox', { name: 'e.g.' }).click();
    await page.getByRole('textbox', { name: 'e.g.' }).fill('0758963254');
    await page.getByRole('textbox', { name: 'Type email and press Enter...' }).click();
    await page.getByRole('textbox', { name: 'Type email and press Enter...' }).fill('dreamjourneytravel@gmail.com');
    await page.getByRole('textbox', { name: 'John Doe' }).click();
    await page.getByRole('textbox', { name: 'John Doe' }).fill('Saman Kumara');
    await page.getByRole('textbox', { name: 'john@example.com' }).click();
    await page.getByRole('textbox', { name: 'john@example.com' }).fill('saman@gmail.com');
    await page.getByRole('textbox', { name: '0771234567', exact: true }).click();
    await page.getByRole('textbox', { name: '0771234567', exact: true }).fill('0785236955');
    await page.getByPlaceholder('0-').click();
    await page.getByPlaceholder('0-').fill('2');
    await page.getByRole('button', { name: 'Active', exact: true }).click();
    await page.getByRole('button', { name: 'Add Agency' }).click();
    await page.waitForTimeout(2000);

    // ----- Add second travel agency -----

    await page.getByRole('button', { name: 'Add Agency' }).click();
    await page.getByRole('textbox', { name: 'Enter agency name' }).click();
    await page.getByRole('textbox', { name: 'Enter agency name' }).fill('Sky Route Travel');
    await page.getByRole('textbox', { name: 'e.g.' }).click();
    await page.getByRole('textbox', { name: 'e.g.' }).fill('0758969254');
    await page.getByRole('textbox', { name: 'Type email and press Enter...' }).click();
    await page.getByRole('textbox', { name: 'Type email and press Enter...' }).fill('skyroutetravel@gmail.com');
    await page.getByRole('textbox', { name: 'John Doe' }).click();
    await page.getByRole('textbox', { name: 'John Doe' }).fill('Kamal Pathirana');
    await page.getByRole('textbox', { name: 'john@example.com' }).click();
    await page.getByRole('textbox', { name: 'john@example.com' }).fill('kamal@gmail.com');
    await page.getByRole('textbox', { name: '0771234567', exact: true }).click();
    await page.getByRole('textbox', { name: '0771234567', exact: true }).fill('0787236955');
    await page.getByPlaceholder('0-').click();
    await page.getByPlaceholder('0-').fill('2');
    await page.getByRole('button', { name: 'Active', exact: true }).click();
    await page.getByRole('button', { name: 'Add Agency' }).click();
    await page.waitForTimeout(4000);


});