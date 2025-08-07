package com.yedam.control;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.yedam.common.Control;
import com.yedam.service.EventService;
import com.yedam.service.EventServiceImpl;
import com.yedam.vo.EventVO;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

public class EventControl implements Control {
    @Override
    public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("text/json; charset=utf-8");

        EventVO event = new EventVO();

        EventService svc = new EventServiceImpl();
        List<EventVO> list = svc.eventList(event);

        Gson gson = new GsonBuilder().create();
        String json = gson.toJson(list);

        resp.getWriter().print(json);
    }
}
