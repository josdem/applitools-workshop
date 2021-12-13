const { VisualGridRunner, RunnerOptions, Eyes, Target, BatchInfo, BrowserType, DeviceName, ScreenOrientation } = require("@applitools/eyes-webdriverio")

const APPLITOOLS_SERVER = "https://eyes.applitools.com/"
const BATCH_INFO = "Ultrafast Batch"
const BREAK_POINT_SIZE = 700
const CHROME = {
  width: 800,
  height: 600,
}
const FIREFOX = {
  width: 800,
  height: 600,
}
const EDGE = {
  width: 800,
  height: 600,
}
const SAFARI = {
  width: 1024,
  height: 768,
}

let eyes
let runner
let configuration

const setUpConfiguration = async () => {
  const runnerOptions = new RunnerOptions().testConcurrency(5)
  runner = new VisualGridRunner(runnerOptions)
  eyes = new Eyes(runner)

  configuration = eyes.getConfiguration()
  configuration.setApiKey(process.env.APPLITOOLS_API_KEY)
  configuration.setServerUrl(APPLITOOLS_SERVER)
  configuration.setBatch(new BatchInfo(BATCH_INFO))
  configuration.addBrowser(CHROME.width, CHROME.height, BrowserType.CHROME)
  configuration.addBrowser(FIREFOX.width, FIREFOX.height, BrowserType.FIREFOX)
  configuration.addBrowser(EDGE.width, EDGE.height, BrowserType.EDGE_CHROMIUM)
  configuration.addBrowser(SAFARI.width, SAFARI.height, BrowserType.SAFARI)
  configuration.addDeviceEmulation(DeviceName.iPhone_11, ScreenOrientation.PORTRAIT)
  configuration.addDeviceEmulation(DeviceName.Pixel_5, ScreenOrientation.PORTRAIT)
}

const setUpTest = async (appName, testName) => {
  configuration.setAppName(appName)
  configuration.setTestName(testName)
  eyes.setConfiguration(configuration)
  await eyes.open(browser)
}

const checkWindowEyes = async (screenshot) => {
  await eyes.check(screenshot, Target.window().layoutBreakpoints(BREAK_POINT_SIZE))
}

const checkRegionEyes = async (screenshot, region) => {
  await region.scrollIntoView()
  await eyes.check(screenshot, Target.window().layout())
}

const closeEyes = async () => {
  await eyes.closeAsync()
}

const cleaning = async () => {
  await eyes.abortAsync()
}

const publishing = async () => {
  const results = await runner.getAllTestResults(false)
  console.log(results)
}

module.exports = {
  cleaning,
  setUpTest,
  closeEyes,
  publishing,
  checkWindowEyes,
  checkRegionEyes,
  setUpConfiguration,
}
