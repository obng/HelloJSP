package com.yedam.vo;

import lombok.Data;

import java.util.Date;

@Data
public class BoardVO {
	private int boardNo; // board_no
	private String title;
	private String content;
	private String writer;
	private int viewCnt;
	private Date creationDate;
	private Date lastUpdateDate;
	private String image;
}
