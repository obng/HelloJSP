package com.yedam.service;

import com.yedam.common.DBUtil;
import com.yedam.mapper.ReplyMapper;
import com.yedam.vo.ReplyVO;
import org.apache.ibatis.session.SqlSession;

import java.util.List;

public class ReplyServiceImpl implements ReplyService {

    SqlSession sqlSession = DBUtil.getInstance().openSession();
    ReplyMapper mapper = sqlSession.getMapper(ReplyMapper.class);


    @Override
    public List<ReplyVO> replyList(int boardNo) {
        return mapper.selectReply(boardNo);
    }
}
