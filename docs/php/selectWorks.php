<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "root", "utp_tesis");
$conn->set_charset("utf8");
$data = json_decode(file_get_contents("php://input"),true); //Recibe parametros como arreglo asociado

$condition = array(" WHERE ", " AND ", " AND ");
$item = 0;

reset($data);
$work_type = current($data); 	//Optiene elemento actual
$faculty = next($data);		//Optiene Siguiente elemento
$reg_center = next($data);
$w_title = next($data);

$query = "SELECT work_code as 'id', work_type as 'type',
  w_title as 'title', work_desc as descrip, CONCAT(t2.us_fname,' ',t2.us_lname)  as 'proponent', faculty,
  reg_center as 'center', studentsQty as 'students', t2.us_mail as 'contact'
  FROM graduation_works as t1
INNER JOIN utp_users as t2 ON t1.proponent = t2.us_doc_num";

if ($work_type !== "0"){
  $query .=$condition[$item]."work_type='".$work_type."'";
  $item = $item + 1;
}
if ($faculty !== "0"){
  $query .=$condition[$item]."faculty='".$faculty."'";
  $item = $item + 1;
}
if ($reg_center !== "0"){
  $query .=$condition[$item]."reg_center = '".$reg_center."'";
  $item = $item + 1;

}

if (strlen($w_title) > 0) {
  $query .= $condition[$item]. "w_title like('%".$w_title."%')";
}
$query .= " ORDER BY t1.work_code DESC;";

// echo $query; //PARA VERIFICAR QUERY

if(!$conn->query($query)){
  $result = "Falló CALL: (" . $conn->errno . ") " . $conn->error;
  $outp = '{"error":"'.$result.'"}';
}else{
  $result = $conn->query($query);
  $outp = "";

  while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"id":"'  . $rs["id"] . '",';
    $outp .= '"type":"'   . $rs["type"] . '",';
    $outp .= '"title":"'. $rs["title"] . '",';
    $outp .= '"description":"'. $rs["descrip"] . '",';
    $outp .= '"proponent":"'. $rs["proponent"] . '",';
    $outp .= '"contact":"'. $rs["contact"] . '",';
    $outp .= '"faculty":"'. $rs["faculty"] . '",';
    $outp .= '"center":"'. $rs["center"] . '",';
    $outp .= '"students":"'. $rs["students"] . '",';

    $outp .= '"profiles":[';

    $query = "SELECT faculty, career FROM profiles WHERE work_code = ".$rs["id"].";";
    $profiles = $conn->query($query);
    $outp2 = "";
    
    while($res = $profiles->fetch_array(MYSQLI_ASSOC)) {
      if ($outp2 != "") {$outp2 .= ",";}
      $outp2 .= '{"faculty":"'. $res["faculty"] . '",';
      $outp2 .= '"career":"'. $res["career"] . '"}';
    }

    $outp .= $outp2 . ']}';

  }
  $outp ='{"records":['.$outp.']}';
}
$conn->close();

echo $outp;
?>
