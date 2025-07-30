<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>  
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<jsp:forward page="boardList.do" />


	<h3>Hello, JSP</h3>
	<c:set var="name" value="홍길동" />
	<c:out value="${name}" />
	<!-- null, "" -->
	<!-- not -> ! -->
	<c:choose>
		<c:when test="${!empty name }">
			<p>정답</p>
		</c:when>
		<c:otherwise>
			<p>오답</p>
		</c:otherwise>
	</c:choose>
	
	<c:set var="age" value="25" />
	
	<c:if test="${age >= 20}">
		<p>너는 이제 어른이다</p>
	</c:if>
	
	<c:choose>
	<c:when test="${age >= 30}">
			<p style="color: red">너는 이제 어른이다</p>
		</c:when>
		<c:when test="${age >= 20}">
			<p style="color: red">너는 아직 학생이다</p>
		</c:when>
		<c:otherwise>
			<p style="color: blue">너는 아직 아기이다</p>
		</c:otherwise>
	</c:choose>
	
	<c:forEach var="i" begin="1" end="5" step="2">
	  	<p> 2* ${i} = ${2*i} </p>
	</c:forEach>
</body>
</html>