package com.yedam.service;

import com.yedam.vo.EventVO;

import java.util.List;

public interface EventService {
    List<EventVO> eventList(EventVO event);
    boolean addEvent(EventVO event);
}
