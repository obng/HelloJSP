/*
    문자열 메소드 (indexof, substring, slice, split, toUpperCase, toLowerCase
                 trim, replace, includes, charAt)
 */

// indexOf - 찾고자 하는 문자를 찾아줌 -> 없으면  - 1값을 반환
let idx = "Hello, world".indexOf('W');
console.log(idx);
idx = "Hello World".indexOf('Nice');
if (idx == -1) {
    console.log("찾는 문자열이 없습니다.")
}

const names = ['홍길동', '김자바', '고길동', '박봉근', '박김동'];

function getKildong() {
    let cnt = 0;
    names.forEach((elem) => {
        if (elem.indexOf('김') == 1) {
            console.log(elem);
            cnt++;
        }
    })
    console.log(`${cnt}명`)
}
getKildong();


const obj = {
    name: '박봉근', // obj.name
    age: 20,
    info: function () {
        return `이름은 ${this.name}, 나이는 ${this.age}`;
    }
}

// 배열(문자) 메소드 정의 활용
Array.prototype.sum = function (num1) {
    this.push(num1);
}

const numbers = [1, 20];
numbers.push(3);
numbers.sum(4);

console.log(numbers);