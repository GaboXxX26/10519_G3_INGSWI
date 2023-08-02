// Obtén una referencia a los formularios emergentes
var formInicioSesion = document.getElementById("formulario-inicio-sesion");
var formCrearCuenta = document.getElementById("formulario-crear-cuenta");
var formNoticias = document.getElementById("formulario-noticias");
var formReservaciones = document.getElementById("formulario-reservas");
var formPagos = document.getElementById("formulario-pagos");



// Obtén una referencia a los botones de inicio de sesión, crear cuenta y noticia
var botonInicioSesion = document.querySelector(".boton-inicio-sesion");
var botonCrearCuenta = document.querySelector(".boton-crear-cuenta");
var botonNoticias = document.querySelector(".boton-noticias");

var botonReservar = document.querySelector(".boton-reservar");
var botonPagos = document.querySelector(".boton-pagos");



function ocultarMenu(){

  var ocultarMenus = document.getElementById("menu")
  ocultarMenus.style.display ="none";
}








// Escucha el evento click en el botón de pagos del menu
botonPagos.addEventListener("click", function (event) {
  event.preventDefault();
  // Muestra el formulario de reservar
  formPagos.style.display = "block";
});


//Aqui es para cancelar la noticia
var botonLeido = document.querySelector(".leido");


botonLeido.addEventListener("click", function (event) {
  event.preventDefault();
  // Muestra el formulario de reservar
  formPagos.style.display = "none";
});




// Escucha el evento click en el botón de reservar del menu
botonReservar.addEventListener("click", function (event) {
  event.preventDefault();
  // Muestra el formulario de reservar
  formReservaciones.style.display = "block";
});



//Aqui es para cancelar la reservacion
var botonCancelarReserva = document.querySelector(".cancelarReserva");


botonCancelarReserva.addEventListener("click", function (event) {
  event.preventDefault();
  // Muestra el formulario de reservar
  formReservaciones.style.display = "none";
});








// Escucha el evento click en el botón de noticia del menu
botonNoticias.addEventListener("click", function (event) {
  event.preventDefault();
  // Muestra el formulario de noticias
  
  formNoticias.style.display = "block";
});



//Aqui es para cancelar la noticia
var botonCancelarNoticia = document.querySelector(".cancelarNoticia");


botonCancelarNoticia.addEventListener("click", function (event) {
  event.preventDefault();
  // Muestra el formulario de noticias
  formNoticias.style.display = "none";
});








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

/*// Escucha el evento submit en el formulario de inicio de sesión
formInicioSesion.addEventListener("submit", function (event) {
  event.preventDefault();
  // Realiza las acciones de inicio de sesión aquí
});*/

/*// Escucha el evento submit en el formulario de crear cuenta
formCrearCuenta.addEventListener("submit", function (event) {
  event.preventDefault();
  // Realiza las acciones de creación de cuenta aquí
});*/

//Java para slider
var slider = document.querySelector(".slider");
var slideIndex = 0;
// Función para mostrar la diapositiva siguiente
function nextSlide() {
  slideIndex++;
  if (slideIndex >= slider.children.length) {
    slideIndex = 0;
  }
  updateSlider();
}
// Función para mostrar la diapositiva anterior
function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slider.children.length - 1;
  }
  updateSlider();
}
// Función para actualizar la posición del slider
function updateSlider() {
  slider.style.transform = "translateX(-" + slideIndex * 100 + "%)";
  
}
// Intervalo para avanzar automáticamente al siguiente slide cada 5 segundos
setInterval(nextSlide, 5000);
