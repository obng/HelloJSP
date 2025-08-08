package com.yedam.service;

import com.yedam.common.DBUtil;
import com.yedam.mapper.EventMapper;
import com.yedam.vo.EventVO;
import org.apache.ibatis.session.SqlSession;

import java.util.List;

public class EventServiceImpl implements EventService {

    SqlSession sqlSession = DBUtil.getInstance().openSession();
    EventMapper mapper = sqlSession.getMapper(EventMapper.class);

    @Override
    public List<EventVO> eventList(EventVO event) {
        return mapper.selectEvent(event);
    }

    @Override
    public boolean addEvent(EventVO event) {
        int r = mapper.insertEvent(event);
        if (r > 0) {
            sqlSession.commit();
            return true;
        }
        return false;
    }
}
