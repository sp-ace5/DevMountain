function hasMoreVowels(word) {
    word = word.toUpperCase();
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    let sum = 0;
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            sum += 1
        }
    }
    return sum >= word.length / 2
}

console.log(hasMoreVowels('moose')); 
console.log(hasMoreVowels('mice')); 
console.log(hasMoreVowels('graph')); 