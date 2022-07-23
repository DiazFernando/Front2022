let btn_nombre = document.getElementById("btn_nombre");
btn_nombre.addEventListener("click",mostrar);

let nombre = "anonimo"

function mostrar() {
    let nombre = "anonimo";
    let inputNombre = document.getElementById("inputNombre");
    nombre = inputNombre.value;

    alert("Bienvenido " + nombre);
}