// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:

function ZeroSum(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == 0) {
        return true;
      }
    }
  }
  return false;
}

console.log(ZeroSum(array));
