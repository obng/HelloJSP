package com.yedam.vo;

import lombok.Data;

import java.util.Date;

@Data
public class ReplyVO {
    private int replyNo;
    private int boardNo;
    private String reply;
    private String replyer;
    private Date replyDate;
}
