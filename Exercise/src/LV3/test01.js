//請寫一個 function sort，接收一個陣列並且回傳由小到大排序後的陣列。（禁止使用內建函式 sort） 
function sort(arry) {
    for (let i = 0; i < arry.length; i++) {
        for (let j = 0; j < arry.length; j++) {
            if (arry[j] > arry[j + 1]) {
                let temp = arry[j];
                arry[j] = arry[j + 1];
                arry[j + 1] = temp;
            }
        }
    }
    return arry
}

console.log(sort([6, 8, 3, 2])) //預期回傳值：[2, 3, 6, 8]  
sort([1, 2, 7, 5]) //預期回傳值：[1, 2, 5, 7]
