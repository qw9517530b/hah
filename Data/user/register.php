<?php
header("Content-Type:application/json;charset=utf-8");
$reg = '/^[a-zA-Z0-9]{3,12}$/';
/***************************用户名*******************************************/
$n =$_REQUEST["uname"];
if($n===""||$n===null){
	die("用户名不能为空");
}
$rs = preg_match($reg,$n);
if(!$rs){
  die('{"code":-1,"msg":"用户名格式不正确"}');
}

/***************************密码*******************************************/

$p =$_REQUEST["upass"];
if($p===""||$p===null){
	die("密码不能为空");
}
$rs = preg_match($reg,$p);
if(!$rs){
  die('{"code":-1,"msg":"密码格式不正确"}');
}

/***************************邮箱*******************************************/
$m =$_REQUEST["email"];
if($m===""||$m===null){
	die("邮箱不能为空");
}
// $reg = '/^[a-zA-Z0-9]{1,15}+@[a-z0-9]{1,5}+(.com)$/';
// $rs = preg_match($reg,$m);
// if(!rs){
// 	die('{"code":-1,"msg":"邮箱格式不正确"}');
// }

/***************************电话号码*******************************************/

$t =$_REQUEST["phone"];
if($t===""||$t===null){
	die("电话号码不能为空");
}
// $reg = '/^1[3-8][0-9]{9}$/';
// $rs=preg_match($reg,$t);
// if(!rs){
// 	die('{"code":-1,"msg":"电话号码格式不正确"}');
// }

$g =$_REQUEST["gender"];

/***************************真实姓名*******************************************/

$u =$_REQUEST["user_name"];
if($u===""||$u===null){
	die("真实姓名不能为空");
}
// $reg = '/^\w{2,5}$/';
// $rs=preg_match($reg,$u);
// if(!rs){
// 	die('{"code":-1,"msg":"名字格式不正确"}');
// }
$conn = mysqli_connect("127.0.0.1","root","","information",3306);

mysqli_query($conn,'SET NAMES UTF8');

$sql="insert into in_users values(null,'$n','$p','$m','$t','$g','$u')";

$result= mysqli_query($conn,$sql);

if($result==false){
   echo '{"code":-1,"msg":"注册失败"}';
}else{
   echo '{"code":1,"msg":"注册成功"}';
}

?>