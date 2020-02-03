//請寫一個 function position，接收一個字串並回傳這個字串裡面的第一個大寫字母跟它的 index，若沒有則回傳 -1

function position(str) {
    var reg = /^[A-Z]+$/;
    for (var i = 0; i < str.length; i++) {
        var s = "";
        s = str.slice(i, i + 1);
        if (reg.test(s)) {
            console.log(s, i)
            return
        }
    }
}

position("A") //正確回傳值：A 0
position("AbcD") //正確回傳值：A 0
position("abCD") //正確回傳值：C 2


