const properties = require(`../properties/${process.env.NODE_ENV}.properties`)

const assert = require("assert")
const applitools = require("../utils/applitools.util")
const HomePage  = require("../pageobjects/home.page")

describe("Loading WebdriverIO webpage", () => {
  before("setting up Applitools configuration", async () => {
    await applitools.setUpConfiguration()
  })

  beforeEach("setting up test information", async function () {
    const appName = await this.test.parent.title
    const testName = await this.currentTest.title
    await applitools.setUpTest(appName, testName)
  })

  it("validates website title", async () => {
    const title = await HomePage.open()
    await applitools.checkWindowEyes("home page")
    assert.strictEqual(title, properties.title)
    await applitools.closeEyes()
  })

  afterEach("cleaning up test", async () => {
    await applitools.cleaning()
  })

  after("publishing results", async () => {
    await applitools.publishing()
  })
})
