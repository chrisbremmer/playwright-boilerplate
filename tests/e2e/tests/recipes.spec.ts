import { test, expect } from '@playwright/test';
import { RecipesPage } from '../pages/recipesPage';
import recipeData from '../../fixtures/recipeData.json';

test.describe('Recipes UI with Mocked Data', () => {
    let recipesPage: RecipesPage;

    test.beforeEach(async ({ page }) => {
        recipesPage = new RecipesPage(page);

        // Set up the mocked API response before each test
        await page.route('**/api/recipes', (route) =>
            route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify({
                    time: Date.now(),
                    data: recipeData,
                }),
            })
        );
        await recipesPage.goto();
    });

    test('should display the recipes heading on the page', async () => {
        // Test that the recipes container is visible
        expect(recipesPage.recipesHeadingVisible()).toBeTruthy();
    });

    test('should display all recipes from the fixtures on the page', async () => {
        // Verify that each recipe from the fixtures is displayed on the page
        const allRecipesDisplayed = await recipesPage.verifyAllRecipesDisplayed(
            recipeData
        );
        expect(allRecipesDisplayed).toBeTruthy();
    });
});
