function equalToZero(numbers) {
    const logNum = {}; 
    for (let i of numbers) {
      if (logNum[-i]) {
        return true; 
      }
      logNum[i] = true; 
    }
    return false; 
  }
  
  function uniqueSentence(word) {
    const logWord = {}; 
    for (let i of word) {
      if (logWord[i]) {
        return false; 
      }
      logWord[i] = true; 
    }
    return true; 
  }

  function pangramTest(sentence) {
    const logLetter = {};
    const lowerCase = sentence.toLowerCase();
    let uniqueCount = 0;
  
    for (let i of lowerCase) {
      if (/[a-z]/.test(i) && !logLetter[i]) {
        logLetter[i] = true;
        uniqueCount++
      }
    }
  
    return uniqueCount === 26;
  }
  
  function find_longest_word(words) {
    let logLength = 0;
    
    for (let i of words) {
      if (i.length > logLength) {
        logLength = i.length; 
      }
    }
    return logLength;
  }
  
// Sum zero tests
  console.log(equalToZero([]));
  console.log(equalToZero([1]));
  console.log(equalToZero([1, 2, 3])); 
  console.log(equalToZero([1, 2, 3, -2])); 
// Unique Characters tests
  console.log(uniqueSentence("Monday")); 
  console.log(uniqueSentence("Moonday")); 
// Pangram tests
  console.log(pangramTest("The quick brown fox jumps over the lazy dog!"));
  console.log(pangramTest("I like cats, but not mice"));
// Longest Word tests
  console.log(find_longest_word(["hi", "hello"]));


   
  
