//請寫出一個 function winner，接收一個代表圈圈叉叉的陣列，並回傳贏的是 O 還是 X，如果平手或還沒下完，請回傳 draw


function winner(array) {
    for (let i = 0; i < 3; i++) {
        if (array[i][0] === array[i][1] && array[i][1] === array[i][2]) {
            return console.log(array[i][0])
        }
    }
    for (let i = 0; i < 3; i++) {
        if (array[0][i] === array[1][i] && array[1][i] === array[2][i]) {
            return console.log(array[0][i])
        }
    }
    if (array[0][2] === array[1][1] && array[1][1] === array[2][0]) {
        return console.log(array[0][2])
    }
    if (array[0][0] === array[1][1] && array[1][1] === array[2][2]) {
        return console.log(array[0][0])
    }
    return console.log("draw")
}


winner([
    ['O', 'O', 'O'],
    ['O', 'X', 'X'],
    ['X', 'X', 'O']
])

winner([
    ['X', 'O', 'X'],
    ['X', 'X', 'O'],
    ['X', 'O', 'O']
])


winner([
    ['O', 'O', 'X'],
    ['X', 'X', 'O'],
    ['O', 'X', 'O']
]) 