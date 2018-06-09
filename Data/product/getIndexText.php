<?php
require("../init.php");
$sql = "SELECT title,details,href from in_index_prodcut";
$result = mysqli_query($conn,$sql);
if(mysqli_error($conn)){
    echo mysqli_error($conn);
}
$row = mysqli_fetch_all($result,1);
echo json_encode($row);
?>