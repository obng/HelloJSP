/*
    basic2.js
 */

const fruits = ['apple', 'banana', 'cherry'];

fruits[3] = 'orange';

fruits.push('melon'); // 배열의 맨 뒷쪽에 추가함
fruits.unshift('mango'); // 배열의 맨 앞쪽에 추가함
fruits.pop(); // 배열의 맨 마지막 하나를 삭제 -> melon 삭제
fruits.shift(); // 배열의 맨 앞쪽 하나를 삭제 -> mango 삭제

fruits[0] = 'gogi';

for (let fruit of fruits) {
    console.log(fruit);
}

const members = [{id: 'user01', name: 'bong', point: 100}];
members.push({id: 'user02', name: 'Park', point: 190});
members.push({id: 'user03', name: 'geun', point: 20});

for (let i = 0; i < members.length; i++) {
    if (members[i].point >= 100) {
        console.log(`id: ${members[i].id}, name: ${members[i].name}, point: ${members[i].point}`);
    }
}

// 화면에 배열의 갯수만큼 회원 정보를 출력하는 함수
function showList() {

    // 자바스크립트에서 많이 사용되는 for문 -> forEach: 배열에서만 사용할 수 있는 반복문
    members.forEach((elem, idx, ary) => {
        let str = `<li>아이디: ${elem.id}, 이름: ${elem.name}, 포인트: ${elem.point}</li>`;

        // querySelector: 쿼리 선택자
        document.querySelector("#list").innerHTML += str;
    });
}
showList();

// 이벤트
document.querySelector("#addBtn").addEventListener('click', () => {
    let id = document.querySelector("#mid").value;
    let name = document.querySelector("#mname").value;
    let point = document.querySelector("#point").value;

    if ( id == '' || name == '' || point == '') {
        window.alert("필수값을 작성하세요");
        return;
    }

    document.querySelector("#list").innerHTML = ''; // 초기화

    members.push({id: id, name: name, point: point});
    showList();
    
    // 입력값 초기화
    document.querySelector("#mid").value = '';
    document.querySelector("#mname").value = '';
    document.querySelector("#point").value = '';

})

