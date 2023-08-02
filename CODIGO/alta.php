<?php

$host = 'localhost'; // Por lo general, 'localhost'
$port ='5433';
$bd = "conjunto_habitacional";
$user = "postgres";
$pass = "1723108542";

$conexion = pg_connect("host=$host port=$port dbname=$bd user=$user password=$pass");

    $query = ("INSERT INTO registrar_usuario(tipo_cuenta, numero_casa, cedula, nombre, apellido, telefono, parqueadero, mascotas, num_carros, email_cuenta, contrasenia) 
    VALUES ('$_REQUEST[tipoCuenta]','$_REQUEST[numeroCasa]','$_REQUEST[cedula]','$_REQUEST[nombre]','$_REQUEST[apellido]','$_REQUEST[telefono]','$_REQUEST[parqueadero]','$_REQUEST[mascotas]','$_REQUEST[numCarros]','$_REQUEST[emailCuenta]','$_REQUEST[contrasenia]')");

    $consulta=pg_query($conexion,$query); //enseña el error

    pg_close();
    $mensaje= 'Registro guradado con exito'; 
    //echo "<script>alert('holaaaaaaaaaaaaa');</script>";
    //window.location.href ()'index.php'; // Redirigir a la pantalla de inicio
            

   // trigger_error('registro xxx') ;
   //$mensaje = "cuenta creada";


   echo "<script>
        var respuesta = confirm('$mensaje');
        if (respuesta) {
            window.location.href = 'index.html'; // Redirigir a la pantalla de inicio
            
            
        } else {
            window.location.href = 'registro.php'; // Redirigir de vuelta al formulario de registro
        }
    </script>";


?>