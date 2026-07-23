import { test, expect } from '@playwright/test';
import fs from 'fs';

test('Create Reservation', async ({ page }) => {

  test.setTimeout(220000);

  const reservationData = {
    guestName: 'Gayan',
    adults: '1',
    kids: '-',
    basis: 'FB',
    channel: 'Email',
    nationality: 'Sri Lanka',
    roomType: 'Single',
    arrivalDate: 'Jul 07',
    departureDate: 'Jul 09'
  };

  await page.goto('https://v2d.ceyinfo.com/', {
    waitUntil: 'networkidle'
  });

  await page.getByRole('link', { name: 'Login' }).click();

  await page.getByRole('textbox', {
    name: 'Email'
  }).fill('mimithaprabodani@gmail.com');

  await page.getByRole('textbox', {
    name: '********'
  }).fill('Mi@123');

  await page.getByRole('button', {
    name: 'Login'
  }).click();

  await page.waitForTimeout(2000);

  await page.getByRole('button', {
    name: 'Front Desk Reservations,'
  }).click();

  await page.getByRole('button', {
    name: 'Inquiries'
  }).click();

  await page.getByRole('button', {
    name: 'Close Sidebar'
  }).click();

  await page.getByRole('button', {
    name: '+ New Reservation'
  }).click();

  await page.getByRole('button', {
    name: '📋 Full Form All fields'
  }).click();

  await page.getByLabel('July')
    .getByRole('gridcell', { name: '7', exact: true })
    .click();

  await page.getByLabel('July')
    .getByRole('gridcell', { name: '9', exact: true })
    .click();

  await page.getByRole('button', {
    name: 'Summer season'
  }).click();

  await page.getByLabel('Email')
    .getByText('Email')
    .click();

//   await page.getByRole('button', {
//     name: 'Standard'
//   }).click();

//   await page.locator(
//     '.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.rounded-md.text-sm.font-medium'
//   ).first().click();

//   await page.getByRole('row', {
//     name: /Single/
//   }).getByRole('combobox').click();

 await page.getByRole('button', { name: 'Standard' }).click();
  await page.locator('.inline-flex.items-center.justify-center.gap-2.whitespace-nowrap.rounded-md.text-sm.font-medium.transition-colors.focus-visible\\:outline-none.focus-visible\\:ring-1.focus-visible\\:ring-ring.disabled\\:pointer-events-none.disabled\\:opacity-50.\\[\\&_svg\\]\\:pointer-events-none.\\[\\&_svg\\]\\:size-4.\\[\\&_svg\\]\\:shrink-0.border').first().click();
  await page.getByRole('row', { name: 'Single 1 LKR 22,000.00 LKR 44' }).getByRole('combobox').click();
  await page.getByLabel('FB').getByText('FB').click();

  await page.getByRole('button', {
    name: 'Add Guest Info'
  }).click();

  await page.getByRole('textbox', {
    name: 'Guest Name *'
  }).fill(reservationData.guestName);

  await page.getByRole('textbox', {
    name: 'Email* ( Either Email or'
  }).fill('gayan@gmail.com');

  await page.getByRole('button', {
    name: 'Save Guest'
  }).click();

  await page.getByRole('combobox')
    .filter({ hasText: 'None' })
    .click();

  await page.getByLabel('Confirmed')
    .getByText('Confirmed')
    .click();

  await page.getByRole('button', {
    name: 'Create Reservation'
  }).click();

  await page.waitForTimeout(5000);

  fs.writeFileSync(
  './tests/frontdesk/other/check_adr/check_adr_data.json',
  JSON.stringify(reservationData, null, 2)
);

  console.log('Reservation Data Saved');
});