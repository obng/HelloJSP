package com.yedam.service;

import com.yedam.common.DBUtil;
import com.yedam.mapper.MemberMapper;
import com.yedam.vo.MemberVO;
import org.apache.ibatis.session.SqlSession;

public class MemberServiceImpl implements MemberService {

    SqlSession sqlSession = DBUtil.getInstance().openSession();
    MemberMapper mapper = sqlSession.getMapper(MemberMapper.class);

    @Override
    public boolean addMember(MemberVO member) {
        int r = mapper.insertMember(member);
        if (r > 0 ) {
            sqlSession.commit();
            return true;
        }
        return false;
    }

    @Override
    public MemberVO userCkeck(String id, String pw) {
        return mapper.selectMember(id, pw);
    }
}
