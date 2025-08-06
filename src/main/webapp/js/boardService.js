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
    }
}