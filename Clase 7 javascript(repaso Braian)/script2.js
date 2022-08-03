let btnTogglear = document.getElementById("botonTogglear");
btnTogglear.addEventListener("click",togglear);

function togglear(){
    let element = document.querySelector(".edad");
    element.classList.toggle("ocultar");
}
