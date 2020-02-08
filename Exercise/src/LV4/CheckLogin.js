/*
CheckLogin:
登入 useName 為Bill 密碼為: ABC123
請輸入useName  及password密碼
輸入 "" 或 點取消 則 印 "Canceled-取消"
輸入有誤 則 印 "Error-錯誤" 

*/
let useName = prompt("Enter useName !", "")

if (useName == "Bill") {
    let password = prompt("Enter password!", "")
    if (password == "ABC123") {
        alert("SignSuceesfully,Welcome!");
    } else if (password == "" || password == null) {
        alert("Canceled-取消");
    } else {
        alert("PassWordError-錯誤.");
    }
} else if (useName == "" || useName == null) {
    alert("Canceled-取消.");
} else {
    alert("UseNameError-錯誤.");
}