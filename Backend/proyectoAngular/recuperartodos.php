<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Content-Type: application/json');

require("conexion.php");
$con = retornarConexion();

$sql = "SELECT codigo, descripcion, precio FROM articulos";
$registros = mysqli_query($con, $sql);

if (!$registros) {
  echo json_encode([
      "resultado" => "ERROR",
      "mensaje" => mysqli_error($con)
  ]);
  exit;
}

$vec = [];
while ($reg = mysqli_fetch_assoc($registros)) { // usar solo asociativo
  $vec[] = $reg;
}

echo json_encode($vec);
