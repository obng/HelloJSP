/*
    forEach, map, filter, reduce 문
 */

let sum = 0;



let evenSum = (elem, idx, ary) => {
    if (elem % 2 == 0) {
        sum += elem;
    }
    if (idx == ary.length - 1) {
        console.log(`짝수 합: ${sum}`);
    }
}

let oddSum = (elem, idx, ary) => {
    if (idx % 2 == 0) {
        sum += elem;
    }
    if (idx == ary.length - 1) {
        console.log(`홀수 합: ${sum}`);
    }
}

let totalSum = (elem, idx, ary) => {
    sum += elem;
    if (idx == ary.length - 1) {
        console.log(`합: ${sum}`);
    }
}

[12, 34, 83, 22, 59, 77].forEach(evenSum);