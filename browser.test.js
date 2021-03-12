const {Builder} = require("selenium-webdriver");
const fnc = require('./index');
const termToSearch = "Egipto luxor";

jest.setTimeout(30000);

let driver;


test('get title of the current page - Google', async () => {
    driver = await new Builder().forBrowser("firefox").build();  
    const title =  await fnc.loadGoogle(driver);
    expect(title).toBe('Google');
});

test('get textbox value', async () => {   
    const value =  await fnc.setTextBox(driver, termToSearch);
    expect(value).toBe(termToSearch);
});

test('get results values', async () => {   
  //added a line comment  
  // new chnge cambio 5 adicionando lineas de codigo
  // todo funcionando
  const value =  await fnc.getResults(driver);
  console.log("los resultados " +  value + ";");
  expect(value).toEqual("value");
  driver.quit();
});

