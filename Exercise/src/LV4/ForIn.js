// 建一个 multiplyNumeric(obj) 函数，把 obj 所有的数值属性都乘以 2。
/*
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
multiplyNumeric(menu);
调用函数之后

menu = {
    width: 400,
    height: 600,
    title: "My menu"
};
  */
let obj = {
    width: 200,
    height: 300,
    title: "My menu"
}

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof (obj[key]) == 'number') {
            obj[key] = obj[key] * 2
        }
    }
    console.log(obj)
}
multiplyNumeric(obj)