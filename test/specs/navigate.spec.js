const properties = require(`../properties/${process.env.NODE_ENV}.properties`)
const assert = require("assert")

describe("Loading WebdriverIO webpage", () => {
  it("validates website title", async () => {
    await browser.url(properties.url)
    const title = await browser.getTitle()
    assert.strictEqual(title, properties.title)
  })
})
