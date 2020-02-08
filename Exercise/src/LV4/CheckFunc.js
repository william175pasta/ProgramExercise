
let age = prompt('輸入你的年紀..?', "18")

function checkAge(age) {

    if (age >= 18) {
        return true;
    } else {
        return confirm('Do you have permission from your parents?');//返回值 為true or false
    }
}


if (checkAge(age)) {
    alert('Access granted');
} else {
    alert('Access denied');
}

function showMovie(age) {
    if (!checkAge(age)) {
        return;
    }
    alert('Showing you the movie!');
}

//checkAgeTwo and checkAgeThree the same
function checkAgeTwo(age) {
    return (age > 18) ? true : confirm('Did parents allow you?')
}
function checkAgeThree(age) {
    return (age > 18) || confirm('Did parents allow you?')
}