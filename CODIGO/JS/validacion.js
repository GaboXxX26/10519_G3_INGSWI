

document.getElementById("tipoCuenta").addEventListener("blur",validarTipoCuenta);
document.getElementById("numero-casa").addEventListener("blur",validarNumeroCasa);
document.getElementById("cedula").addEventListener("blur", validarCedula);
document.getElementById("nombre").addEventListener("blur", validarNombre);
document.getElementById("apellido").addEventListener("blur", validarApellido);
document.getElementById("telefono").addEventListener("blur", validarTelefono);
document.getElementById("parqueadero").addEventListener("blur", validarParqueadero);
document.getElementById("mascotas").addEventListener("blur", validarMascota);
document.getElementById("num-carros").addEventListener("blur", validarnumeroCarro);
document.getElementById("email-cuenta").addEventListener("blur", validarEmailCuenta);
document.getElementById("contrasenia").addEventListener("blur",validarContrasenia);
document.getElementById("repetir-contrasenia").addEventListener("blur",validarRepetirContrasenia);
var boton = document.getElementById("boton");
var comprobador;

const longitudMinima = 8;
const lonitudMaxima =8;


function validarTipoCuenta() {
  const input = this;
  const valor = input.value.trim();

  if (valor === "tipo" ) {
    
    comprobador= document.getElementById("mensajeErrorTipoCuenta").textContent = "Debe elegir un tipo de cuenta";
    input.style.border = "2px solid red";
    
  }else{ 
    comprobador= document.getElementById("mensajeErrorTipoCuenta").textContent = "";
    input.style.border = "2px solid red";
    //alert("hola");
    
  }   
} 




function validarNumeroCasa() {
  const input = this;
  const valor = input.value.trim();

  if (valor === "") {
    document.getElementById("mensajeErrorNumeroCasa").textContent = "Debe elegir entre 1 y 103 casas";
    input.style.border = "2px solid red";
    //alert("hola");
    
  } 
  
  if(valor > 0 && valor < 104){
    document.getElementById("mensajeErrorNumeroCasa").textContent = "";
    input.style.border = "2px solid red";
  }
  
  else {
    document.getElementById("mensajeErrorNumeroCasa").textContent = "Debe elegir de 1 hasta 103";
    input.style.border = "1px solid black";
  }
} 



function validarCedula() {
  const input = this;
  const valor = input.value.trim();

  if (valor.length !== 10) {
    document.getElementById("mensajeErrorCedula").textContent = "Debe ingresar 10 dígitos";
    input.style.border = "2px solid red";
    //alert("hola");
  } else {
    document.getElementById("mensajeErrorCedula").textContent = "";
    input.style.border = "1px solid black";
  }
} 

function validarNombre() {
  const input = this;
  const  valor = input.value.trim();

  if (valor === "") {
    document.getElementById("mensajeErrorNombre").textContent = "El campo Nombre no puede estar vacío.";
    input.style.border = "2px solid red";
    //boton.disabled = true;
  } else {
    document.getElementById("mensajeErrorNombre").textContent = "";
    input.style.border = "1px solid black";
    //boton.disabled = false;
    return valor;
  }
}







function validarApellido() {
  const input = this;
  const valor = input.value.trim();

  if (valor === "") {
    document.getElementById("mensajeErrorApellido").textContent = "El campo Apellido no puede estar vacío.";
    input.style.border = "2px solid red";
    console.log("certado");
  } else {
    document.getElementById("mensajeErrorApellido").textContent = "";
    input.style.border = "1px solid black";
    console.log("certadow");
  }
}


function validarTelefono() {
  const input = this;
  const valor = input.value.trim();

  if (valor.length !==7 && valor.length !== 10) {
    document.getElementById("mensajeErrorTelefono").textContent = "Número mal ingresado";
    input.style.border = "2px solid red";
    console.log("certado");
  } else {
    document.getElementById("mensajeErrorTelefono").textContent = "";
    input.style.border = "1px solid black";
    console.log("certadow");
  }
}


function validarParqueadero() {
  const input = this;
  const valor = input.value.trim();

  if (valor <0 || valor >85 ) {
    document.getElementById("mensajeErrorParqueadero").textContent = "Valor máximo de 85";
    input.style.border = "2px solid red";
    console.log("certado");
  } else {
    document.getElementById("mensajeErrorParqueadero").textContent = "";
    input.style.border = "1px solid black";
    console.log("certadow");
  }
}

