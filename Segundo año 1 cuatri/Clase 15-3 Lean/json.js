//archivo JSON a objeto Js

let data = `{
    "empresa":"TDF",
    "empleados":[
        {
            "nombre":"Fernando",
            "apellido":"Diaz"
        },
        {
            "nombre":"Luis",
            "apellido":"Zapata"
        },
        {
            "nombre":"David",
            "apellido":"Fernandez"
        }
    ]
}`

let datos = JSON.parse(data);
//"consulto los datos JSON obtenidos")
console.log(datos);

console.log("----------");

//"consulto los empleados obtenidos del JSON"
console.log(datos.empleados);

console.log("----------");

//"consulto al empleado en posición 1 obtenidos del JSON"
console.log(datos.empleados[1]);

console.log("----------");

//Objeto Js a archivo JSON

let newData ={ 
    empleados:[
        {
            nombre :"Sofia",
            apellido : "Villalba",
            edad : 29,
            dni :1111111
        },
        {
            nombre :"Bernardo",
            apellido : "Fiori",
            edad : 33,
            dni :22222222
        },
        {
            nombre :"Mariana",
            apellido : "Orzusa",
            edad : 50,
            dni :3333333
        }
    ]
}

let dataJSON = JSON.stringify(newData);

console.log(dataJSON.empleados);