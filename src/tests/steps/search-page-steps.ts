import { Given, Then, When, setDefaultTimeout} from "@cucumber/cucumber"
import SearchPage from "../pages/search-page";
import { fixture } from "../utils/fixture";

let searchPage: SearchPage;
const URL: string = process.env.BASEURL ?? 'https://www.google.es/';
setDefaultTimeout(60 * 20000);


Given('The user opens Google search page', async function () {
    searchPage = new SearchPage(fixture.page); 
    await searchPage.goto(URL);
});

When('The user search for {string} search term', async function (searchTerm: string) {
    await searchPage.search(searchTerm);
});

Then('The user clicks on the Wikipedia link', async function () {
    await searchPage.clickOnWikipediaResult(3);
});

