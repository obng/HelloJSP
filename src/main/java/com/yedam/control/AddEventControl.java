package com.yedam.control;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.yedam.service.EventService;
import com.yedam.service.EventServiceImpl;
import com.yedam.vo.EventVO;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class AddEventControl implements com.yedam.common.Control {
    @Override
    public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("text/json; charset=utf-8");

        String title = req.getParameter("title");
        String start = req.getParameter("start");
        String end = req.getParameter("end");

        EventVO event = new EventVO();
        event.setTitle(title);
        event.setStart(start);
        event.setEnd(end);

        EventService svc = new EventServiceImpl();
        try {
            svc.addEvent(event);
            resp.getWriter().print("{\"retCode\":\"OK\"}");
        }
        catch (Exception e) {
            e.printStackTrace();
        	resp.getWriter().print("{\"retCode\":\"NG\"}");
        }

        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        String json = gson.toJson(event);
        resp.getWriter().print(json);
    }
}
