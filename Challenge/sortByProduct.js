function sortByProduct(arr) {
  const pairArr = [];
  for (let i = 0; i < arr.length; i++) {
    pairArr.push([arr[i], arr[i] * (i + 1)]);
  }

  pairArr.sort((a, b) => a[1] - b[1]);

  for (let i = 0; i < pairArr.length; i++) {
    arr[i] = pairArr[i][0];
  }

  return arr;
}

const array = [23, 2, 3, 4, 5];
console.log(sortByProduct(array)); // [2, 3, 4, 23, 5]