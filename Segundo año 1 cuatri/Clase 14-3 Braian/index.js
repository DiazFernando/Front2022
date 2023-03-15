let visor = document.querySelector(".visor");
let btn = document.querySelector(".play");
visor=10;

let contador = 10;
let play = () => {
    for (let index = 10; index > 0; index--) {
        contador--;
        visor.innerHTML(20);
        
    }
}

btn.addEventListener("click",play);