// 1. substring
// string 객체의 시작 인덱스로 부터 종료 인덱스 전 까지 문자열의 부분 문자열을 반환
let world = "Hello World";

// (시작 인덱스, 끝 인덱스)
console.log(world.substring(0, 4));
// (시작 인덱스) -> 끝까지 출력
console.log(world.substring(6));

// 2. slice
// 어떤 배열의 begin 부터 end 까지(end 미포함)에 대한 얕은 복사본을
// 새로운 배열 객체로 반환

let animals = ['강아지', '고양이', '말', '토끼', '소'];

let num2 = animals.slice(-2);
console.log(num2);

// 3. split
// String 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눔
// (" "): 공백을 기준으로 나눔
// (""): 모든 단어를 나눔
// (): 나누지 않고 한 덩어리로 봄

let ln = "hello my name is java";

let a = ln.split();
console.log(a);

// 4. toUpperCase: 모두 대문자로 변환
// 5. toLowerCase: 모두 소문자로 변환
// 6. trim: 양 끝의 공백을 제거
// 7. replace: (대체하고 싶은 문자, 대체할 문자)

