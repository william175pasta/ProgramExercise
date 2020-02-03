//請寫一個 function sum，接收一個陣列並回傳陣列中數字的總和
function sum(arry) {
    var numberSum = 0;
    for (var i = 0; i < arry.length; i++) {
        numberSum = numberSum + arry[i]
    }
    console.log(numberSum);
    return numberSum;
}
sum([1, 2, 3]) //預期回傳值：6  
sum([-1, 1, 2, -2, 3, -3]) //預期回傳值：0

