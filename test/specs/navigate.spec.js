const properties = require(`../properties/${process.env.NODE_ENV}.properties`)
const applitools = require("../utils/applitools.util")
const assert = require("assert")

const { VisualGridRunner, RunnerOptions, Eyes, Target, Configuration, BatchInfo, BrowserType, DeviceName, ScreenOrientation, By } = require("@applitools/eyes-webdriverio")

let eyes
let runner
let configuration

describe("Loading WebdriverIO webpage", () => {
  before("setting up Applitools configuration", async () => {
    const runnerOptions = new RunnerOptions().testConcurrency(5)
    runner = new VisualGridRunner(runnerOptions)
    eyes = new Eyes(runner)

    if (browser.config.enableEyesLogs) {
      eyes.setLogHandler(new ConsoleLogHandler(true))
    }

    configuration = eyes.getConfiguration()
    configuration.setApiKey(process.env.APPLITOOLS_API_KEY)
    configuration.setServerUrl(applitools.APPLITOOLS_SERVER)
    configuration.setBatch(new BatchInfo(applitools.BATCH_INFO))
    configuration.addBrowser(800, 600, BrowserType.CHROME)
  })

  beforeEach("setting up test information", async function () {
    const appName = await this.test.parent.title
    const testName = await this.currentTest.title

    configuration.setAppName(appName)
    configuration.setTestName(testName)
    eyes.setConfiguration(configuration)
    await eyes.open(browser)
  })

  it("validates website title", async () => {
    await browser.url(properties.url)
    const title = await browser.getTitle()
    assert.strictEqual(title, properties.title)
  })

  afterEach("cleaning up test", async () => {
    await eyes.abortAsync()
  })

  after("publishing results", async () => {
    const results = await runner.getAllTestResults(false)
    console.log(results)
  })
})
