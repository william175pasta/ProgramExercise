//請寫出一個 function flatten，接收一個多維陣列並回傳「壓平」後的陣列。
function flatten(array) {
    const newArray = [].concat.apply([], array)
    console.log(newArray)
}

function flatten2(arr) {
    return arr.toString().split(",")
};

flatten([1, 2, [1, 2], [1, 3], 6])
// flatten([1, 2, 3]) 預期回傳值：[1, 2, 3]  
// flatten([1, 2, [1, 2], [1, 3], 6]) 預期回傳值：[1, 2, 1, 2, 1, 3, 6]  
// flatten([1, [2, [3, [4]], 5], 6]) 預期回傳值：[1, 2, 3, 4, 5, 6]
console.log(flatten2([1, 2, [1, 2], [1, 3], 6]))