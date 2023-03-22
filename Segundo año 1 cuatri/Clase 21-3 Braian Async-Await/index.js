let btnConsulta = document.getElementById("consultarAPI");

btnConsulta.addEventListener("click",verInfo);

let titulo = document.getElementById("frase");

let url = "https://api.open-meteo.com/v1/forecast?latitude=-54.82&longitude=-68.36&hourly=temperature_2m,apparent_temperature,precipitation,windspeed_10m&timezone=America%2FSao_Paulo";

async function verInfo(){
    try{
        let respuesta = await fetch(url);
        if(respuesta.ok){
            let aux = await respuesta.json();
            console.log(aux);
            titulo.innerHTML = aux.hourly.time[1];
        }
    }catch{
        console.log("Error al obtener los datos");
    }
}