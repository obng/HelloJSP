package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.vo.BoardVO;

public class ModifyBoardControl implements Control {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		req.setCharacterEncoding("utf-8");
		
		String title = req.getParameter("title");
		String content = req.getParameter("content");
		String bno = req.getParameter("bno");
		
		BoardVO param = new BoardVO();
		
		param.setTitle(title);
		param.setContent(content);
//		param.setBoardNo(boardNo);

	}

}
