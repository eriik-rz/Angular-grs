<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Content-Type: application/json');

require("conexion.php");
$con = retornarConexion();

// Validar parámetro
if (!isset($_GET['codigo'])) {
    echo json_encode([
        "resultado" => "ERROR",
        "mensaje" => "Parámetro 'codigo' faltante"
    ]);
    exit;
}

$codigo = intval($_GET['codigo']); // seguridad: convertir a entero

$sql = "SELECT codigo, descripcion, precio FROM articulos WHERE codigo = $codigo";
$registros = mysqli_query($con, $sql);

if (!$registros) {
    echo json_encode([
        "resultado" => "ERROR",
        "mensaje" => mysqli_error($con)
    ]);
    exit;
}

$vec = [];
if ($reg = mysqli_fetch_assoc($registros)) { // solo asociativo
    $vec[] = $reg;
}

echo json_encode($vec);
