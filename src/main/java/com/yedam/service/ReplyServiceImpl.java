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
    public List<ReplyVO> replyList(int boardNo, int page) {
        return mapper.selectReply(boardNo, page);
    }

    @Override
    public boolean removeReply(int replyNo) {
        int r = mapper.deleteReply(replyNo);

        if (r > 0) {
           sqlSession.commit();
           return true;
        }
        return false;
    }

    @Override
    public boolean addReply(ReplyVO reply) {
        int r = mapper.insertReply(reply);
        if (r > 0) {
            sqlSession.commit();
            return true;
        }
        return false;
    }
}
