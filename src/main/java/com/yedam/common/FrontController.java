package com.yedam.common;

import com.yedam.control.AddBoardControl;
import com.yedam.control.BoardControl;
import com.yedam.control.BoardListControl;
import com.yedam.control.ModifyBoardControl;
import com.yedam.control.ModifyFormControl;
import com.yedam.control.RegisterControl;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

// init - service -detroy
// *.do -> 실행할 컨트롤
// 요청 url -> 실행할 컨트롤


public class FrontController extends HttpServlet{

	Map<String, Control> map;
	
	public FrontController() {
		map = new HashMap<String, Control>();
	}
	
	@Override
	public void init(ServletConfig config) throws ServletException {
		map.put("/boardList.do", new BoardListControl()); // 글목록
		map.put("/board.do", new BoardControl()); // 상세화면
		map.put("/register.do", new RegisterControl()); // 등록화면
		map.put("/addBoard.do", new AddBoardControl()); // 등록처리
		map.put("/modifyForm.do", new ModifyFormControl());
		map.put("/modifyBoard.do", new ModifyBoardControl());
	}
	
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// url vs uri
		// url: http://localhost:8080/HelloJSP/boardList.do
		// uri: /HelloJSP/boardList.do

		String uri = req.getRequestURI();
		String context = req.getContextPath();
		String page = uri.substring(context.length());

		Control control = map.get(page);
		control.execute(req, resp);
	}

}
