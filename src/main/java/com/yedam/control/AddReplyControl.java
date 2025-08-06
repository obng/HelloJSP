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
import java.util.Objects;

public class AddReplyControl implements com.yedam.common.Control {
    @Override
    public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // param: bno, reply, replyer
        resp.setContentType("text/json; charset=utf-8");

        String bno = req.getParameter("bno");
        String reply = req.getParameter("reply");
        String replyer = req.getParameter("replyer");

        // addReply(ReplyVO reply)
        ReplyVO rvo = new ReplyVO();
        rvo.setBoardNo(Integer.parseInt(bno));
        rvo.setReply(reply);
        rvo.setReplyer(replyer);
        
        // retCode, bno, reply, replyer :  Map<키, 값>
        Map<String, Object> map = new HashMap<String, Object>();

        ReplyService svc = new ReplyServiceImpl();
        if (svc.addReply(rvo)) {
            map.put("retCode", "OK");
            map.put("retVal", rvo);
            // 삭제 성공
            // {"retCode": "OK"}
            // resp.getWriter().print("{\"retCode\":\"OK\"}");
        }
        else {
            map.put("retCode", "NG");
            // 삭제 실패
            // {"retCode": "NG"}
            // resp.getWriter().print("{\"retCode\":\"NG\"}");
        }
        
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        String json = gson.toJson(map); // 자바객체 -> json문자열
        resp.getWriter().print(json);
    }
}
