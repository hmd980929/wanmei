<?php
    header("Content-type:text/html;charset=utf-8");
    // 统一返回格式
    $responseData = array("code" => 0, "message" => "");
    // 取出传过来的数据
    $username = $_POST["username"];
    $password = $_POST["password"];

    // 简单的验证
    if(!$username){
        $responseData["code"] = 1;
        $responseData["message"] = "用户名不能为空";
        echo json_encode($responseData);
        exit;
    }
    if(!$password){
        $responseData["code"] = 2;
        $responseData["message"] = "密码不能为空";
        echo json_encode($responseData);
        exit;
    }

    // 连接数据库
    $link = mysql_connect("localhost", "root", "123456");

    // 判断是否连接成功
    if(!$link){
        $responseData["code"] = 3;
		$responseData["message"] = "数据库连接失败";
		echo json_encode($responseData);
		exit; //终止后续所有的代码
    }
    
    // 设置字符集
    mysql_set_charset("utf8");

    // 选择数据库
    mysql_select_db("wanmei");

    /* // md5加密
    $str = md5($password);

    // 登录
    $sql = "SELECT * FROM users WHERE username='{$username}' AND password='{$str}'"; */

    // 登录
    $sql = "SELECT * FROM users WHERE username='{$username}' AND password='{$password}'";

    $res = mysql_query($sql);

    // 取出第一行数据
    $row = mysql_fetch_assoc($res);
    if(!$row){
        $responseData["code"] = 4;
        $responseData["message"] = "用户名或密码错误";
		echo json_encode($responseData);
    }else{
        $responseData["message"] = "登录成功";
		echo json_encode($responseData);
    }

    mysql_close($link);
?>