<%--
  Created by IntelliJ IDEA.
  User: admin
  Date: 25. 8. 4.
  Time: 오전 9:12
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>WEB-INF/html/js.jsp</title>
</head>
<body>
    <h3>JS연습</h3>
    <%--  1차 js 연습  --%>
    <div style="display: none;">
        ID: <input type="text" id="mid"> <br>
        NAME: <input type="text" id="mname"> <br>
        Point: <input type="number" id="point"> <br>
        <button id="addBtn">추가</button>
    </div>
    <div style="display: none;">
        <ul id="list"></ul>
    </div>

    <%--  2차 js 연습  --%>
    <div style="display: none;">
        이름: <input type="text" id="std_name"><br>
        영어: <input type="number" id="std_score"><br>
        <button id="addList">추가</button>
    </div>

    <%--  3차 js 연습  --%>
    <div style="display: none;">
        <table border="2">
            <thead>
                <tr>
                    <th>이름</th>
                    <th>점수</th>
                </tr>
            </thead>
            <tbody id="tlist">
                <tr>
                    <th>홍길동</th>
                    <th>90</th>
                </tr>
            </tbody>
        </table>
    </div>

    <div id="show">
        <table border="2">
            <thead>
                <tr>
                    <th>id</th>
                    <th>FName</th>
                    <th>LName</th>
                    <th>Salary</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>
    <div id="item"  style="display: none">
        <table border="2">
            <thead>
            <tr>
                <th>이름</th>
                <th>점수</th>
            </tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>



<%--    <script type="text/javascript" src="js/string2.js"></script>--%>
<%--    <script type="text/javascript" src="js/homework.js"></script>--%>
<%--    <script type="text/javascript" src="js/data.js"></script>--%>
<%--    <script type="text/javascript" src="js/array3.js"></script>--%>
<%--    <script type="text/javascript" src="js/object.js"></script>--%>
<%--    <script type="text/javascript" src="js/dom.js"></script>--%>
    <script type="text/javascript" src="js/ajax2.js"></script>
</body>
</html>
