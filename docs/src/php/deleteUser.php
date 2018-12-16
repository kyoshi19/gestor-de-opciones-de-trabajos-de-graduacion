<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "root", "utp_tesis"); //conecxión a mysql

$data = json_decode(file_get_contents("php://input"),true); //Recibe parametros como arreglo asociado

$document = current($data); 	//Optiene elemento actual

$result = $conn->query("DELETE FROM utp_users
WHERE us_doc_num = '$document';");		//ejecucion de query contra la base de datos

$outp ='{"records":['.$result.']}';  	//Convierte despuesta a formato json

$conn->close();

echo($outp);	//Retorna json de respuesta
?>