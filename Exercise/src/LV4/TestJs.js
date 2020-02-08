// 輸入一個X 及 N  輸出結果為 X的 N 次方

function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
        result = result * x;
    }
    return result
}

let x = prompt('x?');
let n = prompt('n=?');

if (n < 1) {
    alert('XDDDD');
} else {
    alert(pow(x, n));
}