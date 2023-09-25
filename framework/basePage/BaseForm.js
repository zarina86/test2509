import { BaseElement } from "../elements/BaseElement.js";

export default class BaseForm {
  uniqueElement;

  constructor(locator,name) {
    this.uniqueElement =  new BaseElement(locator,name);
  }
  
  async waitForDisplayed() {
    return this.uniqueElement.waitForDisplayed();
  }

  async waitForEnabled() {
    return this.uniqueElement.waitForEnabled();
  }
}
