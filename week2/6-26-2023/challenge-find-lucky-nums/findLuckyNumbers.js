// Write your code below this line.
let n = 8
let arr = []

function luckyNumber(n) {
    if (n > 0 || n < 10) {
        for (x=0;x < n; x++) {
            let ran = arr.push(Math.round(Math.random() * n))
            if(!arr.includes(ran)) {
                arr.push(ran)
            }
        }
    }
    console.log(arr)
}

luckyNumber(n)