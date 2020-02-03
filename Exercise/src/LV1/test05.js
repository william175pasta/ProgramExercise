//請寫一個叫做 isUpperCase 的 functuon，並且接收一個字串，回傳這個字串的第一個字母是否為大寫

function upperCase(num) {
    var reg = /^[A-Z]+$/;
    var s = ""
    s = num.slice(0, 1) //S=抓字串第一個字
    console.log(s)
    return reg.test(s)
}

console.log(upperCase('Cbcd'))
console.log(upperCase("Abcd"))

