let botonDiv = document.getElementById("botonDiv");
botonDiv.addEventListener("click", crearDiv);

let divPadre = document.getElementById("divPadre");
    

function crearDiv(){
    console.log("en crear");
   let itemNuevo = document.createElement("div");
    itemNuevo.innerHTML="Div 1";

    let claseRandom = Math.floor((Math.random() * (5 - 1 + 1)) + 1);
    let clase = "clase"+claseRandom;
    itemNuevo.classList.add(clase);
    divPadre.appendChild(itemNuevo);
  
}

/*
math random aca te da un valor y ese valor lo usas para armar tu clase 
​
let claseAleatoria = "clase"+"valor que te vino del math random";
​
item.classList.add(claseAleatoria)*/