import { LaunchOptions, chromium, firefox, webkit, Browser, BrowserContext } from "@playwright/test";
import { Before, After, BeforeAll, AfterAll, setDefaultTimeout } from '@cucumber/cucumber';
import { fixture } from "../utils/fixture";

const headlessMode: boolean = process.env.HEADLESS === 'true' || false;

let browser: Browser;
let context: BrowserContext;

const options: LaunchOptions = {
  headless: headlessMode,
  slowMo: 100
};

setDefaultTimeout(60 * 10000);

// To launch the browser before all the scenarios
BeforeAll(async function () {  
  browser = await chromium.launch(options);
  // browser = await firefox.launch(options);
  // browser = await webkit.launch(options);
});

Before(async function ({ pickle }) {
  context = await browser.newContext();
  this.page = await context.newPage();
  fixture.page = this.page;
});

After(async function ({ pickle }) {
  const screenshotPath = './reports/screenshots/' + (pickle.name).replace(/ /g, '_') + '.png';
  const image: Buffer = await this.page.screenshot({
    path: screenshotPath,
    type: 'png'
  });
  this.attach(image, 'image/png');
  console.log(`The screenshot has been generated here: ${screenshotPath}`);
  
  await this.page.close();
  await context.close();
});

AfterAll(async function () {
  await browser.close();
});