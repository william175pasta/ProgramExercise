//請寫出一個函式 findSmallCount，接收一個陣列跟一個數字 n，回傳有多少個數小於 n

function findSmallCount(arry, n) {
    var x = 0;
    for (var i = 0; i < arry.length; i++) {

        if (arry[i] < n) {
            x = x + 1;
        }
    }
    console.log(x)
}

findSmallCount([1, 8, 2, 3, 4, 5, 11, 7, 50], 10) //預期回傳值：2 

