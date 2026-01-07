import { test, expect } from '@playwright/test';

test.only('Ausfüllen Student Registration Form', async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form');
    await expect(page).toHaveTitle('DEMOQA');
    await page.getByRole('textbox', { name: 'First Name' }).fill('Phuong Anh');
    await page.getByPlaceholder('Last Name').fill('Nhu');
    await page.getByRole('textbox', { name: 'name@example.com' }).fill('phuonganh.nhu@iso-gruppe.com')
    await page.getByText('Female').click();
    await page.getByRole('textbox', { name: 'Mobile Number' }).fill('0123456789');
    await page.pause();
    await page.locator('#dateOfBirthInput').fill('26.01.1996');
    await page.keyboard.press('Enter');
    await page.locator('#subjectsInput').fill('Com');
    await page.getByText('Computer Science', { exact: true }).click();
    await page.getByText('Sports').click();
    await page.getByText('Select State').click({ force: true });
    await page.getByText('Haryana').click();
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.locator('tbody>tr').first()).toHaveText('Student NamePhuong Anh Nhu');
    await expect(page.locator('tbody>tr').nth(1)).toHaveText('Student Emailphuonganh.nhu@iso-gruppe.com');
    await expect(page.locator('tbody>tr').first(2)).toHaveText('GenderFemale');
    await expect(page.locator('tbody>tr').first(3)).toHaveText('Mobile0123456789');

});