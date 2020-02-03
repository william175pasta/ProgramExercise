//https://pvt5r486.github.io/javascript/20190428/910365601/
//請你分別用 for loop 以及 while 迴圈，印出 1 ~ 9

var n = 0;
var x = 0;
function test1() {
    while (x < 9) {
        n++;
        x = n;
        console.log('x : ', x);
    }
}
test1();

function test2() {
    for (var i = 0; i < 10; i++) {
        console.log('i : ', i);
    }
}

test2();

