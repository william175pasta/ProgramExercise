//輸入一個分數 ,顯示90以上A, 80以上B, 70以上C, 60以上D
let number = +prompt("輸入你的成績分數: ")

switch (true) {

    case number >= 90:
        alert("A");
        break;
    case number < 90 && number >= 80:
        alert('B');
        break;
    case number < 80 && number >= 70:
        alert('C');
        break;
    case number < 70 && number >= 60:
        alert('D');
        break;
    default:
        alert('不及格...')
}
