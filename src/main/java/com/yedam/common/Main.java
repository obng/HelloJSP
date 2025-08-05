package com.yedam.common;

import com.yedam.control.ReplyListControl;
import com.yedam.mapper.ReplyMapper;
import com.yedam.vo.ReplyVO;
import org.apache.ibatis.session.SqlSession;

import java.util.List;

public class Main {
    public static void main(String[] args) {
        SqlSession sqlSession = DBUtil.getInstance().openSession();
        ReplyMapper mapper = sqlSession.getMapper(ReplyMapper.class);

        List<ReplyVO> list = mapper.selectReply(150);
        for (ReplyVO reply : list) {
            System.out.println(reply);
        }
    }
}
