import { expect, test } from '@playwright/test';

test.describe('Add a simple form test', () => {
	test('index page has expected h1', async ({ page }) => {
		await page.goto('/');
		await expect(page.getByRole('heading', { name: 'My Form' })).toBeVisible();
	});

	test('Fill in generated form', async ({ page }) => {
		await page.goto('/');
		await page.getByLabel('First Name').fill('Max');
		await page.getByLabel('Last Name').fill('Mustermann');
		await page.getByLabel('E-Mail').fill('max.mustermann@test.com');
		await page.getByLabel('Password').fill('Test123!');
		await page.getByLabel('Okay i aggree.').check();
		await page.locator('[name=question]').selectOption('3');
		await page.locator('#selectone2').click();
		await page.getByRole('button').click({ timeout: 1000 });
	});
});
