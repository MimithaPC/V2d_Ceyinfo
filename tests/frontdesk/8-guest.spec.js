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
    await page.getByRole('button', { name: 'Guest', exact: true }).click();
    await page.getByRole('button', { name: 'Close Sidebar' }).click();

    // ----- Add first guest agency -----

    await page.getByRole('button', { name: 'Add New Guest' }).click();
    await page.locator('input[name="name"]').click();
    await page.locator('input[name="name"]').fill('Kumara Karunarathna');
    await page.locator('input[name="email"]').click();
    await page.locator('input[name="email"]').fill('kumara@gmail.com');
    await page.locator('input[name="mobile"]').click();
    await page.locator('input[name="mobile"]').fill('0785963254');
    await page.locator('input[name="address"]').click();
    await page.locator('input[name="address"]').fill('Kurunegala');
    await page.getByRole('combobox').nth(2).click();
    await page.getByRole('option', { name: 'North Western Province' }).click();
    await page.getByRole('combobox').filter({ hasText: /^$/ }).click();
    await page.getByRole('option', { name: 'Kurunegala' }).click();
    await page.locator('input[name="nic"]').click();
    await page.locator('input[name="nic"]').fill('1456987452');
    await page.getByRole('button', { name: 'Save Guest' }).click();
    await page.waitForTimeout(1000);

    // ----- Add second guest agency -----

    await page.getByRole('button', { name: 'Add New Guest' }).click();
    await page.getByText('Company').click();
    await page.locator('input[name="company_name"]').click();
    await page.locator('input[name="company_name"]').fill('StayTech Solutions');
    await page.locator('input[name="name"]').click();
    await page.locator('input[name="name"]').fill('Dinidu Herath');
    await page.locator('input[name="email"]').click();
    await page.locator('input[name="email"]').fill('dinidu@gmail.com');
    await page.locator('input[name="mobile"]').click();
    await page.locator('input[name="mobile"]').fill('0756932545');
    await page.locator('input[name="address"]').click();
    await page.locator('input[name="address"]').fill('Kurunegala');
    await page.getByRole('combobox').nth(2).click();
    await page.getByRole('option', { name: 'North Western Province' }).click();
    await page.getByRole('combobox').filter({ hasText: /^$/ }).click();
    await page.getByRole('option', { name: 'Kurunegala' }).click();
    await page.locator('input[name="nic"]').click();
    await page.locator('input[name="nic"]').fill('5869325458');
    await page.getByRole('button', { name: 'Save Guest' }).click();
    await page.waitForTimeout(1000);

    // ----- Add third guest agency -----

    await page.getByRole('button', { name: 'Add New Guest' }).click();
    await page.locator('input[name="name"]').click();
    await page.locator('input[name="name"]').fill('Kalidu Sampath');
    await page.locator('input[name="email"]').click();
    await page.locator('input[name="email"]').fill('kalidu@gmail.com');
    await page.locator('input[name="mobile"]').click();
    await page.locator('input[name="mobile"]').fill('0782369542');
    await page.locator('input[name="address"]').click();
    await page.locator('input[name="address"]').fill('Kurunegala');
    await page.getByRole('combobox').nth(2).click();
    await page.getByRole('option', { name: 'North Western Province' }).click();
    await page.getByRole('combobox').filter({ hasText: /^$/ }).click();
    await page.getByRole('option', { name: 'Kurunegala' }).click();
    await page.locator('input[name="nic"]').click();
    await page.locator('input[name="nic"]').fill('1856932547');
    await page.getByRole('button', { name: 'Save Guest' }).click();
    await page.waitForTimeout(1000);

    // ----- Add fourth guest agency -----

    await page.getByRole('button', { name: 'Add New Guest' }).click();
    await page.getByText('Company').click();
    await page.locator('input[name="company_name"]').click();
    await page.locator('input[name="company_name"]').fill('PrimeStay Solutions');
    await page.locator('input[name="name"]').click();
    await page.locator('input[name="name"]').fill('Gagula Hewage');
    await page.locator('input[name="email"]').click();
    await page.locator('input[name="email"]').fill('gagula@gmail.com');
    await page.locator('input[name="mobile"]').click();
    await page.locator('input[name="mobile"]').fill('0769852311');
    await page.locator('input[name="address"]').click();
    await page.locator('input[name="address"]').fill('Kurunegala');
    await page.getByRole('combobox').nth(2).click();
    await page.getByRole('option', { name: 'North Western Province' }).click();
    await page.getByRole('combobox').filter({ hasText: /^$/ }).click();
    await page.getByRole('option', { name: 'Kurunegala' }).click();
    await page.locator('input[name="nic"]').click();
    await page.locator('input[name="nic"]').fill('5693222222');
    await page.getByRole('button', { name: 'Save Guest' }).click();
    await page.waitForTimeout(3000);


});