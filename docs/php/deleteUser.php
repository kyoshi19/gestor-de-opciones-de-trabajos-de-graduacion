<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "root", "utp_tesis"); //conecxión a mysql

$data = file_get_contents("php://input"); //Recibe parametro

$result = $conn->query("DELETE FROM utp_users
WHERE us_doc_num = '$data';");		//ejecucion de query contra la base de datos

$outp ='{"records":['.$result.']}';  	//Convierte despuesta a formato json

$conn->close();

echo($outp);	//Retorna json de respuesta
?>
