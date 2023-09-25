import { logger } from "../utils/Logger.js";
import { TIMEOUTS } from "../../test/resources/Timeouts.js";
import RandomInteger from "../utils/RandomInteger.js";

export class BaseElement {
  constructor(locator, name) {
    this.locator = locator;
    this.name = name;
    logger.info([locator, name]);
  }

  async click() {
    return (await this.getElement()).click();
  }
  
  async getHTML(value) {
    const element = await this.getElement();
    return element.getHTML(value);
  }

  async getElement() {
    return $(this.locator);
  }

  async getElements() {
    return $$(this.locator); 
  }

  async clickChekbox() {
    const list = await this.getElements();
    let index = RandomInteger.generateRandomInteger(list.length)
    return list[index].click();
  }

  async getTextList() {
    const list = await this.getElements();
    return  Promise.all(
      list.map(function(option) {
        return option.getText();
      })
    )    
  }

  async getHTMLList(value) {
    const list = await this.getElements();
    return  Promise.all(
      list.map(function(option) {
        return option.getHTML(value);
      })
    )    
  }
  
  async getText() {
    const element = await this.getElement();
    return element.getText();
  }
    
  async getAttribute(value) {
    const element = await this.getElement();
    return element.getAttribute(value);
  }
  
  async waitForDisplayed(timeout = TIMEOUTS.displayed) {
    const element = await this.getElement();
    return (await element.waitForDisplayed({timeout: timeout}));
  }

  async waitForEnabled(timeout = TIMEOUTS.enabled) {
    const element = await this.getElement();
    return (await element.waitForEnabled({timeout: timeout}));
  }
}