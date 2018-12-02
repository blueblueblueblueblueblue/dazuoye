<%--
  Created by IntelliJ IDEA.
  User: zong
  Date: 2018/11/8
  Time: 18:58
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%--这个必须得加，不然跳转不了！！！--%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
  <title>Title</title>
</head>
<body>

<form action='<c:url value="/user/doLogin"/>' method="post">
  Username :<input type="text" name="account"><br>
  Password :<input type="password" name="password"><br>
  <input type="submit">
  </form>

  </body>
  </html>
