
let nombre = document.getElementById("inputNombre");
nombre.addEventListener("input",mostrar);

function mostrar () {
    console.log(nombre.value);
}