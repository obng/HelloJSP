package com.yedam.service;

import com.yedam.vo.ReplyVO;

import java.util.List;

public interface ReplyService {
    List<ReplyVO> replyList(int boardNo);

}
