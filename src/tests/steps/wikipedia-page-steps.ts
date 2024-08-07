import { Given, Then, When, setDefaultTimeout} from "@cucumber/cucumber"
import { fixture } from "../utils/fixture";
import assert from 'assert';
import WikipediaPage from "../pages/wikipedia-page";

let wikipediaPage: WikipediaPage;
setDefaultTimeout(60 * 20000);

Then('The user verifies that the year of the first automated process is {string}', async function (expectedYear: string) {
    wikipediaPage = new WikipediaPage(fixture.page); 
    const year = await wikipediaPage.getYearOfFirstAutomatedProcess();
    assert.strictEqual(year, expectedYear);
});
