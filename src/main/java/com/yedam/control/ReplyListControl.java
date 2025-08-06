package com.yedam.control;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.yedam.mapper.ReplyMapper;
import com.yedam.service.ReplyService;
import com.yedam.service.ReplyServiceImpl;
import com.yedam.vo.ReplyVO;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

public class ReplyListControl implements com.yedam.common.Control {
    @Override
    public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 댓글 목록 (json)
        resp.setContentType("text/json; charset=utf-8");

        String bno = req.getParameter("bno");
        String page = req.getParameter("page");

        ReplyService svc = new ReplyServiceImpl();
        List<ReplyVO> list = svc.replyList(Integer.parseInt(bno), Integer.parseInt(page));

        // Gson 라이브러리 활용해서 json 문자열
        Gson gson = new GsonBuilder().create();
        String json = gson.toJson(list);

        // 출력 스트림
        resp.getWriter().print(json);
    }
}
