//Se creo un objeto

/*let persona = {
    nombre: "Lucas",
    apellido: "Martinéz",
    edad: 47,
    sexo: 'M',
    dni: 34483889,
    hijos: ["Ana","Marcos"]
}

console.log(persona.nombre);

let persona2 = persona;
persona2.nombre = "Alicia";

console.log(persona2.nombre);



let data = {
    "empresa":"TDF",
    "empleados" : [
        {
            "nombre":"Fernando",
            "apellido":"Diaz",
            "dni":"11111111"
        },
        {
            "nombre":"Maximiliano",
            "apellido":"Fernandez",
            "dni":"22222222"
        },
        {
            "nombre":"Luis",
            "apellido":"Zapata",
            "dni":"33333333"
        }
    ]
}
*/


let listaJs = document.getElementById("listaJs");

let elemento1 = document.createElement("li");
let elemento2 = document.createElement("li");
let elemento3 = document.createElement("li");

elemento1.innerHTML = "TEXTO 1";
elemento2.innerHTML = "TEXTO 2";
elemento3.innerHTML = "TEXTO 3";

listaJs.appendChild(elemento1);
listaJs.appendChild(elemento2);
listaJs.appendChild(elemento3);
