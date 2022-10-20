const properties = require(`../properties/${process.env.NODE_ENV}.properties`)

class HomePage {
  getFooter() {
    return ".footer--dark"
  }

  async open() {
    await browser.url(properties.url)
    return await browser.getTitle()
  }
}

module.exports = new HomePage()
