<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "root", "utp_tesis");
$conn->set_charset("utf8");
$data = json_decode(file_get_contents("php://input"),true); //Recibe parametros como arreglo asociado

$condition = array(" WHERE ", " AND ", " AND ");
$item = 0;

reset($data);
$from = current($data); 	//Optiene elemento actual
$to = next($data);
$subject = next($data);
$sender = next($data);
$text = next($data);


$message = "
<html>
<head>
<title>HTML email</title>
</head>
<body>
<h1>Sistema Gestor de Opciones de Trabajos de Graduación</h1>
<h3>Estimado/a asesor/ra,<br>".$sender." ha decidido aplicar a su trabajo de
graduación</3>";
if (strlen($text) > 0) {
  $message .="
  <p>El mismo indica:<br>".$text."</p>";
}
$message.= "<p>Puede contactar al solicitante al correo:<br>".$from." </p>
</body>
</html>
";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: Go.Tg <webmaster@example.com>' . "\r\n";
$headers .= 'Cc: kyoshi.giron@gmail.com' . "\r\n";

//echo(mail($to,$subject,$message,$headers));
echo(1);
?>
