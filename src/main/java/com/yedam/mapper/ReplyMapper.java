package com.yedam.mapper;

import com.yedam.vo.ReplyVO;

import java.util.List;

public interface ReplyMapper {
    List<ReplyVO> selectReply(int boardNo);
}
