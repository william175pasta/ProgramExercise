//請寫一個函式 table，接收一個數字 n ，印出 n 1 ~ n 9 的結果

function table(n) {
    for (let i = 0; i <= 9; i++) {
        console.log(`${n}*${i}=${n * i}`)
    }
    return
}

table(1)