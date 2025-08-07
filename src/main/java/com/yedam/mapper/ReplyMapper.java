package com.yedam.mapper;

import com.yedam.vo.ReplyVO;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ReplyMapper {
    List<ReplyVO> selectReply(@Param("boardNo") int boardNo, @Param("page") int page);
    int deleteReply(int replyNo);
    int insertReply(ReplyVO reply);
    int selectCount(int boardNo);
}
