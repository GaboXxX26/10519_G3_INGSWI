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
//validar 

$(document).ready(function () {
  // Variable para verificar el estado de inicio de sesión
  var usuarioAdmin = false;

  // Verificar si el usuario está autenticado como administrador
  // Aquí puedes agregar tu lógica de verificación de inicio de sesión

  // Mostrar formulario de agregar noticias solo si el usuario es administrador
  if (usuarioAdmin) {
    $("#agregar-noticia").show();
  }

  // Manejar el evento click en el botón "Agregar Noticia"
  $("#agregar-noticia").click(function () {
    // Mostrar el formulario de agregar noticias
    $("#noticias-formulario").show();
  });

  // Manejar la presentación de noticias
  var noticias = [
    // Aquí puedes agregar objetos con información de las noticias
    // Ejemplo: { titulo: 'Título de la noticia', texto: 'Texto de la noticia', imagen: 'ruta-de-la-imagen.jpg' }
  ];

  // Ordenar las noticias por fecha (de más nueva a más antigua)
  noticias.sort(function (a, b) {
    return new Date(b.fecha) - new Date(a.fecha);
  });

  // Mostrar las noticias en la página
  var noticiasLista = $("#noticias-lista");
  var noticiasHTML = "";

  for (var i = 0; i < Math.min(6, noticias.length); i++) {
    var noticia = noticias[i];

    noticiasHTML += '<div class="noticia">';
    noticiasHTML += "<h3>" + noticia.titulo + "</h3>";
    noticiasHTML += "<p>" + noticia.texto + "</p>";

    if (noticia.imagen) {
      noticiasHTML +=
        '<img src="' + noticia.imagen + '" alt="Imagen de la noticia">';
    }

    noticiasHTML += "</div>";
  }

  noticiasLista.html(noticiasHTML);

  // Manejar el evento submit del formulario de agregar noticias
  $("#noticias-form").submit(function (e) {
    e.preventDefault();

    // Obtener los valores del formulario
    var titulo = $("#titulo").val();
    var texto = $("#texto").val();
    var imagen = $("#imagen").val(); // Aquí puedes implementar la lógica para manejar la imagen

    // Crear un objeto noticia con los datos
    var nuevaNoticia = {
      titulo: titulo,
      texto: texto,
      imagen: imagen,
    };

    // Agregar la nueva noticia al arreglo de noticias
    noticias.unshift(nuevaNoticia);

    // Actualizar la lista de noticias en la página
    noticiasHTML = "";

    for (var i = 0; i < Math.min(6, noticias.length); i++) {
      var noticia = noticias[i];

      noticiasHTML += '<div class="noticia">';
      noticiasHTML += "<h3>" + noticia.titulo + "</h3>";
      noticiasHTML += "<p>" + noticia.texto + "</p>";

      if (noticia.imagen) {
        noticiasHTML +=
          '<img src="' + noticia.imagen + '" alt="Imagen de la noticia">';
      }

      noticiasHTML += "</div>";
    }

    noticiasLista.html(noticiasHTML);

    // Reiniciar el formulario y ocultarlo
    $(this)[0].reset();
    $("#noticias-formulario").hide();
  });
});
