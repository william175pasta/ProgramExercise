//請寫出一個叫做 starReturn 的 function 並且接受一個參數 n，能回傳 n 個 *

function starReturn(n) {
    var st = "";
    for (var i = 0; i < n; i++) {
        st = st + "*"
    } return st
}
console.log(starReturn(3))