import { assert } from "chai";
import BrowserUtils from "../../framework/utils/BrowserUtils.js";
import { CONFIG } from "../resources/Config.js";
import MainPage from "../pages/MainPage.js";
import JsonParse from "../../framework/utils/JsonParse.js";

describe("React-Todo-List UI Test", function () {
  before(async function() {
    await BrowserUtils.navigate(CONFIG.baseWebUrL);
  });

  it("it should add 3 elements to ToDo list, check ToDoList, select 1 element, delete selected item", async function () {
    assert.isTrue(await MainPage.waitForDisplayed());

    let data = JsonParse.parse(CONFIG.pathToTestData);
    let toDoNames = data.names;

    for (let element in toDoNames) {
      await MainPage.inputTodoName(toDoNames[element]);
      await MainPage.clickSubmitButton();
    }
    
    let list = await MainPage.getToDos();
    let listLength = data.numbers.listLength;
    assert.equal(list.length, listLength, "toDos list length should be to equal 3");   
    await MainPage.clickRandomCheckbox();
    let completedItem = await MainPage.getCompletedItem();
    let toDoTextDec = await completedItem.getAttribute("style");
    let textDecor = data.style.textDecoration;
    assert.include(toDoTextDec, textDecor, "text-decoration should be equal to line-through");
    let toDoText = await completedItem.getHTML(false);
    console.log(toDoText);

  })
})