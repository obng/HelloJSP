/*
    board.js
    144 댓글 정보 -> json 반환
 */

svc.increaseCount();
console.log(svc.showCount());

let page = 1;

// 페이지 로딩 시점에 실행
function showReplyList() {
    // 기존 목록을 지우고 -> 새로운 목록을 출력해야함
    document.querySelectorAll('div.content>ul>li').forEach((elem, idx) => {
        if (idx >= 2) {
            elem.remove();
        }
    });
    svc.replyList({bno, page}, // 첫 번째 param
        result => {
            result.forEach(reply => {
                // let li = makeRow(reply);
                // document.querySelector('div.content>ul').appendChild(li);

                let taget = document.querySelector('div.content>ul');
                let text = `
                <li>
                    <span class="col-sm-2">${reply.replyNo}</span>
                    <span class="col-sm-5">${reply.reply}</span>
                    <span class="col-sm-2">${reply.replyer}</span>
                    <span class="col-sm-2"><button class="btn btn-danger" onclick="deleteRowFnc(event)">삭제</button></span>
                `;
                taget.insertAdjacentHTML('beforeend', text); // position, text
            })
            // 페이징 목록
            showPagingList();
        }, // 두 번째 param
        err => console.error(err) // 세 번째 param
    );
}
showReplyList();

// 페이징 목록 출력
function showPagingList() {
    svc.replyTotalCount(bno,
        result => {

            let totalCnt = result.totalCnt;
            let paging = new PageVO(page, totalCnt);
            console.log(paging);


            // parent 요소
            let taget = document.querySelector('div.pagination');
            taget.innerHTML = ' '; // 기존 목록 삭제 -> 공백 넣어주기

            //이전 페이지 여부
            if (paging.prev) {
                let atag = document.createElement('a');
                atag.href = paging.start - 1;
                atag.setAttribute('data-page', paging.start - 1);
                atag.innerHTML = '&laquo;';
                taget.appendChild(atag);
            }

            // start ~ end
            for (let p = paging.start; p <= paging.end; p++) {
                let atag = document.createElement('a');
                // atag.setAttribute('href', p); // <a href
                atag.href = p;
                atag.setAttribute('data-page', p);
                atag.innerText = p;

                if (p == paging.currPage) {
                    atag.setAttribute('class', 'active');
                }
                taget.appendChild(atag); // <div class="pafination"></a></div>
            }

            //이후 페이지 여부
            if (paging.next) {
                let atag = document.createElement('a');
                atag.href = paging.end + 1;
                atag.setAttribute('data-page', paging.end + 1);
                atag.innerHTML = '&raquo;';
                taget.appendChild(atag);
            }
            // a 태그에 클릭 이벤트
            addEvent();
        },
        err => console.error(err)
    );
}

// 이벤트 등록
document.querySelector('#addReply').addEventListener('click', (e) => {
    // 게시글번호(bno), 작성자(logId), 댓글(reply)
    let reply = document.querySelector('#reply').value;
    if (!bno || !reply || !logId) { // true/false -> falsy(0, '', null, undefined)
        alert('필수값을 입력');
        return;
    }

    svc.registerReply({bno, reply, replyer: logId},
        result => {
            console.log(result);
            if (result.retCode == 'OK') {
                let r = result.retVal;
                let li = makeRow(r);
                document.querySelector('div.content>ul').appendChild(li);
            }
            else if (result.retCode == "NG") {
                alert("처리중 예외 발생");
            }
            else {
                alert('알 수 없는 코드');
            }
        },
        err => console.error(err)
    )
});

// 페이징 링크에 클릭 이벤트
function addEvent() {
    document.querySelectorAll('div.footer>div.pagination>a').forEach(atag => {
        atag.addEventListener('click', e => {
            e.preventDefault(); //  태그의 기본 기능을 차단
            page = e.target.dataset.page; // data-page = dataset.page
            // 목록 그려주기
            showReplyList();
        })
    })
}

// 댓글 정보를 활용해서 li>span 구조를 만들기
function makeRow(reply) {
    let li = document.createElement('li');
    
    // 화면에 출력할 정보를 배열로 선언
    ['replyNo', 'reply', 'replyer'].forEach(elem => {
        let span = document.createElement('span');
        span.innerText = reply[elem];

        if (elem == 'reply') { // 댓글 내용은 너비를 다르게 설정함
            span.setAttribute('class', 'col-sm-5')
        }
        else { // 나머지는 col-sm-2
            span.setAttribute('class', 'col-sm-2');
        }
        li.appendChild(span);
    })
    let span = document.createElement('span');
    let btn = document.createElement('button');
    // btn.setAttribute('class', 'btn btn-danger');

    // 함수를 '클릭'했을 때만 실행 -> 매개변수 전달 안함 -> 전달이 전제로 되어 있음
    btn.addEventListener('click', deleteRowFnc);

    btn.innerText = '삭제'
    span.appendChild(btn);
    li.appendChild(span);

    return li;
}

// 데이터 삭제 이벤트 핸들러
function deleteRowFnc (e) {
    let rno = e.target.parentElement.parentElement.children[0].innerText;
    console.log(rno);
    rno = e.target.closest('li').firstElementChild.innerText;
    console.log(rno);
    if (!confirm(`${rno}번 글을 삭제하겠습니까?`)) {
        alert('삭제를 취소했습니다.');
        return;
    }

    // fetch: 서버 프로그램 호출
    svc.removeReply(rno,
        result => {
            if (result.retCode == 'OK') {
                // e.target.parentElement.parentElement.remove();
                showReplyList();
            }
            else if (result.retCode == 'NG') {
                alert('삭제 실패');
            }
            else {
                alert('알 수 없는 코드입니다');
            }
        },
        err => console.error(err)
    );
}