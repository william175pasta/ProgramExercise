//請寫出一個函式 findMin，接收一個陣列並回傳陣列中的最小值。（禁止使用內建函式 sort）
function findMin(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
    return array[0]
}
console.log(findMin([1, 6, 0, 33, 44, 88, -10]))


// findMin([1, 2, 5, 6, 99, 4, 5]) 預期回傳值：1  
// findMin([1, 6, 0, 33, 44, 88, -10]) 預期回傳值：-10
