let lista = document.getElementById("lista");
let boton = document.getElementById("btn_agregar");
let input = document.getElementById("inputLista");

function agregarTarea (){
   let elemento = document.createElement("li");
   elemento.innerHTML = inputLista.value;
   lista.appendChild(elemento); 
}

let divParrafo = document.getElementById("divParrafo");
let boton2 = document.getElementById("agregarP");
let input2 = document.getElementById("inputParrafo");

function agregarTexto(){
    let texto = document.createElement("p");
    texto.innerHTML = inputParrafo.value;
    divParrafo.appendChild(texto);
}