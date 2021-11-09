const properties = require(`../properties/${process.env.NODE_ENV}.properties`)
const applitools = require("../utils/applitools.util")
const assert = require("assert")

const { VisualGridRunner, RunnerOptions, Eyes, Target, BatchInfo, BrowserType, ConsoleLogHandler, DeviceName, ScreenOrientation } = require("@applitools/eyes-webdriverio")

let eyes
let runner
let configuration

describe("Loading WebdriverIO webpage", () => {
  before("setting up Applitools configuration", async () => {
    const runnerOptions = new RunnerOptions().testConcurrency(5)
    runner = new VisualGridRunner(runnerOptions)
    eyes = new Eyes(runner)
    eyes.setLogHandler(new ConsoleLogHandler(true))

    configuration = eyes.getConfiguration()
    configuration.setApiKey(process.env.APPLITOOLS_API_KEY)
    configuration.setServerUrl(applitools.APPLITOOLS_SERVER)
    configuration.setBatch(new BatchInfo(applitools.BATCH_INFO))
    configuration.addBrowser(applitools.CHROME.width, applitools.CHROME.height, BrowserType.CHROME)
    configuration.addBrowser(applitools.FIREFOX.width, applitools.FIREFOX.height, BrowserType.FIREFOX)
    configuration.addBrowser(applitools.EDGE.width, applitools.EDGE.height, BrowserType.EDGE_CHROMIUM)
    configuration.addBrowser(applitools.SAFARI.width, applitools.SAFARI.height, BrowserType.SAFARI)
    configuration.addDeviceEmulation(DeviceName.iPhone_11, ScreenOrientation.PORTRAIT)
    configuration.addDeviceEmulation(DeviceName.Pixel_5, ScreenOrientation.PORTRAIT)
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
    await eyes.check("home page", Target.window().layoutBreakpoints(applitools.BREAK_POINT_SIZE))
    const title = await browser.getTitle()
    assert.strictEqual(title, properties.title)
    await eyes.closeAsync()
  })

  afterEach("cleaning up test", async () => {
    await eyes.abortAsync()
  })

  after("publishing results", async () => {
    const results = await runner.getAllTestResults(false)
    console.log(results)
  })
})
