<?php
function retornarConexion() {
  $con=mysqli_connect("localhost","root","Ciclo2gs","bd_articulos");
  return $con;
}
?>