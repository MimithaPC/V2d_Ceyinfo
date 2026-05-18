import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    
    test.setTimeout(120000);
    await page.goto('https://v2d.ceyinfo.com/', { waitUntil: 'networkidle' });
    await page.getByRole('link', { name: 'Login' }).click();
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill('mimithaprabodani@gmail.com');
    await page.getByRole('textbox', { name: '********' }).click();
    await page.getByRole('textbox', { name: '********' }).fill('Mi@123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.locator('div:nth-child(14) > .inline-flex').click(); //Change
    // await page.getByRole('button', { name: 'Manage Property' }).nth(2).click(); //Change
    await page.getByRole('button', { name: 'Manage Property' }).first().click();
    await page.getByRole('button', { name: 'Human Resources Employees,' }).click();
    await page.getByRole('link', { name: 'Employees' }).click();

    // ----- First employee -----

    await page.getByRole('button', { name: 'Add New' }).click();
    await page.getByRole('textbox', { name: 'Enter first name' }).click();
    await page.getByRole('textbox', { name: 'Enter first name' }).fill('Janani');
    await page.getByRole('textbox', { name: 'Enter last name' }).click();
    await page.getByRole('textbox', { name: 'Enter last name' }).fill('Kavindya');
    await page.getByRole('textbox', { name: 'Enter NIC' }).click();
    await page.getByRole('textbox', { name: 'Enter NIC' }).fill('20025623623'); //Change
    await page.getByRole('combobox', { name: 'Designation *' }).click();
    await page.getByLabel('Receptionist').getByText('Receptionist').click();
    await page.getByRole('combobox', { name: 'Department *' }).click();
    await page.getByLabel('Front Office').getByText('Front Office').click();
    await page.getByRole('combobox', { name: 'Status *' }).click();
    await page.getByLabel('Active').getByText('Active').click();
    await page.getByPlaceholder('Enter salary').click();
    await page.getByPlaceholder('Enter salary').fill('75000');
    await page.getByRole('textbox', { name: 'Enter email' }).click();
    await page.getByRole('textbox', { name: 'Enter email' }).fill('jananikavindya45@gmail.com');
    await page.getByRole('textbox', { name: 'Enter mobile' }).click();
    await page.getByRole('textbox', { name: 'Enter mobile' }).fill('0797654378');
    await page.getByRole('textbox', { name: 'Enter address' }).click();
    await page.getByRole('textbox', { name: 'Enter address' }).fill('Alawwa');
    await page.getByRole('combobox', { name: 'Province *' }).click();
    await page.getByLabel('North Western Province', { exact: true }).getByText('North Western Province').click();
    await page.getByRole('combobox', { name: 'City *' }).click();
    await page.getByLabel('Kurunegala').getByText('Kurunegala').click();
    await page.getByRole('button', { name: 'Save Employee' }).click();
    await page.waitForTimeout(2000);

    // ----- Second employee -----

    await page.getByRole('button', { name: 'Add New' }).click();
    await page.getByRole('textbox', { name: 'Enter first name' }).click();
    await page.getByRole('textbox', { name: 'Enter first name' }).fill('Maleena');
    await page.getByRole('textbox', { name: 'Enter last name' }).click();
    await page.getByRole('textbox', { name: 'Enter last name' }).fill('Kalhari');
    await page.getByRole('textbox', { name: 'Enter NIC' }).click();
    await page.getByRole('textbox', { name: 'Enter NIC' }).fill('2008786437'); //Change
    await page.getByRole('combobox', { name: 'Designation *' }).click();
    await page.getByLabel('Receptionist').getByText('Receptionist').click();
    await page.getByRole('combobox', { name: 'Department *' }).click();
    await page.getByLabel('Front Office').getByText('Front Office').click();
    await page.getByRole('combobox', { name: 'Status *' }).click();
    await page.getByLabel('Active').getByText('Active').click();
    await page.getByPlaceholder('Enter salary').click();
    await page.getByPlaceholder('Enter salary').fill('75000');
    await page.getByRole('textbox', { name: 'Enter email' }).click();
    await page.getByRole('textbox', { name: 'Enter email' }).fill('jayalak887@gmail.com');
    await page.getByRole('textbox', { name: 'Enter mobile' }).click();
    await page.getByRole('textbox', { name: 'Enter mobile' }).fill('0778456345');
    await page.getByRole('textbox', { name: 'Enter address' }).click();
    await page.getByRole('textbox', { name: 'Enter address' }).fill('Alawwa');
    await page.getByRole('combobox', { name: 'Province *' }).click();
    await page.getByLabel('North Western Province', { exact: true }).getByText('North Western Province').click();
    await page.getByRole('combobox', { name: 'City *' }).click();
    await page.getByLabel('Kurunegala').getByText('Kurunegala').click();
    await page.getByRole('button', { name: 'Save Employee' }).click();
    await page.waitForTimeout(2000);

    // ----- Third employee -----

    await page.getByRole('button', { name: 'Add New' }).click();
    await page.getByRole('textbox', { name: 'Enter first name' }).click();
    await page.getByRole('textbox', { name: 'Enter first name' }).fill('Lakmali');
    await page.getByRole('textbox', { name: 'Enter last name' }).click();
    await page.getByRole('textbox', { name: 'Enter last name' }).fill('Gunasingha');
    await page.getByRole('textbox', { name: 'Enter NIC' }).click();
    await page.getByRole('textbox', { name: 'Enter NIC' }).fill('2000456317'); //Change
    await page.getByRole('combobox', { name: 'Designation *' }).click();
    await page.getByLabel('Receptionist').getByText('Receptionist').click();
    await page.getByRole('combobox', { name: 'Department *' }).click();
    await page.getByLabel('Front Office').getByText('Front Office').click();
    await page.getByRole('combobox', { name: 'Status *' }).click();
    await page.getByLabel('Active').getByText('Active').click();
    await page.getByPlaceholder('Enter salary').click();
    await page.getByPlaceholder('Enter salary').fill('75000');
    await page.getByRole('textbox', { name: 'Enter email' }).click();
    await page.getByRole('textbox', { name: 'Enter email' }).fill('slakmaligunasingha@gmail.com');
    await page.getByRole('textbox', { name: 'Enter mobile' }).click();
    await page.getByRole('textbox', { name: 'Enter mobile' }).fill('0778456345');
    await page.getByRole('textbox', { name: 'Enter address' }).click();
    await page.getByRole('textbox', { name: 'Enter address' }).fill('Alawwa');
    await page.getByRole('combobox', { name: 'Province *' }).click();
    await page.getByLabel('North Western Province', { exact: true }).getByText('North Western Province').click();
    await page.getByRole('combobox', { name: 'City *' }).click();
    await page.getByLabel('Kurunegala').getByText('Kurunegala').click();
    await page.getByRole('button', { name: 'Save Employee' }).click();
    await page.waitForTimeout(2000);

    // ----- Fourth employee -----

    await page.getByRole('button', { name: 'Add New' }).click();
    await page.getByRole('textbox', { name: 'Enter first name' }).click();
    await page.getByRole('textbox', { name: 'Enter first name' }).fill('Dehemi');
    await page.getByRole('textbox', { name: 'Enter last name' }).click();
    await page.getByRole('textbox', { name: 'Enter last name' }).fill('Upeksha');
    await page.getByRole('textbox', { name: 'Enter NIC' }).click();
    await page.getByRole('textbox', { name: 'Enter NIC' }).fill('20075372453'); //Change
    await page.getByRole('combobox', { name: 'Designation *' }).click();
    await page.getByLabel('Receptionist').getByText('Receptionist').click();
    await page.getByRole('combobox', { name: 'Department *' }).click();
    await page.getByLabel('Front Office').getByText('Front Office').click();
    await page.getByRole('combobox', { name: 'Status *' }).click();
    await page.getByLabel('Active').getByText('Active').click();
    await page.getByPlaceholder('Enter salary').click();
    await page.getByPlaceholder('Enter salary').fill('75000');
    await page.getByRole('textbox', { name: 'Enter email' }).click();
    await page.getByRole('textbox', { name: 'Enter email' }).fill('dehemiupeksha6@gmail.com');
    await page.getByRole('textbox', { name: 'Enter mobile' }).click();
    await page.getByRole('textbox', { name: 'Enter mobile' }).fill('0751246782');
    await page.getByRole('textbox', { name: 'Enter address' }).click();
    await page.getByRole('textbox', { name: 'Enter address' }).fill('galgamuwa,kurunegala');
    await page.getByRole('combobox', { name: 'Province *' }).click();
    await page.getByLabel('Central Province', { exact: true }).getByText('Central Province').click();
    await page.getByRole('combobox', { name: 'City *' }).click();
    await page.getByLabel('Kandy').getByText('Kandy').click();
    await page.getByRole('button', { name: 'Save Employee' }).click();
    await page.waitForTimeout(2000);


});