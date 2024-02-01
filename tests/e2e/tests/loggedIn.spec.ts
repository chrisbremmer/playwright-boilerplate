import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://en.wikipedia.org');
});

test.describe('Testing logged in user', () => {
    test('menu', async ({ page }) => {
        await page.getByRole('link', { name: 'ChrisBremmer' }).click();
        await expect(
            page.getByRole('heading', { name: 'Hello, ‪ChrisBremmer‬!' })
        ).toBeVisible();
    });

    test('logs user out', async ({ page }) => {
        await page.getByRole('button', { name: 'Personal tools' }).check();
        await page.getByRole('link', { name: 'Log out' }).click();
        await expect(
            page.getByRole('heading', { name: 'Log out' })
        ).toBeVisible();
    });
});
