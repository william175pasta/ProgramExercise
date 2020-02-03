//請寫一個 function findNthMin，接收一個陣列以及一個數字 n，找出第 n 小的數字。（禁止使用內建函式 sort）
function findNthMin(array, n) {
    for (let i = 0; i < n - 1; i++) {
        let min = Math.min(...array)  //返回傳遞給它的最小值的數字
        let deleteIndex = array.findIndex((e) => {   //返回傳遞給它的最小值的數字的索引
            return e === min
        })
        array.splice(deleteIndex, 1) //將他刪除
    }
    return Math.min(...array)
}
console.log(findNthMin([27, 77, 177, 108, 280, 66, 95], 5))

findNthMin([27, 77, 177, 108, 280, 66, 95], 3)
// findNthMin(\[1, 2, 3, 4, 5\], 1) 預期回傳值：1
// findNthMin(\[1, 3, 5, 7, 9\], 3) 預期回傳值：5  
// findNthMin(\[1, 1, 1, 1, 1\], 2) 預期回傳值：1