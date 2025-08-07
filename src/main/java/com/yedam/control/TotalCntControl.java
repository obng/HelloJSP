package com.yedam.control;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.yedam.service.ReplyService;
import com.yedam.service.ReplyServiceImpl;
import com.yedam.vo.ReplyVO;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class TotalCntControl implements com.yedam.common.Control {
    @Override
    public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//        String bno = req.getParameter("bno");
//
//        ReplyVO rvo = new ReplyVO();
//        rvo.setBoardNo(Integer.parseInt(bno));
//
//        Map<String, Object> map = new HashMap<String, Object>();
//
//        ReplyService svc = new ReplyServiceImpl();
//        if (svc.replyCount(rvo)) {
//            System.out.println();
//        }



        // 교수님
        String bno = req.getParameter("bno");
        ReplyService svc = new ReplyServiceImpl();
        int cnt = svc.replyCount(Integer.parseInt(bno));
        resp.getWriter().print("{\"totalCnt\": " + cnt + "}");
    }
}
