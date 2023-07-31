const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:3000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test("clicking the Draw button displays the div with id = 'choices'", async () => {
    await driver.get("http://localhost:3000");

    // Click the Draw button
    const drawButton = await driver.findElement(By.id("draw"));
    await drawButton.click();

    // Check if the div with id 'choices' is displayed
    const choicesDiv = await driver.findElement(By.id("choices"));
    const isChoicesDivDisplayed = await choicesDiv.isDisplayed();
    expect(isChoicesDivDisplayed).toBeTruthy();
  });

  test("clicking an 'Add to Duo' button displays the div with id = 'player-duo'", async () => {
    await driver.get("http://localhost:3000");

    // Click the Draw button to display the choices div
    const drawButton = await driver.findElement(By.id("draw"));
    await drawButton.click();

    // Click the 'Add to Duo' button for the first bot
    const addToDuoButton = await driver.findElement(By.class("bot-btn"));
    await addToDuoButton.click();

    // Check if the div with id 'player-duo' is displayed
    const playerDuoDiv = await driver.findElement(By.id("player-duo"));
    const isPlayerDuoDivDisplayed = await playerDuoDiv.isDisplayed();
    expect(isPlayerDuoDivDisplayed).toBeTruthy();
  });

  test("when a bot is 'Removed from Duo', it goes back to 'choices'", async () => {
    await driver.get("http://localhost:3000");

    // Click the Draw button to display the choices div
    const drawButton = await driver.findElement(By.id("draw"));
    await drawButton.click();

    // Click the 'Add to Duo' button for the first bot to display the player-duo div
    const addToDuoButton = await driver.findElement(By.id("bot-btn"));
    await addToDuoButton.click();

    // Click the 'Remove from Duo' button for the first bot
    const removeFromDuoButton = await driver.findElement(By.class("bot-btn"));
    await removeFromDuoButton.click();

    // Check if the div with id 'choices' is displayed again
    const choicesDiv = await driver.findElement(By.id("choices"));
    const isChoicesDivDisplayed = await choicesDiv.isDisplayed();
    expect(isChoicesDivDisplayed).toBeTruthy();
  });

  test("clicking the Duel button displays the results section", async () => {
    await driver.get("http://localhost:3000");

    // Click the Draw button to display the choices div
    const drawButton = await driver.findElement(By.id("draw"));
    await drawButton.click();

    // Click the 'Add to Duo' button for the first bot to display the player-duo div
    const addToDuoButton = await driver.findElement(By.class("bot-btn"));
    await addToDuoButton.click();

    // Click the 'Add to Duo' button for the second bot to display the player-duo div
    const addToDuoButton2 = await driver.findElement(By.class("bot-btn"));
    await addToDuoButton2.click();

    // Click the Duel button
    const duelButton = await driver.findElement(By.id("duel"));
    await duelButton.click();

    // Check if the results section is displayed
    const resultsSection = await driver.findElement(By.id("results"));
    const isResultsSectionDisplayed = await resultsSection.isDisplayed();
    expect(isResultsSectionDisplayed).toBeTruthy();
  });
});

