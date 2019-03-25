<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "root", "utp_tesis");
$conn->set_charset("utf8");

$resultCatalogs = $conn->query("SELECT cat_name AS 'name', cat_code AS 'code' FROM catalogs;");

$outp = "";
$res = "";

while($rs = $resultCatalogs->fetch_array(MYSQLI_ASSOC)) {
	if ($outp != "") {$outp .= ",";}
	$outp .= '"'.$rs["name"] . '":[';

	if ($rs['code'] != 'IDT') {
		$res = '{"id":"","name":"Seleccionar", "related":""},{"id":"0", "name":"Todos", "related":""}';
	}

	$resultItems = $conn->query("SELECT cati_code AS 'id', cati_name AS 'name', cati_code_rel AS 'related' FROM catalogs_items WHERE cat_code = '".$rs["code"]."'
															 ORDER BY cati_name;");
	while($rrs = $resultItems->fetch_array(MYSQLI_ASSOC)){
		if ($res != "") {$res .= ",";}
		$res .= '{"id":"'.$rrs["id"].'","name":"'.$rrs["name"].'","related":"'.$rrs["related"].'"}';
	}
	$outp .= $res .']';
	$res = "";

}
$outp ='{'.$outp.'}';
$conn->close();
echo $outp;
?>
