<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Content-Type: application/json');

$json = file_get_contents('php://input');
$params = json_decode($json, true); // decodificar como array

require("conexion.php");
$con = retornarConexion();

// Validar que los parámetros existan
if (!isset($params['codigo'], $params['descripcion'], $params['precio'])) {
    echo json_encode([
        "resultado" => "ERROR",
        "mensaje" => "Faltan parámetros obligatorios"
    ]);
    exit;
}

$codigo = intval($params['codigo']);        // seguridad: entero
$descripcion = $params['descripcion'];      // texto
$precio = floatval($params['precio']);      // seguridad: número

$sql = "UPDATE articulos 
        SET descripcion = '$descripcion', precio = $precio
        WHERE codigo = $codigo";

if (!mysqli_query($con, $sql)) {
    echo json_encode([
        "resultado" => "ERROR",
        "mensaje" => mysqli_error($con)
    ]);
    exit;
}

echo json_encode([
    "resultado" => "OK",
    "mensaje" => "datos modificados"
]);
