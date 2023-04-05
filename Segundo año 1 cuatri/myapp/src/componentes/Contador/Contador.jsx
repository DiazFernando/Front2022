import { useState } from "react"

export const Contador = () => {
    const[name, setName] = useState("Haga click en el boton para ingresar su nombre");

    function modificarNombre(){
        setName(prompt("Ingrese su nombre"));
    }
  
    return (
    <div> 
    <button onClick={modificarNombre}>Ingresar nombre</button>
    <h1>Hola! {name} </h1>
    </div>
    )
}