//請寫出一個 function makeStars，接收一個參數 n，並且根據規律「回傳」字串

function makeStars(n) {
    let star = "";
    let starArray = []
    for (let i = 0; i < n; i++) {
        star = star + "*"
        starArray.push(star)
    }

    return starArray.join("\\n")
}

console.log(makeStars(7))
// makeStars(1) 正確回傳值：*
// makeStars(2) 正確回傳值：*\n**  
// makeStars(5) 正確回傳值：*\n**\n***\n****\n*****

