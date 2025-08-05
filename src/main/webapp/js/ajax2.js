/*
    JSON.parsr(json 문자열)
 */

fetch('js/MOCK_DATA.json') // promise 객체
    .then(function(result) {
        console.log(result); // 응답 정보(body)
        return result.json(); // promise 객체
    }) // 1. 정상 작동 시 then 부분 실행
    .then(function (result) {
        console.log(result);
        result.forEach(elem => { // 데이터 한건 한건에 대한 forEach
            let tr = document.createElement('tr');
            ['id', 'first_name', 'last_name', 'salary'].forEach(field => { // td를 만들기 위한 forEach
                let td = document.createElement('td');
                td.innerText = elem[field];
                tr.appendChild(td);
            })
            // 삭제 버튼
            let td = document.createElement('td');
            let btn = document.createElement('button');
            btn.innerText = 'delete';
            td.appendChild(btn);
            tr.appendChild(td);

            document.querySelector('#show tbody').appendChild(tr);
        })
    })
    .catch(function (err) {
        console.log(err)
    }) // 2. 오류 발생시 catch 부분 실행