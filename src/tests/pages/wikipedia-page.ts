import { Page } from "@playwright/test";
export default class WikipediaPage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }  

    private selectors = {
        wikipediaContent: '#mw-content-text',
    };

    async getYearOfFirstAutomatedProcess() {
        const content = await this.page.textContent(this.selectors.wikipediaContent);
        const yearMatch = content?.match(/in (\d{4}), making it the first completely automated industrial process/);
        return yearMatch ? yearMatch[1] : 'The year of first automated proces has not been found';
    }

}