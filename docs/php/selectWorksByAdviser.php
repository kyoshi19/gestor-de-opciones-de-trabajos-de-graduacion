<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "root", "utp_tesis");
$conn->set_charset("utf8");
$data = json_decode(file_get_contents("php://input"),true); //Recibe parametros como arreglo asociado

$condition = array(" WHERE ", " AND ", " AND ");
$item = 0;

reset($data);
$id = current($data); 	//Optiene elemento actual

$query = "SELECT work_code as 'id', work_type as 'type',
  w_title as 'title',CONCAT(t2.us_fname,' ',t2.us_lname)  as 'advisor', faculty,
  reg_center as 'center', studentsQty as 'students'
  FROM utp_tesis.graduation_works as t1
INNER JOIN utp_users as t2 ON t1.advisor = t2.us_doc_num
WHERE t2.us_doc_num = '".$id."'";

//PARA VERIFICAR QUERY
 // echo($query);

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
    $outp .= '"advisor":"'. $rs["advisor"] . '",';
    $outp .= '"faculty":"'. $rs["faculty"] . '",';
    $outp .= '"advisor":"'. $rs["advisor"] . '",';
    $outp .= '"center":"'. $rs["center"] . '",';
    $outp .= '"students":"'. $rs["students"] . '"}';
  }
  $outp ='{"records":['.$outp.']}';
}
$conn->close();

echo($outp);
?>
