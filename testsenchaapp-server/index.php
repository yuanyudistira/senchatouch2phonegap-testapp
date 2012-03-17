<?php

//Database connection
$con = mysql_connect("localhost","securesa_sencha1","123456");
if (!$con){
  die('Could not connect: ' . mysql_error());
  }else{
    mysql_select_db("securesa_test1", $con);
}

// securesa_test1,123456Tt

$action = $_GET['do'];

switch($action) {

    case "insert":
        $materialCode=$_POST['MaterialCode'];
        $materialName=$_POST['MaterialName'];
        $materialDescription=$_POST['MaterialDescription'];
    
        $sql="insert into material (MaterialCode,MaterialName,MaterialDescription) values ('$materialCode','$materialName','$materialDescription') ";
        if (!mysql_query($sql))
        {
            die('Error: ' . mysql_error());
        }
        echo json_encode("1 record added");

    break;
    
    case "delete":
        $tobeDeletedID=$_GET['id'];
        $sql = "delete from material where id=$tobeDeletedID";
        $result=mysql_query($sql);
        echo "sudah di hapus material id # $tobeDeletedID";
    break;
    
    case "list":
        //return database
        $sql = "select * from material order by id desc";
        $result = mysql_query($sql);
        
       // $aResult = array();
        while($row = mysql_fetch_assoc($result))
        {
            $aResult[] = $row;
         }
  
        //print_r($aResult);
        if (!empty($aResult)) {
            header('content-type: application/json; charset=utf-8');
            header("access-control-allow-origin: *");
            if(isset($_GET['callback'])) {
                echo $_GET['callback'] . '(' . json_encode($aResult) . ');';
            }else{
                echo json_encode($aResult);
            }
        }else{
            header('content-type: application/json; charset=utf-8');
            header("access-control-allow-origin: *");
            $aResult[0]="Belum ada record";
                echo json_encode($aResult);

        }
    
        
    break;    
    default:
    //return nothing
    break;

}