// Función para validar el formulario de creación de cuenta
function validarFormulario() {
  const tipoCuenta = document.getElementById("tipo-cuenta").value;
  const numeroCasa = document.getElementById("numero-casa").value;
  const cedula = document.getElementById("cedula").value;
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const telefono = document.getElementById("telefono").value;
  const correo = document.getElementById("email-cuenta").value;
  const contrasenia = document.getElementById("contrasenia").value;
  const repetirContrasenia = document.getElementById(
    "repetir-contrasenia"
  ).value;
  const parqueadero = document.getElementById("parqueadero").value;
  const mascota = document.getElementById("mascotas").value;
  const vehiculo = document.getElementById("num-carros").value;

  const regexMayuscula = /[A-Z]/;
  const regexMinuscula = /[a-z]/;
  const regexNumero = /[0-9]/;

  if (tipoCuenta === "") {
    alert("Por favor, seleccione el tipo de cuenta.");
    return false;
  }

  if (numeroCasa === "") {
    alert("Por favor, ingrese el número de casa.");
    return false;
  }
  if (numeroCasa < 1 || numeroCasa > 103) {
    alert("Error,Casas existentes entre 1 y 103 .");
    return false;
  }
  if (cedula === "") {
    alert("Por favor, ingrese la cédula.");
    return false;
  }

  if (cedula.length !== 10) {
    alert("La cédula debe tener exactamente 10 dígitos.");
    return false;
  }

  if (nombre === "") {
    alert("Por favor, ingrese el nombre.");
    return false;
  }

  if (apellido === "") {
    alert("Por favor, ingrese el apellido.");
    return false;
  }

  if (telefono === "") {
    alert("Por favor, ingrese el teléfono.");
    return false;
  }
  if (telefono.length < 10) {
    alert("Por favor, ingrese el teléfono valido.");
    return false;
  }

  if (correo === "") {
    alert("Por favor, ingrese el correo electrónico.");
    return false;
  }
  if (parqueadero === "") {
    alert("Por favor, ingrese el parqueadero.");
  }
  if (parqueadero < 1 || parqueadero > 103) {
    alert("Parquederos existentes entre 1 y 103.");
  }
  if (mascota === "") {
    alert("Por favor, ingrese si posee mascota.");
    return false;
  }
  if (vehiculo === "") {
    alert("Por favor, ingrese el número de vehiculos.");
    return false;
  }

  if (contrasenia === "") {
    alert("Por favor, ingrese la contraseña.");
    return false;
  }
  if (
    contrasenia.length < 8 ||
    !regexMayuscula.test(contrasenia) ||
    !regexMinuscula.test(contrasenia) ||
    !regexNumero.test(contrasenia)
  ) {
    alert(
      "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número."
    );
    return false; // Detener el envío del formulario
  }
  if (repetirContrasenia === "") {
    alert("Por favor, repita la contraseña.");
    return false;
  }

  if (contrasenia == repetirContrasenia) {
    alert("Usuario creado correctamente");
    window.location.href = "index.html"; // Reemplaza 'inicio.html' con la página de inicio correspondiente
  } else {
    alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
    document.getElementById("contrasenia").value = "";
    document.getElementById("confirmar-contrasenia").value = "";
  }

  // Si todas las validaciones pasan, el formulario es válido
  // Puedes realizar aquí el envío de datos o realizar otras acciones necesarias
  return true;
}

// Asociar la función de validación al evento 'submit' del formulario
const formulario = document.querySelector("form");
formulario.addEventListener("submit", validarFormulario);

// Función para mostrar mensajes de error
function mostrarError(mensaje) {
  const errorElemento = document.getElementById("error");
  errorElemento.textContent = mensaje;
  errorElemento.style.display = "block";
}

// Función para validar el formato del correo electrónico utilizando una expresión regular
function validarFormatoCorreo(correo) {
  const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return correoRegex.test(correo);
}
