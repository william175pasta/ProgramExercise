//請寫一個函式 findAllSmall，接收一個陣列跟一個數字 n，回傳一個裡面有所有小於 n 的數的陣列（需按照原陣列順序）

function findAllSmall(arry, n) {
    var newary = [];
    for (var i = 0; i < arry.length; i++) {
        if (arry[i] < n) {
            newary.push(arry[i])
        }
    }
    console.log(newary);
}
findAllSmall([1, 2, 3], 10) //正確回傳值：[1, 2, 3]
findAllSmall([1, 2, 3], 2) //正確回傳值：[1]
findAllSmall([1, 3, 5, 4, 2], 4) //正確回傳值：[1, 3, 2]
