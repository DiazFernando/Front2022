let btnGuardar = document.getElementById("botonGuardar");
btnGuardar.addEventListener("click",guardarTarea);

let btnLimpiar = document.getElementById("botonLimpiar");
btnLimpiar.addEventListener("click",limpiarLista);

let lista = document.querySelector(".lista");
let input = document.getElementById("inputLista");

let titulo = document.getElementById("titulo");


function guardarTarea(){
    let tarea = document.createElement("li");
    tarea.innerHTML = inputLista.value;
    lista.appendChild(tarea);
}

function limpiarLista(){
    lista.innerHTML = " ";
}

titulo.classList.add("titulo");
input.classList.add("input");