/*
    forEach: document.querySelectorAll() 결과에 사용

    css 선택자: nth-of-type(선택하고자 하는 것의 번호)
    #show tbody tr td:nth-of-type(6)
 */

console.log(members);

// console.log(members[0]);

for (let member of members) {
    // let member = members[0];
    // let id = member.id;
    // let first_name = member.first_name;

    // 객체의 값들을 한번에 할당할 수 있다.
    let {id, first_name, last_name, email} = member;

    console.log(`${id}, ${first_name}, ${last_name}, ${email}`);

    let tr = document.createElement('tr');



    // member.id == member['id']

    // 속성 보기 for-in
    for (let prop in member) {
        console.log(`속성: ${prop}, 값: ${member[prop]}`);

        if (prop == 'gender') {
            if (member[prop] ==  'Female') {
                tr.style.backgroundColor = 'pink';
            }
            else if (member[prop] == 'Male') {
                tr.style.backgroundColor = 'skyblue';
            }
        }

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

    document.querySelector('#show tbody').appendChild(tr);

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

}

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