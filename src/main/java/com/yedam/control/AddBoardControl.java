package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;
import com.yedam.common.Control;
import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;
import com.yedam.vo.BoardVO;

public class AddBoardControl implements Control {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		req.setCharacterEncoding("utf-8");
		
		// key = value 파일
		// cos.jar 활용해서 Multipart 요청을 처리
		// 글을 DB에 등록(insert)

		// 서버상의 upload 폴더에 저장
		String upload = req.getServletContext().getRealPath("upload");
		System.out.println(upload);

		MultipartRequest mr = new MultipartRequest(
				// MultipartRequest 에 필요한 정보
				req, // 1. 요청정보
				upload, // 2. 업로드 경로
				1024 * 1024 * 5, // 3. 업로드 하는 파일의 최대 경로 (1024*1024 -> 1Mb)
				"UTF-8", //4. 인코딩 방식
				new DefaultFileRenamePolicy() // 5. 동일 파일 업로드시 리네임 하는 코드: 리네임 정책
		);

		// addBoard.do?title=~~~&writer=~~~~&content=~~~~
		String title = mr.getParameter("title");
		String writer = mr.getParameter("writer");
		String content = mr.getParameter("content");
		String img = mr.getFilesystemName("images"); // 파일 이름


		BoardVO param = new BoardVO();

		param.setTitle(title);
		param.setContent(content);
		param.setWriter(writer);
		param.setImage(img);

		BoardService svc = new BoardServiceImpl();
		if (svc.registerBoard(param)) {
			resp.sendRedirect("boardList.do");
		}
		else {
			System.out.println("에러발생");
		}

		
		
	}

}
