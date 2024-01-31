import { test, expect } from '@playwright/test';
import { RecipeRequests } from '../requests/recipeRequests';

test.describe('Recipe API Tests', () => {
    test('Retrieve recipes should return a valid response', async ({
        request,
    }) => {
        const recipeRequests = new RecipeRequests(request);
        const response = await recipeRequests.getRecipes();
        expect(response.ok()).toBeTruthy();

        const body = await response.json();
        expect(body).toHaveProperty('time');
        expect(Array.isArray(body.data)).toBeTruthy();
        expect(body.data.length).toBeGreaterThan(0);

        for (const item of body.data) {
            expect(item).toHaveProperty('id');
            expect(item).toHaveProperty('title');
            expect(item).toHaveProperty('image');
        }
    });
});
