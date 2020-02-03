//請寫出一個函式 reverse，接收一個字串，並且回傳反轉過後的字串。（禁止使用內建函式 reverse）

function reverse(str) {
    if (str.length == 0) {
        return null;
    }

    let i = str.length - 1
    let sum = "";
    let strArray = [];
    for (let x = i; x >= 0; x--) {
        sum = str.charAt(x) //获取字符
        strArray.push(sum)
    }
    return strArray.join(''); //join()將陣列中所有的元素連接、合併成一個字串，並回傳此字串。
}
console.log(reverse("12345aa"))


// reverse("abcd") //預期回傳值：dcba  
// reverse("12345aa") //預期回傳值：aa54321
