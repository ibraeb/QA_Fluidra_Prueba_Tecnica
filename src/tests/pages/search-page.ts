import { Page } from "@playwright/test";
export default class SearchPage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }  

    private selectors = {
        googleSearchInput: 'textarea[name="q"]',
        googleSearchResults: 'div[id="search"]',
        googleRejectCookies: 'button[id="W0wltc"]',
        wikipediaLink: '(//a[contains(@href, "https://en.wikipedia.org/wiki/Automation")]/h3)[1]',
        googleGoToNextPage: 'a[id="pnnext"]'
    };

    async goto(url: string) {
        await this.page.goto(url)
        await this.page.waitForURL(url);
        await this.rejectGoogleCookies();
    }

    async search(searchTerm: string) {
        await this.page.fill(this.selectors.googleSearchInput, searchTerm);
        await this.page.press(this.selectors.googleSearchInput, 'Enter');
        await this.page.waitForSelector(this.selectors.googleSearchResults);
    }

    async rejectGoogleCookies() {
        return this.page.click(this.selectors.googleRejectCookies);
    }

    async clickOnWikipediaResult(attempts: number) {
        const isVisible = await this.page.isVisible(this.selectors.wikipediaLink);
        if(!isVisible) {
            if(attempts > 0) {
                await this.page.click(this.selectors.googleGoToNextPage); 
                await this.page.waitForLoadState();
                await this.clickOnWikipediaResult(attempts - 1);
            } 
        } else {            
            await this.page.click(this.selectors.wikipediaLink); 
        }
        return;
    }

}