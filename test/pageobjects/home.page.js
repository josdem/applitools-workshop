import { BrowserType } from "@applitools/eyes-webdriverio"

const properties = require(`../properties/${process.env.NODE_ENV}.properties`)

class Home {
  getFooter() {
    return $('[class="footer footer--dark"]')
  }

  async open() {
    await browser.url(properties.url)
    return await browser.getTitle()
  }
}

export const HomePage = new Home()
export const footter = getFooter()
