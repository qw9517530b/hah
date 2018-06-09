<?php
require("../init.php");
$uname = $_REQUEST["uname"];
if($uname!=""&&$uname!=null){
    $sql = "SELECT uid FROM in_users WHERE uname='$uname'";
    $result=mysqli_query($conn,$sql);
    $row = mysqli_fetch_row($result);
    if($row==null){
        echo '{"code":1,"msg":"当前用户名可以通过"}';
    }else{
        echo '{"code":-1,"msg":"用户名已存在"}';
    }
}


?>