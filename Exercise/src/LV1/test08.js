//請寫一個函式 findSmallerTotal，接收一個陣列以及數字 n，回傳陣列裡面所有小於 n 的數的總和

function findSmallerTotal(arry, n) {
    var x = 0;
    var newary = [];
    var sum = 0;
    for (var i = 0; i < arry.length; i++) {
        if (arry[i] < n) {
            sum = sum + arry[i]
        }
    }
    console.log(sum);
}
findSmallerTotal([1, 2, 3], 3) //正確回傳值：3
findSmallerTotal([1, 2, 3], 1) //正確回傳值：0
findSmallerTotal([3, 2, 5, 8, 7], 999) //正確回傳值：25  
findSmallerTotal([3, 2, 5, 8, 7], 0) //正確回傳值：0
