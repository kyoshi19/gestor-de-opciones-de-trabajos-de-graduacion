<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "root", "utp_tesis");

$result = $conn->query("SELECT * FROM utp_users");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
  if ($outp != "") {$outp .= ",";}
  $outp .= '{"id":"'  . $rs["us_id"] . '",';
    $outp .= '"fName":"'   . $rs["us_fname"] . '",';
    $outp .= '"lName":"'. $rs["us_lname"] . '",';
    $outp .= '"docNumber":"'. $rs["us_doc_num"] . '"}';
  }
  $outp ='{"records":['.$outp.']}';
  $conn->close();

  echo($outp);
  ?>
