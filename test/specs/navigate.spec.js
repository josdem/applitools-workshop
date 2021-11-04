const properties = require(`../properties/${process.env.NODE_ENV}.properties`)
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
    configuration.addBrowser(1280, 768, BrowserType.CHROME)
  })

  it("validates website title", async () => {
    await browser.url(properties.url)
    const title = await browser.getTitle()
    assert.strictEqual(title, properties.title)
  })
})
