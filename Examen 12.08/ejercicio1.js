
let primerNumero = document.getElementById("num1");

let segundoNumero = document.getElementById("num2");


let botonSumar = document.getElementById("suma");
botonSumar.addEventListener("click", sumar);

let botonRestar = document.getElementById("resta");
botonRestar.addEventListener("click", restar);


mostrarResultado= document.querySelector(".resultado");

function sumar(){

    let resultado = parseInt(primerNumero.value) + parseInt(segundoNumero.value);
    let mostrar = document.createElement("p");
    mostrar.innerHTML = "la suma de " + primerNumero.value + " + " + segundoNumero.value + " = " + resultado;
    mostrarResultado.appendChild(mostrar);
}


function restar(){
    let resultado = parseInt(primerNumero.value) - parseInt(segundoNumero.value);
    let mostrar = document.createElement("p");
    mostrar.innerHTML = "la resta de " + primerNumero.value + " - " + segundoNumero.value + " = " + resultado;
    mostrarResultado.appendChild(mostrar);
}

titulo.classList.add("titulo");
primerNumero.classList.add("input");
segundoNumero.classList.add("input");


