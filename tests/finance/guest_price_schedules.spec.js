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
    await page.getByRole('button', { name: 'Finance Financial reports &' }).click();
    await page.getByRole('button', { name: 'Extras' }).click();
    await page.getByRole('link', { name: 'Guest Service Prices' }).click();
    await page.getByRole('button', { name: 'Close Sidebar' }).click();

    // Add first Price Schedule

    await page.getByRole('button', { name: 'Add Price Schedule' }).click();
    await page.getByRole('textbox', { name: 'Schedule Name' }).click();
    await page.getByRole('textbox', { name: 'Schedule Name' }).fill('ghgfhghg');
    await page.locator('input[name="guestservicespricescheduleheader.from_date"]').fill('2026-06-01');
    await page.locator('input[name="guestservicespricescheduleheader.to_date"]').fill('2027-01-27');
    await page.getByRole('button', { name: 'Add Service' }).click();
    await page.getByRole('combobox', { name: 'Guest Service' }).click();
    await page.getByLabel('Room cleaning').getByText('Room cleaning').click();
    await page.getByRole('spinbutton', { name: 'Price' }).dblclick();
    await page.getByRole('spinbutton', { name: 'Price' }).fill('0123');
    await page.getByRole('button', { name: 'Save Schedule' }).click();
    await page.waitForTimeout(2000);

    // Add second Price Schedule

    await page.getByRole('button', { name: 'Add Price Schedule' }).click();
    await page.getByRole('textbox', { name: 'Schedule Name' }).click();
    await page.getByRole('textbox', { name: 'Schedule Name' }).fill('ghgfhghg');
    await page.locator('input[name="guestservicespricescheduleheader.from_date"]').fill('2026-06-01');
    await page.locator('input[name="guestservicespricescheduleheader.to_date"]').fill('2027-01-27');
    await page.getByRole('button', { name: 'Add Service' }).click();
    await page.getByRole('combobox', { name: 'Guest Service' }).click();
    await page.getByLabel('Room cleaning').getByText('Room cleaning').click();
    await page.getByRole('spinbutton', { name: 'Price' }).dblclick();
    await page.getByRole('spinbutton', { name: 'Price' }).fill('0123');
    await page.getByRole('button', { name: 'Save Schedule' }).click();
    await page.waitForTimeout(2000);

    // Add third Price Schedule

    await page.getByRole('button', { name: 'Add Price Schedule' }).click();
    await page.getByRole('textbox', { name: 'Schedule Name' }).click();
    await page.getByRole('textbox', { name: 'Schedule Name' }).fill('ghgfhghg');
    await page.locator('input[name="guestservicespricescheduleheader.from_date"]').fill('2026-06-01');
    await page.locator('input[name="guestservicespricescheduleheader.to_date"]').fill('2027-01-27');
    await page.getByRole('button', { name: 'Add Service' }).click();
    await page.getByRole('combobox', { name: 'Guest Service' }).click();
    await page.getByLabel('Room cleaning').getByText('Room cleaning').click();
    await page.getByRole('spinbutton', { name: 'Price' }).dblclick();
    await page.getByRole('spinbutton', { name: 'Price' }).fill('0123');
    await page.getByRole('button', { name: 'Save Schedule' }).click();
    await page.waitForTimeout(2000);

    // Add fourth guest services Price Schedule

    await page.getByRole('button', { name: 'Add Price Schedule' }).click();
    await page.getByRole('textbox', { name: 'Schedule Name' }).click();
    await page.getByRole('textbox', { name: 'Schedule Name' }).fill('ghgfhghg');
    await page.locator('input[name="guestservicespricescheduleheader.from_date"]').fill('2026-06-01');
    await page.locator('input[name="guestservicespricescheduleheader.to_date"]').fill('2027-01-27');
    await page.getByRole('button', { name: 'Add Service' }).click();
    await page.getByRole('combobox', { name: 'Guest Service' }).click();
    await page.getByLabel('Room cleaning').getByText('Room cleaning').click();
    await page.getByRole('spinbutton', { name: 'Price' }).dblclick();
    await page.getByRole('spinbutton', { name: 'Price' }).fill('0123');
    await page.getByRole('button', { name: 'Save Schedule' }).click();
    await page.waitForTimeout(2000);

    // Add fifth guest services Price Schedule

    await page.getByRole('button', { name: 'Add Price Schedule' }).click();
    await page.getByRole('textbox', { name: 'Schedule Name' }).click();
    await page.getByRole('textbox', { name: 'Schedule Name' }).fill('ghgfhghg');
    await page.locator('input[name="guestservicespricescheduleheader.from_date"]').fill('2026-06-01');
    await page.locator('input[name="guestservicespricescheduleheader.to_date"]').fill('2027-01-27');
    await page.getByRole('button', { name: 'Add Service' }).click();
    await page.getByRole('combobox', { name: 'Guest Service' }).click();
    await page.getByLabel('Room cleaning').getByText('Room cleaning').click();
    await page.getByRole('spinbutton', { name: 'Price' }).dblclick();
    await page.getByRole('spinbutton', { name: 'Price' }).fill('0123');
    await page.getByRole('button', { name: 'Save Schedule' }).click();
    await page.waitForTimeout(2000);

    // Add First guest services Price Schedule

    await page.getByRole('button', { name: 'Add Price Schedule' }).click();
    await page.getByRole('textbox', { name: 'Schedule Name' }).click();
    await page.getByRole('textbox', { name: 'Schedule Name' }).fill('ghgfhghg');
    await page.locator('input[name="guestservicespricescheduleheader.from_date"]').fill('2026-06-01');
    await page.locator('input[name="guestservicespricescheduleheader.to_date"]').fill('2027-01-27');
    await page.getByRole('button', { name: 'Add Service' }).click();
    await page.getByRole('combobox', { name: 'Guest Service' }).click();
    await page.getByLabel('Room cleaning').getByText('Room cleaning').click();
    await page.getByRole('spinbutton', { name: 'Price' }).dblclick();
    await page.getByRole('spinbutton', { name: 'Price' }).fill('0123');
    await page.getByRole('button', { name: 'Save Schedule' }).click();
    await page.waitForTimeout(2000);

    // Add First guest services Price Schedule

    await page.getByRole('button', { name: 'Add Price Schedule' }).click();
    await page.getByRole('textbox', { name: 'Schedule Name' }).click();
    await page.getByRole('textbox', { name: 'Schedule Name' }).fill('ghgfhghg');
    await page.locator('input[name="guestservicespricescheduleheader.from_date"]').fill('2026-06-01');
    await page.locator('input[name="guestservicespricescheduleheader.to_date"]').fill('2027-01-27');
    await page.getByRole('button', { name: 'Add Service' }).click();
    await page.getByRole('combobox', { name: 'Guest Service' }).click();
    await page.getByLabel('Room cleaning').getByText('Room cleaning').click();
    await page.getByRole('spinbutton', { name: 'Price' }).dblclick();
    await page.getByRole('spinbutton', { name: 'Price' }).fill('0123');
    await page.getByRole('button', { name: 'Save Schedule' }).click();
    await page.waitForTimeout(2000);

    // Add First guest services Price Schedule

    await page.getByRole('button', { name: 'Add Price Schedule' }).click();
    await page.getByRole('textbox', { name: 'Schedule Name' }).click();
    await page.getByRole('textbox', { name: 'Schedule Name' }).fill('ghgfhghg');
    await page.locator('input[name="guestservicespricescheduleheader.from_date"]').fill('2026-06-01');
    await page.locator('input[name="guestservicespricescheduleheader.to_date"]').fill('2027-01-27');
    await page.getByRole('button', { name: 'Add Service' }).click();
    await page.getByRole('combobox', { name: 'Guest Service' }).click();
    await page.getByLabel('Room cleaning').getByText('Room cleaning').click();
    await page.getByRole('spinbutton', { name: 'Price' }).dblclick();
    await page.getByRole('spinbutton', { name: 'Price' }).fill('0123');
    await page.getByRole('button', { name: 'Save Schedule' }).click();
    await page.waitForTimeout(2000);
    // await page.waitForTimeout(4000);

});