const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Test the Movies App", () => {
  test("can add a movie", async () => {
    await driver.get("http://localhost:3000/");

    await driver
      .findElement(By.css('input[name="movieTitle"]'))
      .sendKeys("The Flash (2023)");
    await driver.findElement(By.css('button[type="submit"]')).click();

    const addedMovie = await driver.wait(
      until.elementLocated(By.css("#movies-list li label")),
      1000
    );
    expect(await addedMovie.getText()).toBe("The Flash (2023)");
  });
});


test("can remove a movie", async () => {
    try {
      await driver.get("http://localhost:3000/");

      const movieTitleToRemove = "The Flash (2023)";

      const movieElement = await driver.findElement(By.xpath(`#movies-list li label, "${movieTitleToRemove}")]`));

      const deleteButton = await movieElement.findElement(By.css('.delete-btn'));
      await deleteButton.click();

      await driver.sleep(1000);

      const moviesList = await driver.findElements(By.css("#movies-list li label"));
      const movieTitles = await Promise.all(moviesList.map(movie => movie.getText()));
      expect(movieTitles.includes(movieTitleToRemove)).toBe(false);
    } finally {
    }
});