function validarMascota() {
  const input = this;
  const valor = input.value.trim();

  if (valor === "seleccion") {
    document.getElementById("mensajeErrorMascota").textContent = "Este campo es obligatorio";
    input.style.border = "2px solid red";
    
  } else {
    document.getElementById("mensajeErrorMascota").textContent = "";
    input.style.border = "1px solid black";
    console.log("certadow");
  }
}

function validarnumeroCarro() {
  const input = this;
  const valor = input.value.trim();

  if (valor <0) {
    document.getElementById("mensajeErrorCarro").textContent = "No se permiten valores negativos";
    input.style.border = "2px solid red";
    //alert("hola");
    
  } 
  
  
  else {
    document.getElementById("mensajeErrorCarro").textContent = "";
    input.style.border = "1px solid black";
  }
} 

function validarEmailCuenta() {
  const input = this;
  const valor = input.value.trim();

  if (valor ==="") {
    document.getElementById("mensajeErrorEmailCuenta").textContent = "Debe ingresar un email. ejemplo: nombre@hotmail.com";
    input.style.border = "2px solid red";
    //alert("hola");
    
  } 
  
  
  else {
    document.getElementById("mensajeErrorEmailCuenta").textContent = "";
    input.style.border = "1px solid black";
  }
}

function validarContrasenia() {
  const input = this;
  const valor = input.value.trim();


  if(valor.length !== 8 ){
    //if (contrasena.length < longitudMinima) {
    document.getElementById("mensajeErrorContrasenia").textContent = "Debe ingresar 8 caracteres";
    input.style.border = "2px solid red";
    //document.getElementById("repetir-contrsenia").disabled = true;
  }
  else{
    document.getElementById("mensajeErrorContrasenia").textContent = "";
    input.style.border = "2px solid red";
    //document.getElementById("repetir-contrsenia").disabled = false;
  }

}




function validarRepetirContrasenia() {
  const input = this;
  const valor = input.value.trim();

  if (valor !== document.getElementById("contrasenia").value) {
    
    document.getElementById("mensajeErrorRepetirContrasenia").textContent = "Las contraseñas no coinciden";
    input.style.border = "2px solid red";
    //alert("hola");
    
  } 
    
  else {
    document.getElementById("mensajeErrorRepetirContrasenia").textContent = "Contraseña correcta";
    input.style.border = "1px solid black";
  }
}


// Verificar si todos los campos están llenos
if(contraseniaValue.length === 8 ){
  //if (contrasena.length < longitudMinima) {
  document.getElementById("repetir-contrasenia").disabled = false;
}
else{
  document.getElementById("repetir-contrasenia").disabled = true;
}

//}


function validar(){
  
  var tipoCuentaValue = document.getElementById("tipoCuenta").value;
  var numeroCasavalue = document.getElementById("numero-casa").value;
  var cedulaValue = document.getElementById("cedula").value;
  var nombreValue = document.getElementById("nombre").value;
  var apellidoValue = document.getElementById("apellido").value;
  var telefonoValue = document.getElementById("telefono").value;
  var parqueaderoValue =  document.getElementById("parqueadero").value;
  var mascotasValue = document.getElementById("mascotas").value;
  var numCarrosValue = document.getElementById("num-carros").value;
  var emailCuentaValue = document.getElementById("email-cuenta").value;
  var contraseniaValue = document.getElementById("contrasenia").value;
  var repetirContraseniaValue = document.getElementById("repetir-contrasenia").value;



  if(contraseniaValue.length === 8 ){
    //if (contrasena.length < longitudMinima) {
    document.getElementById("repetir-contrasenia").disabled = false;
  }
  else{
    document.getElementById("repetir-contrasenia").disabled = true;
  }





if (cedulaValue.length ===10 && tipoCuentaValue !== "" && numeroCasavalue <104 && nombreValue !== "" && apellidoValue !== "" 
&& telefonoValue !== "" && parqueaderoValue !== "" && mascotasValue !== "" && numCarrosValue !== "" && emailCuentaValue!== "" 
&& contraseniaValue === repetirContraseniaValue  )  {
  boton.disabled = false; // Habilitar el botón
} else {
  boton.disabled = true; // Deshabilitar el botón
}
}






