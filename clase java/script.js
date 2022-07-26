let btn_nombreCompleto = document.getElementById("btn_nombreCompleto");
btn_nombreCompleto.addEventListener("click",saludar,obtenerDatos);
btn_nombreCompleto.addEventListener("click",obtenerDatos);

let nombre = "anonimo";
let apellido = "anonimo";
let edad = 0;

function saludar() {
    let nombre = "anonimo";
    let apellido = "anonimo";
    let inputNombre = document.getElementById("inputNombre");
    let inputApellido = document.getElementById("inputApellido");
    nombre = inputNombre.value;
    apellido = inputApellido.value;

    alert("Bienvenido " + nombre + " " + apellido);
}

function obtenerDatos() {
    let nombre = "anonimo";
    let apellido = "anonimo";
    let edad = 0;
    let inputNombre = document.getElementById("inputNombre");
    let inputApellido = document.getElementById("inputApellido");
    let inputEdad = document.getElementById("inputEdad");
    nombre = inputNombre.value;
    apellido = inputApellido.value;
    edad = inputEdad.value;

    console.log(nombre, apellido, edad);
}