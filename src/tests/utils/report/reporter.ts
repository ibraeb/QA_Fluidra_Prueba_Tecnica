import reporter, { Options } from 'cucumber-html-reporter';

const options: Options = {
  theme: 'bootstrap',
  jsonFile: 'reports/cucumber_report.json',
  output: 'reports/cucumber_report.html',
  screenshotsDirectory: 'reports/screenshots/',
  reportSuiteAsScenarios: true,
  storeScreenshots: false,
  name: 'Automation Tests',
  scenarioTimestamp: false,
  launchReport: true
};

reporter.generate(options);