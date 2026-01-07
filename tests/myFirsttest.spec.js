import { test, expect } from '@playwright/test';
import { FormPom } from '../POM/formPom';

test.only('Ausfüllen Student Registration Form', async ({ page }) => {
    const form = new FormPom(page);
    await page.pause();
    await form.open();

    await form.firstName.fill('Phuong Anh');
    await form.lastName.fill('Nhu');
    await form.email.fill('phuonganh.nhu@iso-gruppe.com');
    await form.genderFemale.click();
    await form.mobile.fill('0123456789');

    await form.dateOfBirth.fill('26.01.1996');
    await page.keyboard.press('Enter');

    await form.subjects.fill('Com');
    await page.getByText('Computer Science', { exact: true }).click();

    await form.sports.click();
    await form.stateSelect.click({ force: true });
    await page.getByText('Haryana').click();

    await form.submit.click();
    await form.expectResultRow(0, 'Student NamePhuong Anh Nhu');
    await form.expectResultRow(1, 'Student Emailphuonganh.nhu@iso-gruppe.com');
    await form.expectResultRow(2, 'GenderFemale');
    await form.expectResultRow(3, 'Mobile0123456789');
});