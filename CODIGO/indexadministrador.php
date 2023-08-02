<?php
  require 'consultaReservas.php'
?>


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>"El Jardin"</title>
    <link rel="stylesheet" href="css/styiles.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Lora:wght@500&display=swap"
      rel="stylesheet"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@700&display=swap"
      rel="stylesheet"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@1,700&display=swap"
      rel="stylesheet"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Arvo:ital@1&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    


    <header>
      <div class="logo">
        <img
          src="img/logo-removebg-preview.png"
          alt="Logo del conjunto habitacional"
        />
      </div>
      <div class="nombre-conjunto">
        <h1>Solidaridad Quitumbe 4 "El Jardin"</h1>
      </div>
      <div class="botones-sesion">
        <a href="img/acceso.png" class="boton-inicio-sesion"></a>
        <a href="img/agregar-usuario.png" class="boton-crear-cuenta"></a>
      </div>
    </header>

    <nav class="navbar">
      <ul>
        <li><a href="Index.html">Salir</a></li>
        <li><a href="" class="boton-reservar">Ver reservaciones</a></li>
        <li><a href="" class  ="boton-noticias">Noticias</a></li>
        <li><a href="" class="boton-pagos"> Alícuotas</a></li>
        <li><a href="" class="boton-residentes"> Residentes</a></li>
        
        <span id="Bienvenido" style="color: red;"></span>
        
      </ul>
      

          
    </nav>

    <p id="texto-oculto" class="texto-oculto">Este es un texto oculto con CSS.</p>
  
     
    </p>
    

    <div class="slider-container">
      <div class="slider">
        <div class="slide">
          <img src="img/principal.jpg" alt="Imagen 1" />
          <div class="text-overlay">
            <h2>Bienvenido</h2>
            <p>Conjunto Habitacional</p>
            <p>"El Jardin"</p>
          </div>
        </div>
        <div class="slide">
          <img src="img/principal01.jpg" alt="Imagen 2"/>
        </div>
        <div class="slide">
          <img src="img/principal02.jpg" alt="Imagen 3"/>
        </div>
      </div>
      <div class="slider-arrows">
        <div class="arrow arrow-left" onclick="prevSlide()">&#8249;</div>
        <div class="arrow arrow-right" onclick="nextSlide()">&#8250;</div>
      </div>
    </div>
    <br />

    <main>
      <section class="bloques">
        <div class="bloque">
          <div class="contenido">
            <h3>Casa Comunal</h3>
            <p>
              El conjunto Solidaridad Quitumbe 4 "El Jardin", cuenta con una
              casa comunal a disposicion de todos los propietarios, para
              realizar eventos, reuniones, etc.
            </p>
          </div>
          <div class="imagen">
            <img src="img/09.jpg" alt="Imagen 2" />
          </div>
        </div>
        <br />
        <div class="bloque">
          <div class="contenido">
            <h3>Huerto comunal</h3>
            <p>
              El conjunto Solidaridad Quitumbe 4 "El Jardin", Cuenta con un
              huerto, en el cual se cultivan productos sin anda de quimicos y
              son 100% naturales
            </p>
          </div>
          <div class="imagen">
            <img src="img/10.jpg" alt="Imagen 2" />
          </div>
        </div>
        <br />
        <div class="bloque">
          <div class="contenido">
            <h3>Espacios verdes</h3>
            <p>
              El conjunto Solidaridad Quitumbe 4 "El Jardin". tiene a
              disposicion de todos los propietarios, canchas, parques para pasar
              rato en familia, en un ambiente tranquilo
            </p>
          </div>
          <div class="imagen">
            <img src="img/03.jpg" alt="Imagen 2" />
          </div>
        </div>
      </section>
    </main>

    <div id="formulario-inicio-sesion" class="formulario">
      <h2>Iniciar sesión</h2>
      <form action="login.php" method="POST">
        <!-- Campos del formulario de inicio de sesión -->
        <label for="email">Correo electrónico:</label>
        <input type="email" id="email" name="email" required />
        <label for="password">Contraseña:</label>
        <input type="password" id="password" name="password" required />
        
        <input type="submit"Iniciar sesión/>
      </form>
    </div>

    <div id="formulario-crear-cuenta" class="formulario">
        <h2>Crear cuenta</h2>
      <form action ="alta.php" method="POST">
        <!-- Campos del formulario de creación de cuenta -->
        <label for="tipoCuenta">Tipo de cuenta*:</label>
        <select id="tipoCuenta" name="tipoCuenta" onmouseout="validar()">
          <option value="tipo" id="tipo" selected>Selecione un tipo</option>
          <option value="propietario" id="propietario">Propietario</option>
          <option value="arrendatario" id="arrendatario">Arrendatario</option>
          <br>
        </select>
        <span id="mensajeErrorTipoCuenta" style="color: red;"></span>
       
        <label for="numeroCasa">Número de casa*:</label>
        <input type="text" id="numero-casa" name="numeroCasa" onmouseout="validar()" />
        <br>
        <span id="mensajeErrorNumeroCasa" style="color: red;"></span>
        <label for="cedula">Cédula*:</label>
        <input type="text" id="cedula" name="cedula" onmouseout="validar()" />
        <br>
        <span id="mensajeErrorCedula" style="color: red;"></span>
        <label for="nombre">Nombre*:</label>
        <input type="text" id="nombre" name="nombre" onmouseout="validar()" />
        <br>
        <span id="mensajeErrorNombre" style="color: red;"></span>
        <label for="apellido">Apellido*:</label>
        <input type="text" id="apellido" name="apellido" onmouseout="validar()" />
        <br>
        <span id="mensajeErrorApellido" style="color: red;"></span>
        <label for="telefono">Teléfono*:</label>
        <input type="text" id="telefono" name="telefono" onmouseout="validar()" />
        <span id="mensajeErrorTelefono" style="color: red;"></span>
        <label for="parqueadero">Parqueadero:</label>
        <input type="text" id="parqueadero" name="parqueadero" onmouseout="validar()" />
        <span id="mensajeErrorParqueadero" style="color: red;"></span>
        <label for="mascotas">Posee mascotas*:</label>
        <select id="mascotas" name="mascotas" onmouseout="validar()">
          <option value="seleccion" selected>Selecione una opción</option>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
        <span id="mensajeErrorMascota" style="color: red;"></span>
        <label for="numCarros">Número de carros:</label>
        <input type="text" id="num-carros" name="numCarros" onmouseout="validar()" />
        <span id="mensajeErrorCarro" style="color: red;"></span>
        <label for="emailCuenta">Correo electrónico*:</label>
        <input type="email" id="email-cuenta" name="emailCuenta" onmouseout="validar()"  />
        <span id="mensajeErrorEmailCuenta" style="color: red;"></span>
        <label for="contrasenia">Contraseña*:</label>
        <input type="password" id="contrasenia" name="contrasenia" onmouseout="validar()" placeholder="Ingrese 8 caracteres..."  />
        <span id="mensajeErrorContrasenia" style="color: red;"></span>
        <label for="repetir-contrasenia">Repetir contraseña*:</label>
        <input type="password" id="repetir-contrasenia" name="repetirContrasenia" onmouseout="validar()" disabled placeholder="Repita la contraseña..." />
        <span id="mensajeErrorRepetirContrasenia" style="color: red;"></span>
        <input type="submit"  value="Enviar" id="boton" disabled/>
        

      </form>
    </div>

    <br />


    <!--aqui estoy editando la seccion de noticias-->
    <main id="formulario-noticias" class="formulario">
      <h1 >Noticias</h1>
      
      <div  >
        <h2 class=""></h2>
          <form id="noticias-form">

            <label for="titulo">Título:</label>
            <input type="text" id="titulo" name="tituloNoticia" required />

            <label for="texto">Texto:</label>
            <textarea id="texto" name="ParrafoNoticia" rows="5" required></textarea>

            <label for="imagen">Imagen:</label>
            <input type="file" id="imagen" name="imagenNoticia" />

            <button type="submit" id="enviarNoticia" class="mostrarNoticiasUsuario">Enviar Noticia</button>
            <button type="submit" class="cancelarNoticia">Cancelar</button>
          </form>
      </div>
  </main>


  <!--aqui estoy editando la seccion de reservaciones de areas comunes-->
    <main id="formulario-reservas" class="formulario">
      <h1>Reserva de Salón de Eventos y Parqueaderos de Visitas</h1>          
      <form>
        
        <table border="1px">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Número decasa</th>
              <th>Fecha</th>
              <th>Tipo de evento</th>
              <th>Salon de eventos</th>
              <th>Parqueadero de visitas</th>
            </tr>
          </thead>            
      

        <tbody>
              <?php 
              while($obj=pg_fetch_object($consulta)){?>

                <tr>
                  <td><?php echo $obj->nombre;?></td> 
                  <td><?php echo $obj->numero_casa;?></td> 
                  <td><?php echo $obj->fecha;?></td> 
                  <td><?php echo $obj->tipo_evento;?></td> 
                  <td><?php echo $obj->salon_eventos;?></td>
                  <td><?php echo $obj->parqueadero_visitas;?></td>  
                </tr>
          </tbody> <?php } ?>
              </table>
      </form>
      <button type="submit" class="cancelarReserva">Cerrar</button>
        
    </main>
      
    <!-- Aquí estoy editando la seccion de pagos -->
    <main id="formulario-pagos" class="formulario">
      <h1>Pagos</h1>

      <div id="usuario-info">
        <!-- Aquí se mostrará la información del usuario -->

        <span id="mensajePagos" style="color: red;">AQUI PRESENTARA INFORMACION EN CASO DEBAN LAS ALÍCUOTAS</span>
        
      </div>

      <div id="pagos-info">
        <!-- Aquí se mostrará la información de pagos -->
      </div>

      <button id="editar-info" class="leido">He leído</button>
    </main>









    <footer class="pie">
      <p><b>Contáctanos:</b></p>
      <p><b>Dirección:</b> Pumapungo s35-158, Quito, Ecuador</p>
      <p><b>Téfono:</b> <a href="tel:+593978720654">+593978720654</a></p>
      <p>
        <b>Correo electrónico:</b>
        <a href="mailto:elgabowtf2016@gmail.com">elgabowtf2016@gmail.com</a>
      </p>
    </footer>

    <script src="JS/validacion.js"></script>
    <script src="JS/index.js"></script>


    
  </body>
</html>
