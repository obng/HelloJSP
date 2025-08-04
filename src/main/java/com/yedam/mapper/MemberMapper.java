package com.yedam.mapper;

import com.yedam.vo.MemberVO;
import org.apache.ibatis.annotations.Param;

public interface MemberMapper {
    public int insertMember(MemberVO member); // 회원 가입 -> 회원 등록
    public MemberVO selectMember(@Param("id") String id, @Param("pw") String pw); // 로그인 -> 회원 조회
}
