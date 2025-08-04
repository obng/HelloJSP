console.log("basic");

let name = "Hong";

name = "bong";

console.log(name);

const age = 20; // const: 상수 -> 변수의 선언을 한번만 할 수 있음

// Object 타입
const obj = {}

const object = new Object();
obj.name = "bong"
obj.age = 30;
obj.info = function () {
    console.log('이름은 ' + obj.name + ', 나이는 ' + obj.age);
}

obj.hobbies = ['독서', '수영', '자전거'];

console.log(obj.age);
console.log(obj['name']);
console.log('첫번째 취미: ' + obj.hobbies[0]);
console.log('두번째 취미: ' + obj['hobbies'][1]);
console.log(`세번째 취미: ${obj['hobbies'][2]}`);

obj.pets = [{name: '야옹이', age: 2}, {name: '멍멍이', age: 4}];
obj.pets[0].name = '고양이';
obj.pets[1].age = 100;

console.log(this);
console.dir(window.document.children[0].children[1].innerHTML);
window.alert('윈도우 객체의 alert 함수');

obj.info();