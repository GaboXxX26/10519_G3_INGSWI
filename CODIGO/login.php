<!-- login.php -->
<?php
// Conexión a la base de datos (reemplaza con tus propias credenciales)
$host = 'localhost'; // Por lo general, 'localhost'
$port ='5433';
$bd = "conjunto_habitacional";
$user = "postgres";
$pass = "1723108542";

// Verificar si el formulario ha sido enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener las credenciales del formulario
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Conectar a la base de datos
    //$conn = new mysqli($host, $port, $bd, $user, $pass);
    $conn = pg_connect("host=$host port=$port dbname=$bd user=$user password=$pass");
    
        // Verificar si la conexión es exitosa
        if (!$conn) {
            die("Error de conexión: " . pg_last_error());
        }
    
        // Consulta para verificar las credenciales del usuario
        $query = "SELECT * FROM registrar_usuario WHERE email_cuenta=$1 AND contrasenia=$2";
        $result = pg_query_params($conn, $query, array($email, $password));
    
        // Verificar si se encontró el usuario en la base de datos
        if (pg_num_rows($result) > 0 ) {
            // El inicio de sesión es exitoso, redireccionar al usuario a una página de bienvenida
            header("Location: indexusuario.html");
            //document.getElementById("bienvenido").textContent('dddd');

        }
        if($email==="administrador@hotmail.com" && $password==="11111111"){
            // El inicio de sesión es exitoso, redireccionar al usuario administrador
            header("Location: indexadministrador.php");
            //document.getElementById("bienvenido").textContent('dddd');
        } 

            
            //exit();
         else  {
            // Credenciales incorrectas, mostrar un mensaje de error o redireccionar a una página de error
            echo "Correo electrónico o contraseña incorrectos.";
        }
    
        // Cerrar la conexión a la base de datos
        pg_close($conn);
    }
    ?>

    
    