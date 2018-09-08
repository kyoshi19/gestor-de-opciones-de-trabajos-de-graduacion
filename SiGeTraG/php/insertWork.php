<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "root", "utp_tesis"); //conecxión a mysql
$conn->set_charset("utf8");
$data = json_decode(file_get_contents("php://input"),true); //Recibe parametros como arreglo asociado

reset($data);

$work_title = current($data); //Optiene elemento actual
$work_type = next($data);    //Optiene Siguiente element
$student_count = next($data);
$user_id = next($data);

$sql= "call insertWork('".$user_id."','".$work_title."','".$work_type."',".$student_count.");";

if (!$conn->query($sql)) {
  $result = "Falló CALL: (" . $conn->errno . ") " . $conn->error;
  $outp = '{"error":"'.$result.'"}';
}else{
  $result = $conn->affected_rows;
  $outp ='{"records":['.$result.']}';  	//Convierte despuesta a formato json
}

$conn->close();

echo($outp);	//Retorna json de respuesta
?>
