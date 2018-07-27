<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "root", "utp_tesis");

$resultCatalogs = $conn->query("SELECT cat_name AS 'name', cat_code AS 'code' FROM catalogs;");

$outp = "";
$res = "";

while($rs = $resultCatalogs->fetch_array(MYSQLI_ASSOC)) {
	if ($outp != "") {$outp .= ",";}
	$outp .= '"'.$rs["name"] . '":[';

	$res = '{"id":null,"name":"Seleccionar"},{"id":"0", "name":"Todos"}';

	$resultItems = $conn->query("SELECT cati_code AS 'id', cati_name AS 'name' FROM catalogs_items WHERE cat_code = '".$rs["code"]."'
															 ORDER BY cati_name;");
	while($rrs = $resultItems->fetch_array(MYSQLI_ASSOC)){
		if ($res != "") {$res .= ",";}
		$res .= '{"id":"'.$rrs["id"].'","name":"'.$rrs["name"].'"}';
	}
	$outp .= $res .']';
	$res = "";

}
$outp ='{'.$outp.'}';
$conn->close();
echo($outp);
?>
