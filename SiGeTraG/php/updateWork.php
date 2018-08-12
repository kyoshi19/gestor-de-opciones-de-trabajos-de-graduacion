<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "root", "utp_tesis"); //conecxión a mysql

$data = file_get_contents("php://input"); //Recibe parametro

reset($data);
$work_type = current($data); 	//Optiene elemento actual
$faculty = next($data);		//Optiene Siguiente elemento
$reg_center = next($data);
$w_title = next($data);


$query = "UPDATE utp_tesis.graduation_works
SET work_type='T',
w_title ='Nuevo método computacional para el estudio de flujo de potenciaaa',
faculty ='FISC',
reg_center ='Pc',
studentsQty ='2'
WHERE  work_code='21';";

if ($conn->query($query)==true){
  $result = $conn->affected_rows;
}	//ejecucion de query contra la base de datos

$outp ='{"result":'.$result.'}';  	//Convierte despuesta a formato json

$conn->close();

echo($outp);	//Retorna json de respuesta
?>
