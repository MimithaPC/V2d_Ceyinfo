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
    await page.getByRole('textbox', { name: 'Schedule Name' }).fill('Basic Guest Services');
    await page.locator('input[name="guestservicespricescheduleheader.from_date"]').fill('2026-06-01');
    await page.locator('input[name="guestservicespricescheduleheader.to_date"]').fill('2027-01-27');

    await page.getByRole('button', { name: 'Add Service' }).click();
    await page.getByRole('combobox', { name: 'Guest Service' }).click();
    await page.getByLabel('Laundry Service').getByText('Laundry Service').click();
    await page.getByRole('spinbutton', { name: 'Price' }).dblclick();
    await page.getByRole('spinbutton', { name: 'Price' }).fill('1200');

    await page.getByRole('button', { name: 'Add Service' }).click();
    await page.locator('button').filter({ hasText: 'Select a service...' }).click();
    await page.getByLabel('Room Service').getByText('Room Service').click();
    await page.getByRole('spinbutton', { name: 'Price' }).nth(1).dblclick();
    await page.getByRole('spinbutton', { name: 'Price' }).nth(1).fill('1500');

    await page.getByRole('button', { name: 'Add Service' }).click();
    await page.locator('button').filter({ hasText: 'Select a service...' }).click();
    await page.getByLabel('Taxi Service').getByText('Taxi Service').click();
    await page.getByRole('spinbutton', { name: 'Price' }).nth(2).dblclick();
    await page.getByRole('spinbutton', { name: 'Price' }).nth(2).fill('5000');

    await page.getByRole('button', { name: 'Save Schedule' }).click();
    await page.waitForTimeout(1000);

    // Add second Price Schedule

    await page.getByRole('button', { name: 'Add Price Schedule' }).click();
    await page.getByRole('textbox', { name: 'Schedule Name' }).click();
    await page.getByRole('textbox', { name: 'Schedule Name' }).fill('Comfort Package');
    await page.locator('input[name="guestservicespricescheduleheader.from_date"]').fill('2026-06-01');
    await page.locator('input[name="guestservicespricescheduleheader.to_date"]').fill('2027-01-27');
 
    await page.getByRole('button', { name: 'Add Service' }).click();
    await page.getByRole('combobox', { name: 'Guest Service' }).click();
    await page.getByLabel('Laundry Service').getByText('Laundry Service').click();
    await page.getByRole('spinbutton', { name: 'Price' }).dblclick();
    await page.getByRole('spinbutton', { name: 'Price' }).fill('1200');

    await page.getByRole('button', { name: 'Add Service' }).click();
    await page.locator('button').filter({ hasText: 'Select a service...' }).click();
    await page.getByLabel('Extra Bed Service').getByText('Extra Bed Service').click();
    await page.getByRole('spinbutton', { name: 'Price' }).nth(1).dblclick();
    await page.getByRole('spinbutton', { name: 'Price' }).nth(1).fill('6000');

    await page.getByRole('button', { name: 'Add Service' }).click();
    await page.locator('button').filter({ hasText: 'Select a service...' }).click();
    await page.getByLabel('Mini Bar Service').getByText('Mini Bar Service').click();
    await page.getByRole('spinbutton', { name: 'Price' }).nth(2).dblclick();
    await page.getByRole('spinbutton', { name: 'Price' }).nth(2).fill('3500');
    
    await page.getByRole('button', { name: 'Save Schedule' }).click();
    await page.waitForTimeout(1000);

    // Add third Price Schedule

    await page.getByRole('button', { name: 'Add Price Schedule' }).click();
    await page.getByRole('textbox', { name: 'Schedule Name' }).click();
    await page.getByRole('textbox', { name: 'Schedule Name' }).fill('Business Traveler Package');
    await page.locator('input[name="guestservicespricescheduleheader.from_date"]').fill('2026-06-01');
    await page.locator('input[name="guestservicespricescheduleheader.to_date"]').fill('2027-01-27');
    
    await page.getByRole('button', { name: 'Add Service' }).click();
    await page.getByRole('combobox', { name: 'Guest Service' }).click();
    await page.getByLabel('Airport Transfer').getByText('Airport Transfer').click();
    await page.getByRole('spinbutton', { name: 'Price' }).dblclick();
    await page.getByRole('spinbutton', { name: 'Price' }).fill('12000');

    await page.getByRole('button', { name: 'Add Service' }).click();
    await page.locator('button').filter({ hasText: 'Select a service...' }).click();
    await page.getByLabel('Room Service').getByText('Room Service').click();
    await page.getByRole('spinbutton', { name: 'Price' }).nth(1).dblclick();
    await page.getByRole('spinbutton', { name: 'Price' }).nth(1).fill('1500');

    await page.getByRole('button', { name: 'Add Service' }).click();
    await page.locator('button').filter({ hasText: 'Select a service...' }).click();
    await page.getByLabel('Ironing Service').getByText('Ironing Service').click();
    await page.getByRole('spinbutton', { name: 'Price' }).nth(2).dblclick();
    await page.getByRole('spinbutton', { name: 'Price' }).nth(2).fill('600');
    
    await page.getByRole('button', { name: 'Save Schedule' }).click();
    await page.waitForTimeout(1000);

    // Add fourth guest services Price Schedule

    await page.getByRole('button', { name: 'Add Price Schedule' }).click();
    await page.getByRole('textbox', { name: 'Schedule Name' }).click();
    await page.getByRole('textbox', { name: 'Schedule Name' }).fill('Family Stay Package');
    await page.locator('input[name="guestservicespricescheduleheader.from_date"]').fill('2026-06-01');
    await page.locator('input[name="guestservicespricescheduleheader.to_date"]').fill('2027-01-27');
 
    await page.getByRole('button', { name: 'Add Service' }).click();
    await page.getByRole('combobox', { name: 'Guest Service' }).click();
    await page.getByLabel('Packed Meal Service').getByText('Packed Meal Service').click();
    await page.getByRole('spinbutton', { name: 'Price' }).dblclick();
    await page.getByRole('spinbutton', { name: 'Price' }).fill('2500');

    await page.getByRole('button', { name: 'Add Service' }).click();
    await page.locator('button').filter({ hasText: 'Select a service...' }).click();
    await page.getByLabel('Taxi Service').getByText('Taxi Service').click();
    await page.getByRole('spinbutton', { name: 'Price' }).nth(1).dblclick();
    await page.getByRole('spinbutton', { name: 'Price' }).nth(1).fill('5000');

    await page.getByRole('button', { name: 'Add Service' }).click();
    await page.locator('button').filter({ hasText: 'Select a service...' }).click();
    await page.getByLabel('Pet Care Service').getByText('Pet Care Service').click();
    await page.getByRole('spinbutton', { name: 'Price' }).nth(2).dblclick();
    await page.getByRole('spinbutton', { name: 'Price' }).nth(2).fill('4000');
    
    await page.getByRole('button', { name: 'Save Schedule' }).click();
    await page.waitForTimeout(1000);

    // Add fifth guest services Price Schedule

    await page.getByRole('button', { name: 'Add Price Schedule' }).click();
    await page.getByRole('textbox', { name: 'Schedule Name' }).click();
    await page.getByRole('textbox', { name: 'Schedule Name' }).fill('Premium Guest Services');
    await page.locator('input[name="guestservicespricescheduleheader.from_date"]').fill('2026-06-01');
    await page.locator('input[name="guestservicespricescheduleheader.to_date"]').fill('2027-01-27');
 
    await page.getByRole('button', { name: 'Add Service' }).click();
    await page.getByRole('combobox', { name: 'Guest Service' }).click();
    await page.getByLabel('Spa Service').getByText('Spa Service').click();
    await page.getByRole('spinbutton', { name: 'Price' }).dblclick();
    await page.getByRole('spinbutton', { name: 'Price' }).fill('10000');

    await page.getByRole('button', { name: 'Add Service' }).click();
    await page.locator('button').filter({ hasText: 'Select a service...' }).click();
    await page.getByLabel('Airport Transfer').getByText('Airport Transfer').click();
    await page.getByRole('spinbutton', { name: 'Price' }).nth(1).dblclick();
    await page.getByRole('spinbutton', { name: 'Price' }).nth(1).fill('12000');

    await page.getByRole('button', { name: 'Add Service' }).click();
    await page.locator('button').filter({ hasText: 'Select a service...' }).click();
    await page.getByLabel('Mini Bar Service').getByText('Mini Bar Service').click();
    await page.getByRole('spinbutton', { name: 'Price' }).nth(2).dblclick();
    await page.getByRole('spinbutton', { name: 'Price' }).nth(2).fill('3500');
    
    await page.getByRole('button', { name: 'Save Schedule' }).click();
    await page.waitForTimeout(3000);

});