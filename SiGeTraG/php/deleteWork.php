<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "root", "utp_tesis"); //conecxión a mysql

$data = file_get_contents("php://input"); //Recibe parametro

$query = "DELETE FROM graduation_works WHERE work_code = '$data';";

if ($conn->query($query)==true){
  $result = $conn->affected_rows;
}	//ejecucion de query contra la base de datos

$outp ='{"result":'.$result.'}';  	//Convierte despuesta a formato json

$conn->close();

echo($outp);	//Retorna json de respuesta
?>
