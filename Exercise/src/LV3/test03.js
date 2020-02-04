//請寫一個 function tree，接收一個數字 n，按照規律列印出大小為 n 的聖誕樹 

function tree(n) {
    printTreeTop(n)
    printTreeBottom(n)
}
function printTreeTop(n) {
    for (var i = 1; i <= n; i++) {
        console.log(" ".repeat(n - i) + "*".repeat((i * 2) - 1))
    }
}
function printTreeBottom(n) {
    if (n === 1) { return }
    for (let i = 1; i <= n; i++) {
        console.log(' '.repeat(n - 1) + '*' + i)
    }
}

tree(5)
tree(15)
