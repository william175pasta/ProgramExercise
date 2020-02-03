//請寫出一個 function stars，接收一個參數 n，並且按照規律印出相對應的圖案

function stars(number) {
    var start = "";
    for (var i = 0; i < number; i++) {

        start = start + "*";
        console.log(start)
    }

}
stars(10)
// stars(1) 預期輸出：
// *  
// stars(3) 預期輸出：  
// *  
// **  
// ***