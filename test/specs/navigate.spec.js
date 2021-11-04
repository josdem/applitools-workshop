const assert = require("assert")

describe("Loading WebdriverIO webpage", () => {
  it("validates website title", async () => {
    await browser.url("https://webdriver.io/")
    const title = await browser.getTitle()
    assert.strictEqual(title, "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO")
  })
})
