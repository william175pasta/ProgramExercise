//費式數列的定義為：第 n 個數等於前兩個數的總和，因此這個數列會長的像這樣：1 1 2 3 5 8 13 21 ….

function fib(n) {
    let fibArray = [0, 1];
    if (n <= 0) { return 0 }
    if (n > 0 && n <= 2) { return 1 }
    for (let i = 2; i <= n; i++) {
        fibArray.push(fibArray[i - 1] + fibArray[i - 2])
    }
    return fibArray[n]
}

console.log(fib(9))//34