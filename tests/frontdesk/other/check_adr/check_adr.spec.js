import { test, expect } from '@playwright/test';
import fs from 'fs';

test('Validate ADR Report', async ({ page }) => {

  test.setTimeout(120000);

  const data = JSON.parse(
    fs.readFileSync('./tests/frontdesk/other/check_adr/check_adr_data.json', 'utf8')
  );

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

  await page.waitForTimeout(3000);

  await page.getByRole('button', {
    name: 'Front Desk Reservations,'
  }).click();

  await page.getByRole('button', {
    name: 'Close Sidebar'
  }).click();

//   await page.getByRole('gridcell', {
//     name: '• 6 In'
//   }).click();

  await page.getByRole('button', { name: 'Next month' }).click();
  await page.getByRole('gridcell', { name: '• 6 In' }).click();

  await page.getByText('Today Guest Report').click();

  await page.waitForTimeout(3000);

  const row = page.locator('tbody tr').filter({
    hasText: data.guestName
  }).first();

  await expect(row).toBeVisible();

  const cells = await row.locator('td').allTextContents();

  const reportData = {
    guestName: cells[0]?.trim(),
    roomNo: cells[1]?.trim(),
    adults: cells[2]?.trim(),
    kids: cells[3]?.trim(),
    basis: cells[4]?.trim(),
    channel: cells[5]?.trim(),
    nationality: cells[6]?.trim(),
    roomType: cells[7]?.trim(),
    arrivalDate: cells[8]?.trim(),
    departureDate: cells[9]?.trim()
  };

  console.log('ADR Report Data');
  console.log(reportData);

  expect(reportData.guestName).toBe(data.guestName);
  expect(reportData.adults).toBe(data.adults);
  expect(reportData.kids).toBe(data.kids);
  expect(reportData.basis).toBe(data.basis);
//   expect(reportData.roomType).toBe(data.roomType);

  console.log('✅ Guest Name Matched');
  console.log('✅ Adults Matched');
  console.log('✅ Kids Matched');
  console.log('✅ Basis Matched');
//   console.log('✅ Room Type Matched');

});