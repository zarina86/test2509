import BaseForm from "../../framework/basePage/BaseForm.js";
import Texttxt from "../../framework/elements/Text.js";
import Link from "../../framework/elements/Link.js";
import Field from "../../framework/elements/Field.js";
import CheckBox from "../../framework/elements/CheckBox.js";

class MainPage extends BaseForm {
  constructor() {
    super();
    this.uniqueElement = new Texttxt("//h1[contains(text(),'todos')]", "React-Todo-List is opened");
  }

  get toDoField() { return new Field("//input[@type='text']", "input todo's name to the field") };
  get submitButton() { return new Link("//button[@type='submit']", "submit button") };
  get toDoList() { return new Texttxt("//span", "ToDoList")}
  get toDoListCheckboxes() { return new CheckBox("//input[@type='checkbox']", "toDo list of checkboxes") };
  get linedTodo() { return new CheckBox("//span[contains(@style,'line-through')]", "toDo item is lined through") };

  async inputTodoName(value) {
    await this.toDoField.setValue(value);
  }

  async clickSubmitButton() {
    return this.submitButton.click();
  }

  async getToDos() {
    return this.toDoList.getHTMLList(false);
  }

  async clickRandomCheckbox() {
    return this.toDoListCheckboxes.clickChekbox();
  }

  async getCompletedItem() {
    return this.linedTodo.getElement();
  }
}

export default new MainPage;
