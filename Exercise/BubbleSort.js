// --氣泡排序法-- 陣列數值 由大排至小
var array = [1, 65, 8, 7, 44, 88, 54, 23, 26, 91, 84];

function BubbleSort(ary) {
    for (var i = 0; i < ary.length; i++) {
        for (var j = 0; j < ary.length - i - 1; j++) {
            if (ary[j] < ary[j + 1]) {
                var temp = ary[j];
                ary[j] = ary[j + 1];
                ary[j + 1] = temp;
            }
        }
    }
    return ary
}
BubbleSort(array)
console.log(array)



//數字陣列.sort(compare function 函數)
var InStock = [18, 3, 5, 53, 12, 53, 47];
InStock.sort(function (a, b) {
    return a - b //由小到大
});
console.log(InStock)

var InStock2 = [22, 3, 5, 33, 12, 44, 47];
InStock2.sort(function (a, b) {
    return b - a //由大至小
});
console.log(InStock2)