let studentAry = [
    {name: "박봉근", score: 100},
    {name: "홍길동", score: 85},
    {name: "추진수", score: 88},
    {name: "김길동", score: 76}
]

let result2 = studentAry.reduce((acc, elem) => {
    let tr = document.createElement('tr');

    for (let prop in elem) {
        let td = document.createElement('td');
        tr.appendChild(td);
    }
    acc.appendChild(tr);
    return acc;

}, document.querySelector('#item tbody'))

let newAry = studentAry.reduce((acc, elem) => {
    console.log('acc: ', acc, 'elem: ', elem);
    if (acc.score < elem.score) {
        acc = elem;
    }
    return acc;
}, studentAry[0]);
console.log(newAry)

let numAry = [10, 15, 34, 20, 77, 25, 30];

let result = numAry.reduce((acc, elem, idx, ary) => {
    console.log(`${acc}, ${elem}`);

    if (elem % 2 == 0) {
        acc.push(elem);
    }
    return acc;
}, []);

console.log(result)