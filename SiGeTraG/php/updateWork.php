<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "root", "utp_tesis"); //conecxión a mysql
$conn->set_charset("utf8");
$data = json_decode(file_get_contents("php://input"), true); //Recibe parametro

reset($data);
$work_title = current($data);
$work_type = next($data);
$work_students = next($data);
$work_code = next($data);

$sql = "UPDATE utp_tesis.graduation_works
SET work_type = '".$work_type."',
w_title = '".$work_title."',
studentsQty = ".$work_students."
WHERE  work_code = '".$work_code."';";

if (!$conn->query($sql)){ //ejecucion de query contra la base de datos
  $result = "Falló CALL: (" . $conn->errno . ") " . $conn->error;
  $outp = '{"error":"'.$result.'"}';
}else{
  $result = $conn->affected_rows;
  $outp ='{"records":['.$result.']}';  	//Convierte despuesta a formato json
}



$conn->close();

echo($outp);	//Retorna json de respuesta
?>
