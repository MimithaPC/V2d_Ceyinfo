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
    await page.getByRole('link', { name: 'Guest', exact: true }).click();
    await page.getByRole('button', { name: 'Collapse sidebar' }).click();

    // ----- Add first guest -----

    await page.getByRole('button', { name: 'New guest' }).click();
    await page.getByRole('textbox').nth(1).fill('Kumara Karunarathna');
    await page.locator('input[type="email"]').click();
    await page.locator('input[type="email"]').fill('kumara@gmail.com');
    await page.getByRole('textbox').nth(4).click();
    await page.getByRole('textbox').nth(4).fill('0775458963');
    await page.getByRole('textbox').nth(5).click();
    await page.getByRole('textbox').nth(5).fill('Kurunegala');
    await page.getByRole('textbox', { name: 'Search province…' }).click();
    await page.getByText('North Western').click();
    await page.locator('input[type="text"]').nth(5).click();
    await page.locator('input[type="text"]').nth(5).fill('569874528v');
    await page.getByRole('button', { name: 'Save Guest' }).click();
    await page.waitForTimeout(1000);

    // ----- Add second guest -----

    await page.getByRole('button', { name: 'New guest' }).click();
    await page.getByRole('button', { name: 'company' }).click();
    await page.getByRole('textbox').nth(1).click();
    await page.getByRole('textbox').nth(1).fill('StayTech Solutions');
    await page.getByRole('textbox').nth(2).click();
    await page.getByRole('textbox').nth(2).fill('Dinidu Herath');
    await page.locator('input[type="email"]').click();
    await page.locator('input[type="email"]').fill('dinidu@gmail.com');
    await page.getByRole('textbox').nth(5).click();
    await page.getByRole('textbox').nth(5).fill('0769541236');
    await page.locator('input[type="text"]').nth(3).click();
    await page.locator('input[type="text"]').nth(3).fill('Kurunegala');
    await page.getByRole('textbox', { name: 'Search province…' }).click();
    await page.getByText('North Central').click();
    await page.locator('.space-y-4 > div:nth-child(2) > .relative > .flex').click();
    await page.locator('.space-y-4 > div:nth-child(2) > .relative > .flex').fill('896325647v');
    await page.getByRole('button', { name: 'Save Guest' }).click();
    await page.waitForTimeout(1000);

    // ----- Add third guest -----

    await page.getByRole('button', { name: 'New guest' }).click();
    await page.getByRole('textbox').nth(1).fill('Kalidu Sampath');
    await page.locator('input[type="email"]').click();
    await page.locator('input[type="email"]').fill('kalidu@gmail.com');
    await page.getByRole('textbox').nth(4).click();
    await page.getByRole('textbox').nth(4).fill('0782369542');
    await page.getByRole('textbox').nth(5).click();
    await page.getByRole('textbox').nth(5).fill('Kurunegala');
    await page.getByRole('textbox', { name: 'Search province…' }).click();
    await page.getByText('North Western').click();
    await page.locator('input[type="text"]').nth(5).click();
    await page.locator('input[type="text"]').nth(5).fill('685326985v');
    await page.getByRole('button', { name: 'Save Guest' }).click();
    await page.waitForTimeout(1000);

    // ----- Add fourth guest -----

    await page.getByRole('button', { name: 'New guest' }).click();
    await page.getByRole('button', { name: 'company' }).click();
    await page.getByRole('textbox').nth(1).click();
    await page.getByRole('textbox').nth(1).fill('PrimeStay Solutions');
    await page.getByRole('textbox').nth(2).click();
    await page.getByRole('textbox').nth(2).fill('Gagula Hewage');
    await page.locator('input[type="email"]').click();
    await page.locator('input[type="email"]').fill('gagula@gmail.com');
    await page.getByRole('textbox').nth(5).click();
    await page.getByRole('textbox').nth(5).fill('0758963254');
    await page.locator('input[type="text"]').nth(3).click();
    await page.locator('input[type="text"]').nth(3).fill('Kurunegala');
    await page.getByRole('textbox', { name: 'Search province…' }).click();
    await page.getByText('North Central').click();
    await page.locator('.space-y-4 > div:nth-child(2) > .relative > .flex').click();
    await page.locator('.space-y-4 > div:nth-child(2) > .relative > .flex').fill('756982354v');
    await page.getByRole('button', { name: 'Save Guest' }).click();
    await page.waitForTimeout(2000);


});