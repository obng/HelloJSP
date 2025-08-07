class PageVO {
    // 생성자
    constructor(currPage, totalCnt) {
        this.currPage = currPage; // currPage 필드 선언
        this.totalCnt = totalCnt;

        // start, end 계산
        this.end = Math.ceil(currPage / 10) * 10; // 10page
        this.start = this.end - 9;

        let realEnd = Math.ceil(totalCnt / 5); // 3page
        this.end = this.end > realEnd ? realEnd : this.end;

        // prev, next 계산
        this.prev = this.start > 1;
        this.next = this.end < realEnd;
    }
}


const svc = {
    count: 20,
    increaseCount: function() {
        this.count++;
    },
    showCount() {
        return this.count;
    },

    // 목록 ajax 메소드
    replyList(param = {bno: 1, page: 1}, successCallBack, errorCallBack) {
        fetch('replyList.do?bno=' + param.bno + '&page=' + param.page)
            .then(resolve => resolve.json())
            .then(successCallBack)
            .catch(errorCallBack)
    },
    // 삭제
    removeReply(rno, successCallBack, errorCallBack) {
        fetch('removeReply.do?rno=' + rno)
            .then(resolve => resolve.json())
            .then(successCallBack)
            .catch(errorCallBack)
    },

    //등록
    registerReply(param = {bno, reply, replyer}, successCallBack, errorCallBack) {
        fetch('addReply.do?bno=' + param.bno + '&reply=' + param.reply + '&replyer=' + param.replyer)
            .then(resolve => resolve.json())
            .then(successCallBack)
            .catch(errorCallBack)
    },

    // bno에 대한 전체 건수 얻는 ajax 메소드
    replyTotalCount(bno, successCallBack, errorCallBack) {
        fetch('totalReply.do?bno=' + bno)
            .then(resolve => resolve.json())
            .then(successCallBack)
            .catch(errorCallBack)
    },
}