package com.yedam.service;

import com.yedam.vo.EventVO;

import java.util.List;

public interface EventService {
    public List<EventVO> eventList(EventVO event);
}
