/*
    filter 배열 메소드
    요소의 값 -> true 일때 그 요소를 새로운 배열에 생성

    mapping: 데이터의 모양이 변경되는 것
 */

function makeRow(member) {
    let tr = document.createElement('tr');
    // 속성 보기 for-in
    for (let prop in member) {
        let td = document.createElement('td');
        td.innerText = member[prop];
        tr.appendChild(td);
    }
    // 삭제 버튼
    let td = document.createElement('td');
    let btn = document.createElement('button');
    btn.innerText = 'delete';
    td.appendChild(btn);
    tr.appendChild(td);

    // 이벤트 & 이벤트 핸들러
    btn.addEventListener('click', (e) => {
        console.dir(e.target.parentElement.parentElement);
        let parent = e.target.parentElement.parentElement
        console.log(parent.children);

        let fn = parent.children[1].innerText;
        let ln = parent.children[2].innerText;

        if (confirm(`${fn} ${ln} 정보를 삭제하시겠습니까?`)) {
            e.target.parentElement.parentElement.remove();
        }
    })
    document.querySelector('#show tbody').appendChild(tr);

    return tr;
}
// 급여가 7000 이상인 사람들을 목록
/*
members.filter(elem => {
    if (elem.salary >= 7000) {
        return true;
    }
}).forEach(elem => {
    let tr = makeRow(elem);
    document.querySelector('#show tbody').appendChild(tr);
})

*/

// 위에 함수랑 같은 것
// obj = {id: 1, first_name: 'bong', ... }
members.filter(elem => elem.salary >= 7000)
       .filter(elem => elem.gender == 'Female')
       .map(elem => {
           let {id, first_name, last_name, salary} = elem;
           let obj = {id, first_name, last_name, salary}; // 이 코드를 이해하는 것이 중요함!!
           return obj
       })
       .forEach(elem =>
    document.querySelector('#show tbody').appendChild(makeRow(elem)));

// -------------------------------------------------------------------------
let sum = 0;
// #show tbody tr td:nth-of-type(6) 사용했을 때
document.querySelectorAll('#show tbody tr td:nth-of-type(6)')
    .forEach(elem => sum += parseInt(elem.innerText));
console.log(`합계는 ${sum}`);

// children 이욜했을 때
document.querySelectorAll('#show tbody tr')
    .forEach(elem => {
        let salary = elem.children[5].innerText;
        sum += parseInt(salary);
    });
console.log(`합계는 ${sum}`);


let result = [10, 20, 30, 40, 50].filter((elem, idx, ary) => {
    if (elem >= 30) {
        return true;
    }
});

console.log(result)