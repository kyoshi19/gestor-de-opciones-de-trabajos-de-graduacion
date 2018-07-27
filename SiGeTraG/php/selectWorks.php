<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "root", "utp_tesis");
$data = json_decode(file_get_contents("php://input"),true); //Recibe parametros como arreglo asociado

$condition = array(" WHERE ", " AND ", " AND ");
$item = 0;

reset($data);
$work_type = current($data); 	//Optiene elemento actual
$faculty = next($data);		//Optiene Siguiente elemento
$reg_center = next($data);
$w_title = next($data);

$query = "SELECT work_code as 'id', work_type as 'type',
  w_title as 'title',CONCAT(t2.us_fname,' ',t2.us_lname)  as 'advisor', faculty,
  reg_center as 'center', studentsQty as 'students'
  FROM utp_tesis.graduation_works as t1
INNER JOIN utp_users as t2 ON t1.advisor = t2.us_doc_num";

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

}
/* PARA VERIFICAR QUERY
 echo($query); */

if (strlen($w_title) > 0) {
  $query .= $condition[$item]. "w_title like('%".$w_title."%');";
} else {
  $query .= ";";
}

$result = $conn->query($query);
$outp = "";

while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
  if ($outp != "") {$outp .= ",";}
  $outp .= '{"id":"'  . $rs["id"] . '",';
  $outp .= '"type":"'   . $rs["type"] . '",';
  $outp .= '"title":"'. $rs["title"] . '",';
  $outp .= '"advisor":"'. $rs["advisor"] . '",';
  $outp .= '"faculty":"'. $rs["faculty"] . '",';
  $outp .= '"advisor":"'. $rs["advisor"] . '",';
  $outp .= '"center":"'. $rs["center"] . '",';
  $outp .= '"students":"'. $rs["students"] . '"}';
}
$outp ='{"records":['.$outp.']}';
$conn->close();

echo($outp);
?>
