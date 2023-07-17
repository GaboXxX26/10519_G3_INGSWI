// Obtén una referencia a los formularios emergentes
var formInicioSesion = document.getElementById("formulario-inicio-sesion");
var formCrearCuenta = document.getElementById("formulario-crear-cuenta");

// Obtén una referencia a los botones de inicio de sesión y crear cuenta
var botonInicioSesion = document.querySelector(".boton-inicio-sesion");
var botonCrearCuenta = document.querySelector(".boton-crear-cuenta");

// Escucha el evento click en el botón de inicio de sesión
botonInicioSesion.addEventListener("click", function (event) {
  event.preventDefault();
  // Muestra el formulario de inicio de sesión
  formInicioSesion.style.display = "block";
});

// Escucha el evento click en el botón de crear cuenta
botonCrearCuenta.addEventListener("click", function (event) {
  event.preventDefault();
  // Muestra el formulario de crear cuenta
  formCrearCuenta.style.display = "block";
});

// Escucha el evento click en cualquier parte del documento
document.addEventListener("click", function (event) {
  // Verifica si se hizo clic fuera del formulario de inicio de sesión
  if (
    !formInicioSesion.contains(event.target) &&
    !botonInicioSesion.contains(event.target)
  ) {
    // Oculta el formulario de inicio de sesión
    formInicioSesion.style.display = "none";
  }

  // Verifica si se hizo clic fuera del formulario de crear cuenta
  if (
    !formCrearCuenta.contains(event.target) &&
    !botonCrearCuenta.contains(event.target)
  ) {
    // Oculta el formulario de crear cuenta
    formCrearCuenta.style.display = "none";
  }
});

// Escucha el evento submit en el formulario de inicio de sesión
formInicioSesion.addEventListener("submit", function (event) {
  event.preventDefault();
  // Realiza las acciones de inicio de sesión aquí
});

// Escucha el evento submit en el formulario de crear cuenta
formCrearCuenta.addEventListener("submit", function (event) {
  event.preventDefault();
  // Realiza las acciones de creación de cuenta aquí
});

//datos y pago 
$(document).ready(function() {
    // Variable para verificar el estado de inicio de sesión
    var usuarioAutenticado = false;
  
    // Verificar si el usuario está autenticado
    // Aquí puedes agregar tu lógica de verificación de inicio de sesión
  
    // Mostrar la información del usuario solo si está autenticado
    if (usuarioAutenticado) {
      // Obtener los datos del usuario desde donde los hayas almacenado
      var usuarioDatos = {
        numeroCasa: '123',
        cedula: '1234567890',
        nombre: 'John',
        apellido: 'Doe',
        telefono: '123456789',
        // Agrega aquí los demás datos del usuario según lo recopilado en el formulario de creación de cuenta
      };
  
      // Mostrar la información del usuario en la página
      var usuarioInfo = $('#usuario-info');
      var usuarioHTML = '';
  
      usuarioHTML += '<h2>Información del Usuario</h2>';
      usuarioHTML += '<p>Número de Casa: ' + usuarioDatos.numeroCasa + '</p>';
      usuarioHTML += '<p>Cédula: ' + usuarioDatos.cedula + '</p>';
      usuarioHTML += '<p>Nombre: ' + usuarioDatos.nombre + '</p>';
      usuarioHTML += '<p>Apellido: ' + usuarioDatos.apellido + '</p>';
      usuarioHTML += '<p>Teléfono: ' + usuarioDatos.telefono + '</p>';
      // Agrega aquí los demás datos del usuario según lo recopilado en el formulario de creación de cuenta
  
      usuarioInfo.html(usuarioHTML);
  
      // Mostrar los pagos
      var pagosInfo = $('#pagos-info');
      var pagosHTML = '';
  
      // Obtener la información de pagos del usuario (al día o cantidad adeudada)
      // Aquí puedes agregar tu lógica para obtener la información de pagos del usuario
  
      // Ejemplo: Si el usuario está al día en pagos y multas
      var alDia = true;
  
      if (alDia) {
        pagosHTML += '<h2>Estado de Pagos</h2>';
        pagosHTML += '<p>Estás al día en pagos y multas.</p>';
      } else {
        // Ejemplo: Si el usuario debe una cantidad determinada
        var cantidadDeuda = 500; // Ejemplo: $500
  
        pagosHTML += '<h2>Estado de Pagos</h2>';
        pagosHTML += '<p>Debes una cantidad de: $' + cantidadDeuda + '</p>';
      }
  
      pagosInfo.html(pagosHTML);
    } else {
      // Mostrar un mensaje de inicio de sesión
      var mensajeInicioSesion = '<p>Por favor, inicia sesión para acceder a esta página.</p>';
      mensajeInicioSesion += '<p><a href="login.html">Iniciar Sesión</a></p>';
  
      $('#usuario-info').html(mensajeInicioSesion);
      $('#pagos-info').hide();
    }
  
    // Manejar el evento click en el botón "Editar Información"
    $('#editar-info').click(function() {
      // Redirigir a la página de edición de información del usuario
      window.location.href = 'editar-info.html'; // Reemplaza con la página correspondiente
    });
  });
  