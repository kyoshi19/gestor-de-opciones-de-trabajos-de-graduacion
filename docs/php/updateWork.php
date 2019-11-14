<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "root", "utp_tesis"); //conecxión a mysql
$conn->set_charset("utf8");
$data = json_decode(file_get_contents("php://input"), true); //Recibe parametro

$sql = "UPDATE graduation_works
SET work_type = '".$data["type"]."',
w_title = '".$data["title"]."',
work_desc = '". $data["description"] ."',
studentsQty = ".$data["students"]."
WHERE  work_code = '".$data["id"]."';";

if (!$conn->query($sql)){ //ejecucion de query contra la base de datos
  $result = "Falló CALL: (" . $conn->errno . ") " . $conn->error;
  $outp = '{"error":"'.$result.'"}';
}else{

  $sql = "DELETE FROM profiles WHERE work_code = '".$data["id"]."'";
  $conn->query($sql);

  $profiles = $data['profiles'];
  for ($int=0; $int < count($profiles); $int++) { 

    $sql = "INSERT INTO profiles (work_code, faculty, career) 
    VALUES ('".$data["id"]."', '".$profiles[$int]["faculty"]."', '".$profiles[$int]["career"]."')";

    if (!$conn->query($sql)){ //ejecucion de query contra la base de datos
      $result = "Falló CALL: (" . $conn->errno . ") " . $conn->error;
      $outp = '{"error":"'.$result.'"}';
    } else {
      $result = $conn->affected_rows;
      $outp ='{"records":['.$result.']}';  	//Convierte despuesta a formato json
    }

  }
  
}

$conn->close();

echo $outp;	//Retorna json de respuesta
?>
