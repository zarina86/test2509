import { TIMEOUTS } from "../../test/resources/Timeouts.js";
import { logger } from "../utils/Logger.js";

class BrowserUtils { 
  static async maximize() {
    logger.info("window maximize");
    return browser.maximizeWindow();
  }

  static async fullScreen() {
    logger.info("full screen");
    return browser.fullscreenWindow();
  }

  static async navigate(url) {
    logger.info(url, `navigate to ${url}`);
    return browser.navigateTo(url);
  }

  static async refresh() {
    logger.info("refresh browser");
    return browser.refresh();
  }

  static async reload() {
    logger.info("reload browser");
    return browser.reloadSession();
  }

  static async closeWindow() {
    logger.info("close window");
    return browser.closeWindow();
  }

  static async setCookies(name, value) {
    logger.info([name, value],["set cookies"]);
    return browser.setCookies({name: name, value: value, secure:true, httpOnly:true});
  }

  static async getCookies(name) {
    logger.info(name,"get cookies");
    return browser.getCookies(name);
  }

  static async getWindowTabs(timeout = TIMEOUTS.browserWait) {
    logger.info("return window tabs");
    return browser.waitUntil(async function() {
      return browser.getWindowHandles();
    }, {timeout: timeout});
  }

  static async getCurrentTab() {
    logger.info("return  current window tab");
    return browser.getWindowHandle();
  }
  
  static async switchToWindow(GUID) {
    logger.info(GUID, `switch window tab by ${GUID}`);
    return browser.switchToWindow(GUID);
  }

  static async switchWindow(url) {
    logger.info(url, `switch window tab by ${url}`);
    return browser.switchWindow(url);
  }

  static async takeScreenshot() {
    logger.info("take a screenshot of the current page");
    return browser.takeScreenshot();
  }
}

export default BrowserUtils;