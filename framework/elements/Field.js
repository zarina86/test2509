import { BaseElement } from "./BaseElement.js";

class Field extends BaseElement {
  constructor(locator, name) {
    super(locator, name);
  }

  async setValue(value) {
    const element = await this.getElement();
    await element.setValue(value);
  }
}

export default Field;