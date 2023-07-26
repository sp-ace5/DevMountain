const { By, Builder, Browser, until, Key } = require("selenium-webdriver");
let driver;

// Build a new driver for each test
beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.FIREFOX).build();
});

// Quit a driver after each test
afterEach(async () => {
  await driver.quit();
});

describe("Test the Google homepage", () => {
  test("can search Google for 'Selenium'", async () => {
    // Navigate to google.com
    await driver.get("https://www.google.com/");

    // Locate the search bar and send the search term to it
    await driver.findElement(By.name("q")).sendKeys("selenium", Key.RETURN);
    // Wait until the title of the page changes to include the search term
    await driver.wait(until.titleIs("selenium - Google Search"), 1000);
  });

  test("Can search google for puppies and click on images tab", async () => {
    await driver.get("https://www.google.com/");
    await driver.findElement(By.name("q")).sendKeys("puppies", Key.RETURN);
    await driver.wait(until.titleIs("puppies - Google Search"), 1000);
    await driver.findElement(By.linkText("Images")).click()

    const currentPage = await driver.wait(until.elementLocated(By.css(`span[aria-current="page"]`)),1000)

    expect(await currentPage.getText()).toBe('images')

  })


});



