<?php
/*
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

  $json = file_get_contents('php://input');

  $params = json_decode($json);

  require("conexion.php");
  $con=retornarConexion();


  mysqli_query($con,"insert into articulos(descripcion,precio) values
                  ('$params->descripcion',$params->precio)");


  class Result {}

  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'datos grabados';

  header('Content-Type: application/json');
  echo json_encode($response);
 */


header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Content-Type: application/json');

$json = file_get_contents('php://input');
$params = json_decode($json, true);

require("conexion.php");
$con = retornarConexion();

$descripcion = $params['descripcion'];
$precio = $params['precio'];

$sql = "INSERT INTO articulos(descripcion, precio)
        VALUES ('$descripcion', $precio)";

if (!mysqli_query($con, $sql)) {
    echo json_encode([
        "resultado" => "ERROR",
        "mensaje" => mysqli_error($con)
    ]);
    exit;
}

echo json_encode([
    "resultado" => "OK",
    "mensaje" => "datos grabados"
]);

?>