<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Content-Type: application/json');

require("conexion.php");
$con = retornarConexion();

// Validar que venga el parámetro "codigo"
if (!isset($_GET['codigo'])) {
    echo json_encode([
        "resultado" => "ERROR",
        "mensaje" => "Parámetro 'codigo' faltante"
    ]);
    exit;
}

$codigo = intval($_GET['codigo']); // Convertir a entero para seguridad

$sql = "DELETE FROM articulos WHERE codigo = $codigo";

if (!mysqli_query($con, $sql)) {
    echo json_encode([
        "resultado" => "ERROR",
        "mensaje" => mysqli_error($con)
    ]);
    exit;
}

echo json_encode([
    "resultado" => "OK",
    "mensaje" => "articulo borrado"
]);
