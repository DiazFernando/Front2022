let btnLanzar= document.getElementById("lanzar");
btnLanzar.addEventListener("click",lanzarDados);

let container=document.querySelector(".container");

function lanzarDados(){
    let contadorNum7=0;
    let resultado=0;
    for (let i = 0; i < 1000; i++) {
        let dado1=dado();
        let dado2=dado();
        resultado= (dado1)+(dado2);
        if (resultado==7) {
            contadorNum7++
        }
        console.log(dado1,dado2, " = ", resultado);  
    }

    let texto = document.createElement("p");
        texto.innerHTML = "El numero SIETE salio " + contadorNum7 + " veces";
        container.appendChild(texto);
}
function dado(){
    let dado = Math.floor(Math.random()* (6 - 1 + 1) + 1);
    return(dado);
    
}
