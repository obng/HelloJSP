package com.yedam.control;

import com.yedam.common.Control;
import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;
import com.yedam.vo.BoardVO;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class BoardControl implements Control {
    
    @Override
    public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        
    	String bno = req.getParameter("bno");
		String page = req.getParameter("page");
    	
    	BoardService svc = new BoardServiceImpl();
    	BoardVO board = svc.searchBoard(Integer.parseInt(bno));
    	
    	req.setAttribute("board_info", board);
		req.setAttribute("page", page);
        
    	// 요청 재지정
		req.getRequestDispatcher("user/board.tiles").forward(req, resp);
    }
     
}
