-- 게시글 번호, 제목, 내용, 작성자, 조회수, 생성일자, 변경일자
create table tbl_board (
                           board_no    number, -- 글번호
                           title       varchar2(100) not null, -- 제목
                           content     varchar2(1000) not null, -- 내용
                           writer      varchar2(30) not null, -- 작성자
                           view_cnt    number default 0, -- 조회수
                           creation_date   date default sysdate, -- 데이터 생성 시점
                           last_update_date    date default sysdate -- 수정 시점 저장
);

alter table tbl_board add constraint pk_board primary key(board_no);

create sequence board_seq;

insert into tbl_board (board_no,
                       title,
                       content,
                       writer)
values (board_seq.nextval,
        '게시글 등록',
        '게시글 등록 연습입니다',
        '홍길동');

insert into tbl_board (board_no,
                       title,
                       content,
                       writer)
values (board_seq.nextval,
        '게시글 테스트',
        'HTML, CSS, JavaScript입니다.',
        '김길동');

insert into tbl_board (board_no,
                       title,
                       content,
                       writer)
values (board_seq.nextval,
        '댓글 등록 되나요?',
        '기능을 만들겁니다.',
        '박서방');

select  *
from    tbl_board
order by board_no desc;

commit;



-- 사용자 테이블
create table tbl_member (
                            member_id  varchar2(100) primary key,
                            member_pw  varchar2(100) not null,
                            member_name varchar2(50) not null,
                            responsibility varchar2(10) default 'User' not null
);

insert into tbl_member (member_id,
                        member_pw,
                        member_name)
values ('user01',
        '1111',
        '홍길동');

insert into tbl_member (member_id,
                        member_pw,
                        member_name)
values ('user02',
        '1111',
        '박봉근');

insert into tbl_member (member_id,
                        member_pw,
                        member_name)
values ('user03',
        '1111',
        '김민수');

insert into tbl_member (member_id,
                        member_pw,
                        member_name)
values ('user04',
        '1111',
        '손민수');

insert into tbl_member (member_id,
                        member_pw,
                        member_name)
values ('user05',
        '1111',
        '3강의실');

select  *
from    tbl_member;

select  *
from tbl_board;

update  tbl_board
set  writer = 'user01'
where  board_no <= 20;

update  tbl_board
set  writer = 'user02'
where  board_no > 20
  and  board_no <= 40;

update  tbl_board
set  writer = 'user03'
where  board_no > 40
  and  board_no <= 60;

update  tbl_board
set  writer = 'user04'
where  board_no > 60;

select  m.member_name,
        b.*
from tbl_board b join tbl_member m
                      on b.writer = m.member_id
order by 1;

commit;


