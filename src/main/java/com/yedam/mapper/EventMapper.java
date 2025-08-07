package com.yedam.mapper;

import com.yedam.vo.EventVO;

import java.util.List;

public interface EventMapper {
    // 일정- 목록, 추가, 삭제
    List<EventVO> selectEvent(EventVO event);

}
