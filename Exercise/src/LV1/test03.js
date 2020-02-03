//寫一個函式 star，接收一個參數 n ，並印出 n 個 *
function star(n) {
    var st = "";
    for (var i = 1; i <= n; i++) {
        var x = "*"
        st = st + x
        console.log("star(" + i + ")")
        console.log(st)
    }
}
star(5)