const {Builder , By, Key, until} = require("selenium-webdriver");
//Change user name and password of my terminal


async function getResults(driver){
    let foo = await driver.wait(until.elementLocated(By.id('result-stats')), 30000, 'Timed out after 30 seconds', 5000);
    if(foo != undefined)
        return foo.getAttribute('innerHTML');
    else
        return 'Item not found'
}
async function setTextBox(driver, termToSearch){
    await driver.findElement(By.name("q")).sendKeys(termToSearch, Key.RETURN);
    await driver.wait(until.elementLocated(By.id('result-stats')), 30000, 'Timed out after 30 seconds', 5000);
    let qTextBox = await driver.findElement(By.name("q"));
    let foundText = await qTextBox.getAttribute("value");
    return foundText;
}
async function loadGoogle(driver){

    await driver.get("https://www.google.com/");
    let title = await driver.getTitle();
    return title;
}

module.exports = {
    getResults,
    loadGoogle,
    setTextBox
};