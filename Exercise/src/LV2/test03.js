//請寫出一個函式 stars2 ，接收一個參數 n ，並依照規律印出圖形

function stars2(n) {
    let star = "";
    let starArray = [];
    for (let i = 0; i < n; i++) {
        star = star + "*";
        starArray.push(star)
        console.log(starArray)
    }
    for (let i = n - 1; i > 0; i--) {
        starArray.push(starArray[i - 1]);
        console.log(starArray)
    }
    return starArray.join('\n')
}
console.log(stars2(5))
// stars2(1) 預期輸出：
// *  
// stars2(3) 預期輸出：  
// *  
// **  
// ***  
// **  
// *