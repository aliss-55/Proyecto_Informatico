<?php
$Connection = mysqli_connect("localhost", "root", "", "askapp");
if ($Connection) {
    //echo 'Conectado exitosamente a a Base de Datos';
} else {
    echo 'No se ha podido conectar a la Base de Datos';

}