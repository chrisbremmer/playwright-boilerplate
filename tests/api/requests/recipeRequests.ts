import { APIRequestContext } from '@playwright/test';

export class RecipeRequests {
    constructor(private request: APIRequestContext) {}

    async getRecipes() {
        const response = await this.request.get('/api/recipes');
        return response;
    }
}
