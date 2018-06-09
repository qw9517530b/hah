<?php
require("../init.php");
$sql = "SELECT title,img,href FROM in_about";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_all($result,1);
echo json_encode($row);
?>