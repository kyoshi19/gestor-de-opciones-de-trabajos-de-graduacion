<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "root", "utp_tesis");
$conn->set_charset("utf8");

$data = json_decode(file_get_contents("php://input"), true); //Recibe parametro

//Optiene elemento actual
$result = $conn->query("SELECT * FROM utp_users
  WHERE us_doc_num = '".$data['docToSearch']."'
  AND us_pass ='".$data['passToSearch']."';");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
  if ($outp != "") {$outp .= ",";}
  $outp .= '{"id":"'  . $rs["us_id"] . '",';
  $outp .= '"type":"'   . $rs["us_type"] . '",';
  $outp .= '"fName":"'   . $rs["us_fname"] . '",';
  $outp .= '"lName":"'. $rs["us_lname"] . '",';
  $outp .= '"docNumber":"'. $rs["us_doc_num"] . '",';
  $outp .= '"email":"'. $rs["us_mail"] . '"}';
}
$outp ='{"records":['.$outp.']}';
$conn->close();

echo $outp;
?>
