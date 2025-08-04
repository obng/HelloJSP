/*
    function.js
*/

// 함수 선언식
function sum(num1, num2) {
    let result = num1 + num2;
    return result;
}

// 화살표 함수


let sum = function (num1, num2) {
    let result = num1 + num2;
    return result;
}

let sum = (num1, num2) => num1 + num2;

sum(10, 20);


// 함수 표현식
let showInfo = function (result) {
    console.log(result);
}

let showInfo = (result) => console.log(result);

showInfo('Hello World');