<?php
       /* $host = 'localhost'; // Por lo general, 'localhost'
        $port ='5433';
        $bd = "conjunto_habitacional";
        $user = "postgres";
        $pass = "1723108542";

    $conexion=  pg_connect("host=$host port=$port dbname=$bd user=$user password=$pass");*/
    $conexion =  pg_connect("host=localhost port=5433 dbname=conjunto_habitacional user=postgres password=1723108542");
    //$query ="SELECT nombre, numero_casa,fecha, tipo_evento, salon_eventos, parqueadero_visitas FROM reservaciones";
    $query ="SELECT * FROM reservaciones";
    
    $consulta = pg_query($conexion,$query);
?>
