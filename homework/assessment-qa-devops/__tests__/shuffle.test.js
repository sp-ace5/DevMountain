const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  it("return a new shuffled array with the same elements when the input array contains duplicate values", () => {
    const inputArray = [1, 2, 2, 3, 4, 4, 4, 5];
    const result = shuffle(inputArray);

    // Check if the length of the input array and the result array are the same
    expect(result.length).toBe(inputArray.length);

    // Check if all elements of the input array are present in the result array
    expect(result).toEqual(expect.arrayContaining(inputArray));

    // Check if the result array is different from the input array
    expect(result).not.toEqual(inputArray);
  });

  it("return an array with the same elements but in a different order", () => {
    const inputArray = [1, 2, 3, 4, 5];
    const result = shuffle(inputArray);

    // Check if the length of the input array and the result array are the same
    expect(result.length).toBe(inputArray.length);

    // Check if all elements of the input array are present in the result array
    expect(result).toEqual(expect.arrayContaining(inputArray));

    // Check if the result array is different from the input array
    expect(result).not.toEqual(inputArray);
  });
});