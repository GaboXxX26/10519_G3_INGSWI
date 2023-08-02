<?php

$host = 'localhost'; // Por lo general, 'localhost'
$port ='5433';
$bd = "conjunto_habitacional";
$user = "postgres";
$pass = "1723108542";

$conexion = pg_connect("host=$host port=$port dbname=$bd user=$user password=$pass");

    $query = ("INSERT INTO reservaciones(nombre, numero_casa, fecha, tipo_evento, salon_eventos, parqueadero_visitas) 
    VALUES ('$_REQUEST[nombre]','$_REQUEST[numeroCasa]','$_REQUEST[fecha]','$_REQUEST[tipoEvento]','$_REQUEST[salonEventos]','$_REQUEST[parqueaderoVisitas]')");

    $consulta=pg_query($conexion,$query); //enseña el error

    pg_close();
    $mensaje= 'Reservacion guradada con exito'; 
    //echo "<script>alert('holaaaaaaaaaaaaa');</script>";
    //window.location.href ()'index.php'; // Redirigir a la pantalla de inicio
            

   // trigger_error('registro xxx') ;
   //$mensaje = "cuenta creada";


   echo "<script>
        var respuesta = confirm('$mensaje');
        if (respuesta) {
            window.location.href = 'indexusuario.html'; // Redirigir a la pantalla de inicio
            
            
        } else {
            window.location.href = 'registro.php'; // Redirigir de vuelta al formulario de registro
        }
    </script>";


?>