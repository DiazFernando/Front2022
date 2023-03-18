let persona = {
    nombre :"Fernando",
    apellido : "Diaz",
    edad : 31,
    dni :36605873
};

console.log(persona.dni);

let persona2 = persona;

console.log(persona);
console.log(persona2);
console.log("------------------");
persona2.apellido = "Villalba";

console.log(persona);
console.log(persona2);
