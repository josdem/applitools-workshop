const applitools = require("../utils/applitools.util")
const Constants = require("../utils/constants.util")
const HomePage = require("../pageobjects/home.page")

const testName = "Checkout footer region"
const batchName = "WebdriverIO"

describe(testName, () => {
  before("setting up Applitools configuration", async () => {
    await applitools.setUpConfiguration(batchName)
  })

  beforeEach("setting up test information", async function () {
    await applitools.setUpTest(Constants.appName, testName)
  })

  it("validates website footer", async () => {
    await HomePage.open()
    await applitools.checkRegionEyes("footer region", HomePage.getFooter())
  })

  afterEach("closing eyes", async () => {
    await applitools.closeEyes()
  })

  after("Cleaning and publishing results", async () => {
    await applitools.cleaning()
  })
})
