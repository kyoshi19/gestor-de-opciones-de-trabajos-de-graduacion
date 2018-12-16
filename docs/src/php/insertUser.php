<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "root", "utp_tesis"); //conecxión a mysql

$data = json_decode(file_get_contents("php://input"),true); //Recibe parametros como arreglo asociado

reset($data);

$fname = current($data); 	//Optiene elemento actual
$lname = next($data);		//Optiene Siguiente elemento
$document = next($data);
$pass = next($data);

echo "INSERT INTO utp_users (us_fname, us_lname, us_doc_num, us_pass)
VALUES('$fname', '$lname', '$document', '$pass' );";

// $result = $conn->query("INSERT INTO utp_users (us_fname, us_lname, us_doc_num, us_pass)
// VALUES('$fname', '$lname', '$document', '$pass' );");		//ejecucion de query contra la base de datos
//
// $outp ='{"records":['.$result.']}';  	//Convierte despuesta a formato json
//
// $conn->close();
//
// echo($outp);	//Retorna json de respuesta
?>
