//請寫一個函式 swap，接收一個字串，並且回傳大小寫互換後的字串

function swap(str) {
    tempArray = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90) {
            tempArray.push(String.fromCharCode((str[i].charCodeAt() + 32)));
        } else if (str[i].charCodeAt() >= 97 && str[i].charCodeAt() <= 122) {
            tempArray.push(String.fromCharCode((str[i].charCodeAt() - 32)));
        } else {
            tempArray.push(str[i]);
        }
    }
    return tempArray.join('');
}
console.log(swap('William'))

// swap("Peter") 預期回傳值：pETER
// swap("AbCdE") 預期回傳值：aBcDe
