<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "root", "utp_tesis");

$data = file_get_contents("php://input"); //Recibe parametro
	//Optiene elemento actual
$result = $conn->query("SELECT * FROM utp_users
  WHERE us_doc_num = '$data';");

  $outp = "";
  while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"id":"'  . $rs["us_id"] . '",';
      $outp .= '"fName":"'   . $rs["us_fname"] . '",';
      $outp .= '"lName":"'. $rs["us_lname"] . '",';
      $outp .= '"docNumber":"'. $rs["us_doc_num"] . '",';
      $outp .= '"pass":"'. $rs["us_pass"] . '"}';
    }
    $outp ='{"records":['.$outp.']}';
    $conn->close();

    echo($outp);
    ?>
