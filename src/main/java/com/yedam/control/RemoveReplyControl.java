package com.yedam.control;

import com.yedam.service.ReplyService;
import com.yedam.service.ReplyServiceImpl;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class RemoveReplyControl implements com.yedam.common.Control {
    @Override
    public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 댓글 번호 -> DB 삭제 -> 처리 결과 반환
        String rno = req.getParameter("rno");

        // 서비스 호출
        ReplyService svc = new ReplyServiceImpl();
        if (svc.removeReply(Integer.parseInt(rno))) {
            // 삭제 성공
            // {"retCode": "OK"}
            resp.getWriter().print("{\"retCode\":\"OK\"}");
        }
        else {
            // 삭제 실패
            // {"retCode": "NG"}
            resp.getWriter().print("{\"retCode\":\"NG\"}");
        }
    }
}
