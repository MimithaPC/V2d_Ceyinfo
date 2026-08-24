import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

    test.setTimeout(120000);

    // Development

    await page.goto('https://v3.ceyinfo.com/', { waitUntil: 'networkidle' });
    await page.getByRole('navigation').getByRole('link', { name: 'Sign in' }).click();
    await page.getByRole('textbox', { name: 'Work email' }).click();
    await page.getByRole('textbox', { name: 'Work email' }).fill('mimithaprabodani@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('123456789');
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
    await page.waitForTimeout(2000);   
    await page.getByRole('button', { name: 'Switch module' }).click();
    await page.getByRole('link', { name: 'Front Desk', exact: true }).click();
    await page.goto('https://test1-frontdesk.v3.ceyinfo.com/test2');
    await page.getByRole('button', { name: 'Extras ▼' }).click();
    await page.getByRole('link', { name: 'Travel Agencies' }).click();
    await page.getByRole('button', { name: 'Collapse sidebar' }).click();

    // ----- Add first travel agency -----

    await page.getByRole('button', { name: 'New agency' }).click();
    await page.getByRole('textbox', { name: 'Enter agency name' }).click();
    await page.getByRole('textbox', { name: 'Enter agency name' }).fill('Dream Journey Travel');
    await page.getByRole('textbox').nth(1).click();
    await page.getByRole('textbox').nth(1).fill('TA01');
    await page.getByRole('textbox', { name: 'e.g.' }).click();
    await page.getByRole('textbox', { name: 'e.g.' }).fill('0758963254');
    await page.getByRole('textbox', { name: 'Type email and press Enter…' }).click();
    await page.getByRole('textbox', { name: 'Type email and press Enter…' }).fill('dreamjourneytravel@gmail.com');
    await page.getByRole('textbox', { name: 'John Doe' }).click();
    await page.getByRole('textbox', { name: 'John Doe' }).fill('Saman Kumara');
    await page.getByRole('textbox', { name: 'john@example.com' }).click();
    await page.getByRole('textbox', { name: 'john@example.com' }).fill('saman@gmail.com');
    await page.getByRole('textbox', { name: '0771234567', exact: true }).click();
    await page.getByRole('textbox', { name: '0771234567', exact: true }).fill('0785236955');
    await page.getByRole('button', { name: 'Add Agency' }).click();
    await page.waitForTimeout(1000);

    // ----- Add second travel agency -----

    await page.getByRole('button', { name: 'New agency' }).click();
    await page.getByRole('textbox', { name: 'Enter agency name' }).click();
    await page.getByRole('textbox', { name: 'Enter agency name' }).fill('Sky Route Travel');
    await page.getByRole('textbox').nth(1).click();
    await page.getByRole('textbox').nth(1).fill('TA02');
    await page.getByRole('textbox', { name: 'e.g.' }).click();
    await page.getByRole('textbox', { name: 'e.g.' }).fill('0758969254');
    await page.getByRole('textbox', { name: 'Type email and press Enter…' }).click();
    await page.getByRole('textbox', { name: 'Type email and press Enter…' }).fill('skyroutetravel@gmail.com');
    await page.getByRole('textbox', { name: 'John Doe' }).click();
    await page.getByRole('textbox', { name: 'John Doe' }).fill('Kamal Pathirana');
    await page.getByRole('textbox', { name: 'john@example.com' }).click();
    await page.getByRole('textbox', { name: 'john@example.com' }).fill('kamal@gmail.com');
    await page.getByRole('textbox', { name: '0771234567', exact: true }).click();
    await page.getByRole('textbox', { name: '0771234567', exact: true }).fill('0787236955');
    await page.getByRole('button', { name: 'Add Agency' }).click();
    await page.waitForTimeout(2000);

});