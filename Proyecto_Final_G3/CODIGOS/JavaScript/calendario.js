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


// REservar 
$(document).ready(function () {
  // Configurar el calendario
  $("#calendario").fullCalendar({
    // Configuración del calendario
    defaultView: "month",
    events: [
      // Eventos preexistentes
      {
        title: "Evento 1",
        start: "2023-07-01",
        end: "2023-07-02",
      },
      {
        title: "Evento 2",
        start: "2023-07-05",
        end: "2023-07-07",
      },
    ],
    // Puedes agregar más opciones y personalizaciones según tus necesidades
  });

  // Manejar la reserva
  $("#reserva-formulario").submit(function (e) {
    e.preventDefault();

    // Obtener los valores del formulario
    var nombre = $("#nombre").val();
    var numeroCasa = $("#numero-casa").val();
    var fecha = $("#fecha").val();
    var tipoEvento = $("#tipo-evento").val();
    var tipoReserva = $("#tipo-reserva").val();

    // Realizar la lógica de reserva aquí (enviar datos al backend, etc.)

    // Reiniciar el formulario
    $(this)[0].reset();
  });
});
