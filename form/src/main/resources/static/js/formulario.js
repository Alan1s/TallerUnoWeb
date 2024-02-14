var nombreValido = false,  apellidoValido = false, correoValido = false, semestreValido = false, descripcionValido = false;

function validarNombres(evento){
const nombres = evento.target.value;
const spanError = document.getElementById("mensajesErrorNombre");
const contadorNombres = document.getElementById("contadorNombre"); 
const maxLongitud = 100;

contadorNombres.textContent = `${nombres.length}/${maxLongitud}`;

if (nombres.length > maxLongitud){
    spanError.classList.remove("ocultar");
    nombreValido = false;
}
else{
    spanError.classList.add("ocultar");
    nombreValido = true;
}
}
const inputName = document.getElementById("nuevoNombre")
inputName.addEventListener("input", validarNombres);

function validarApellidos(evento){
const apellidos = evento.target.value;
const spanError = document.getElementById("mensajesErrorApellido");
const contadorApellido = document.getElementById("contadorApellido"); 
const maxLongitud = 100;

contadorApellido.textContent = `${apellidos.length}/${maxLongitud}`;

if (apellidos.length > maxLongitud){
    spanError.classList.remove("ocultar");
    apellidoValido = false;
}
else{
    spanError.classList.add("ocultar");
    apellidoValido = true;
}
}
const inputApellido = document.getElementById("nuevoApellido")
inputApellido.addEventListener("input", validarApellidos);

function validarCorreos(evento){
const correo = evento.target.value;
const spanError = document.getElementById("mensajesErrorCorreos");
const regexCorreo = /^[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,}$/;
const contadorCorreo = document.getElementById("contadorCorreo"); 
const maxLongitud = 100;

contadorCorreo.textContent = `${correo.length}/${maxLongitud}`;

if(correo === ''){
    spanError.classList.add("ocultar");
    correoValido = false;
}
else if (correo.length > maxLongitud || !regexCorreo.test(correo)){
    spanError.classList.remove("ocultar");
    correoValido = false;
} else {
    spanError.classList.add("ocultar");
    correoValido = true;
}
}
const inputCorreo = document.getElementById("nuevoCorreos");
inputCorreo.addEventListener("input", validarCorreos);

function validarSemestre() {
const semestreSeleccionado = document.getElementById("nuevoSemestres").value;
const spanErrorSemestres = document.getElementById("mensajesErrorSemestres");

if (semestreSeleccionado === "0") {
    // Muestra el mensaje de error
    spanErrorSemestres.classList.remove("ocultar");
} else {
    // Oculta el mensaje de error
    spanErrorSemestres.classList.add("ocultar");
}
}
// Añadir el event listener al select
const selectSemestre = document.getElementById("nuevoSemestres");
selectSemestre.addEventListener("change", validarSemestre);

function validarDescripcion() {
const descripcion = document.getElementById("nuevaDescripcion").value;
const mensajeErrorDescripcion = document.getElementById("mensajeErrorDescripcion");

if (descripcion.trim() === '') {
    mensajesErrorDescripcion.classList.remove("ocultar");
    descripcionValida = false;
} else {
    mensajesErrorDescripcion.classList.add("ocultar");
    descripcionValida = true;
}
}

const textAreaDescripcion = document.getElementById("nuevaDescripcion");
textAreaDescripcion.addEventListener("input", validarDescripcion);