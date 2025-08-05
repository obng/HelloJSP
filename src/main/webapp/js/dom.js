/*
    <ul id="target">
        <li>apple</li>
        <li>banana</li>
    </ul>
 */

/*
    createElement: 요소 생성
    setAttribute: 속성 추가
    (상위 요소).appendChild(하위 요소): 하위 요소를 상위 요소의 자식 요소로 넣겠다
    innerText: 속성 가운데 값 삽입
 */

let ul = document.createElement('ul');

ul.setAttribute('id', 'tatget');

// li 태그
let li = document.createElement('li');
li.innerText = 'apple';
ul.appendChild(li);

li = document.createElement('li');
li.innerText = 'banana';
ul.appendChild(li);

console.log(ul);

document.querySelector('#show').appendChild(ul);
