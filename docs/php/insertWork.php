<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "root", "utp_tesis"); //conecxión a mysql
$conn->set_charset("utf8");

$data = json_decode(file_get_contents("php://input"),true); //Recibe parametros como arreglo asociado

// Referencia https://stackoverflow.com/questions/28727163/why-i-cannot-call-the-procedure-from-php " the solution that works"

$profiles_count =  count($data['profiles']); // Cantidad de perfiles

$sql= "call insertWork('".$data['userId']."','".$data['title']."','".$data['type']."','".$data['description']."','".$data['students']."','".$data["workState"]."'";

for ($int=0; $int < 3; $int++) { // Si los la cantidad de perfiles ingresados es menor a tres, la diferencia se mandan en blanco
  
  if ($int+1 <= $profiles_count) {

    $value = $data['profiles'][$int];
    $sql .= ",'".$value['faculty']."','".$value['career']."'";

  }else {
    $sql .= ",'',''";
  }
  
}

$sql .= ");";

//  echo $sql; //PARA VERIFICAR QUERY

if (!$conn->query($sql)) {
  $result = "Falló CALL: (" . $conn->errno . ") " . $conn->error;
  $outp = '{"error":"'.$result.'"}';
}else{
  $result = $conn->affected_rows;
  $outp ='{"records":'.$result.'}';  	//Convierte despuesta a formato json
}

$conn->close();

echo $outp;	//Retorna json de respuesta
?>
