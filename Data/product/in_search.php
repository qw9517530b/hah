<?php
require("../init.php");
@$lid = $_REQUEST["lid"];
$output=[
    "product"=>[],
    "pic"=>[],
    "specs"=>[],   
];
if($lid!=null){
    $sql = "SELECT * FROM `in_laptop` WHERE lid=$lid";
    $result = mysqli_query($conn,$sql);
    $output["product"] = mysqli_fetch_all($result,1)[0];
    $sql = "SELECT * FROM `in_laptop_pic` WHERE lid=$lid";
    $result = mysqli_query($conn,$sql);
    $output["pic"] = mysqli_fetch_all($result,1);
    $fid = $output["product"]["family_id"];
    $sql = "SELECT lid,spec FROM `in_laptop` WHERE family_id=$fid";
    $result = mysqli_query($conn,$sql);
    $output["specs"]=mysqli_fetch_all($result,1);
}
echo json_encode($output);

// $sql = "SELECT count(lid) FROM in_laptop WHERE";
// $sql .= "title like '%$key%'";
// $result = mysqli_query($conn,$sql);
// if(mysqli_error($conn)){
//     echo mysqli_error($conn);
// }
// $row = mysqli_fetch_row($result);

// $pageCount = ceil($row[0]/$pageSize); //总页数
// $offset = ($pno-1)*$pageSize; //当前位置



?>