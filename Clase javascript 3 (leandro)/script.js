let lista = document.getElementById("lista");
let boton = document.getElementById("btn_agregar");
let input = document.getElementById("inputLista");

function agregarTarea (){
   let elemento = document.createElement("li");
   elemento.innerHTML = inputLista.value;
   lista.appendChild(elemento); 
}


