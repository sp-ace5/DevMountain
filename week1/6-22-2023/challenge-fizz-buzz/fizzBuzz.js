// Write your solution below this line:

function fizzbuzz() {
  for (x = 1; x <= 50; x++) {
    if (x % 3 === 0 && x % 5 === 0) {
      console.log(`fizzbuzz`);
    } else if (x % 3 === 0) {
      console.log(`fizz`);
    } else if (x % 5 === 0){
      console.log(`buzz`);
    } else {
        console.log(x);
    }
  }
}

fizzbuzz()