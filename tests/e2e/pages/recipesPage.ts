import { Page } from '@playwright/test';

export class RecipesPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('/ingredients/api');
    }

    async recipesHeadingVisible() {
        // return this.page.locator('#recipes').isVisible();
        return this.page.getByRole('heading', { name: 'API' });
    }

    async verifyAllRecipesDisplayed(
        recipeData: Array<{ id: string; title: string; image: string }>
    ) {
        for (const recipe of recipeData) {
            const recipeLocator = this.page
                .locator('div')
                .filter({ hasText: `${recipe.title}` })
                .first();
            if (!(await recipeLocator.isVisible())) {
                // If any recipe is not visible, return false
                return false;
            }
        }
        // If all recipes are visible, return true
        return true;
    }
}
