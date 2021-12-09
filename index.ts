import { Builder, By, Key, until } from 'selenium-webdriver';

const username = "****";
const password = "****";
const grades = "Hej lyret, den här gången spelar jag in";

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://canvas.ju.se/login/');

    await driver.findElement({ id: 'juButtonHeadline' }).click();

    await driver.findElement({ id: 'userNameInput' }).sendKeys(username);
    await driver.findElement({ id: 'passwordInput' }).sendKeys(password, Key.ENTER);

    const url = "https://ju.instructure.com/courses/4383/assignments/18987/submissions/17976";
    await driver.get(url);

    await driver.findElement({ className: 'ic-Input grading_comment' }).sendKeys(grades);
    await driver.findElement({ className: 'Button Button--primary save_comment_button' }).click();



  }
  finally {
    // await driver.quit();
  }
})();