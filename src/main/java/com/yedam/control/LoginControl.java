package com.yedam.control;

import com.yedam.service.MemberService;
import com.yedam.service.MemberServiceImpl;
import com.yedam.vo.MemberVO;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

public class LoginControl implements com.yedam.common.Control {
    @Override
    public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        // param: uname, psw
        String id = req.getParameter("uname");
        String pw = req.getParameter("psw");

        // DB 처리
        MemberService svc = new MemberServiceImpl();
        MemberVO member = svc.userCkeck(id, pw);
        
        // 세션
        if (member == null) {

        }
        else {
            // 정상 id, pw 입력
            HttpSession session = req.getSession();
            session.setAttribute("logId", id); // 속성 (logId) = 로그인 아이디
            session.setAttribute("auth", member.getResponsibility()); // user admin
            resp.sendRedirect("boardList.do");
        }
    }
}
