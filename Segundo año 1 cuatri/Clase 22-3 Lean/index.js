async function obtenerPersonajes(){
    let res = await fetch("https://rickandmortyapi.com/api/character");
    let data = await res.json();
    console.log(data);

    //data.results.forEach(element => {
    //    console.log(element.name + " " + element.status);
    //    console.log();
    //});

    let personajes = await data.results.map(personaje => ({nombre: personaje.name, tipo: personaje.type}));

    console.log(personajes);

    console.log(personajes[0].nombre);

    console.log("personaje en MAYUSCULA"); 
    
    // pone los nombres en MAYUSCULAS
    
    let personajes_en_mayuscula = await data.results.map(personajes => personajes.name.toUpperCase());

    console.log(personajes_en_mayuscula);  
    
      // Se filtro los personajes femeninos

    let femenino = await data.results.filter(personaje => personaje.gender == "Female");

    console.log(femenino);

    // Se filtro por nombres femeninos

    let femeninoNombre = await data.results.map(personaje => personaje.name);

    console.log(femeninoNombre);





}

obtenerPersonajes();