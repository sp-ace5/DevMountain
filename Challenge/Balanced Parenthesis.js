function has_Balanced_Parens(string) {
    let count = 0;
    for (let char of string) {
        if (char === '(' ) {
            count++
        } else if (char === ')' ) {
            count--
        } if (count < 0 ) {
            return false
        }
    }
    return count === 0;
}

console.log(has_Balanced_Parens('()')); // true
console.log(has_Balanced_Parens('(Oh Noes!)(')); // false
console.log(has_Balanced_Parens("((There's a bonus parenthesis here.)")); // false
console.log(has_Balanced_Parens('(')); // false
console.log(has_Balanced_Parens(')')); // false
console.log(has_Balanced_Parens('"(This has (too many closes.) ) )"')); // false
console.log(has_Balanced_Parens("Hey...there are no parens here!")); // true
console.log(has_Balanced_Parens(')(')); // false