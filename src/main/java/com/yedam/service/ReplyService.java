package com.yedam.service;

import com.yedam.vo.ReplyVO;

import java.util.List;

public interface ReplyService {
    List<ReplyVO> replyList(int boardNo, int page);
    boolean removeReply(int replyNo);
    boolean addReply(ReplyVO reply);
    int replyCount(int boardNo); // 댓글 건수 확인

}
