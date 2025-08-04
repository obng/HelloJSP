package com.yedam.control;

import com.yedam.service.MemberService;
import com.yedam.service.MemberServiceImpl;
import com.yedam.vo.MemberVO;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class SignUpControl implements com.yedam.common.Control {
    @Override
    public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // param: id, psw, name
        // 회원정보 등록 -> 게시글 목록 페이지
        req.setCharacterEncoding("utf-8");
        
        String id = req.getParameter("id");
        String psw = req.getParameter("psw");
        String name = req.getParameter("name");

        MemberVO param = new MemberVO();
        param.setMemberId(id);
        param.setMemberPw(psw);
        param.setMemberName(name);

        MemberService svc = new MemberServiceImpl();
        if (svc.addMember(param)) {
            resp.sendRedirect("boardList.do");
        }
        else {
            System.out.println("에러 발생");
        }
        
    }
}
