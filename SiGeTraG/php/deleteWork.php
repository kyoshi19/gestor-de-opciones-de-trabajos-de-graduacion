<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "root", "utp_tesis"); //conecxión a mysql

$data = file_get_contents("php://input"); //Recibe parametro

$query = "DELETE FROM graduation_works WHERE work_code = '$data';";

if (!$conn->query($query)){
  $result = "Falló CALL: (" . $conn->errno . ") " . $conn->error;
  $outp = '{"error":"'.$result.'"}';
}else{
  $result = $conn->affected_rows;
  $outp ='{"records":['.$result.']}';
}

$conn->close();

echo($outp);	//Retorna json de respuesta
?>
