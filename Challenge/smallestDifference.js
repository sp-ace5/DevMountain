function smallestDifference(arr1, arr2) {
    let smallestDifference = Number.MAX_VALUE;
  
    for (let num1 of arr1) {
      for (let num2 of arr2) {
        let difference = Math.abs(num1 - num2);
        if (difference < smallestDifference) {
          smallestDifference = difference;
        }
      }
    }
  
    return smallestDifference;
  }
  
  // Example usage:
  const arr1 = [10, 20, 14, 16, 18];
  const arr2 = [30, 23, 54, 33, 96];
  
  console.log(smallestDifference(arr1, arr2));