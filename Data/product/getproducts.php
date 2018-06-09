<?php
require("../init.php");
$output=[
    "count"=>0,
    "pageSize"=>9,
    "pageCount"=>0,
    "pageNo"=>0,
    "products"=>[]
];
@$kw = $_REQUEST["kw"];
@$pno = $_REQUEST["pno"];
if($kw!=null&&$pno!=null){
    $kws = explode(" ",$kw);
    for($i=0;$i<count($kws);$i++){
        $kws[$i] = "title like '%".$kws[$i]."%'";
    }
    $where = implode(" and ",$kws);
    $sql = "SELECT * FROM in_laptop WHERE $where";
    $result = mysqli_query($conn,$sql);
    $count=count(mysqli_fetch_all($result,1));
    $output["count"] = $count;
    $pageCount = ceil($count/$output["pageSize"]);
    $output["pageCount"] = $pageCount;
    $sql = "SELECT *,(SELECT md FROM  in_laptop_pic WHERE 
    lid=lid LIMIT 1) as md  FROM in_laptop WHERE $where";
    $output["pageNo"]=$pno;
    $sql.=
    " limit ".$pno*$output["pageSize"].",".$output["pageSize"]; 
    $result = mysqli_query($conn,$sql);
    $output["products"] = mysqli_fetch_all($result,1);
}
echo json_encode($output);
?>