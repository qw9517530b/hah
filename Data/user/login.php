<?php
$n = $_REQUEST["uname"];
$p = $_REQUEST["upass"];
Require("../init.php");
    if($n!=null&&$p!=null){
        $sql = "select * from in_users where uname='$n' and upass='$p' ";
        $result = mysqli_query($conn,$sql);
        $row = mysqli_fetch_row($result);
        if($row==null){
            echo "0";
        }else{
            echo "1";
			//            session_start();
//            $_SESSION["uid"]=$row[0];
        }
}
?>