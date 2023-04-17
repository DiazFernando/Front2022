import { useState } from "react"
import Card from "../Card/Card";

const MyForm = () => {
    const [nombre,setNombre] = useState ('');
    const [apellido,setApellido] = useState ('');
    const [dni,setDni] = useState('');
    const [ciudad,setCiudad] = useState('');
    const [comentario,setComentario] = useState('');

    const [personas, setPersonas] = useState ([]);
    
     const handleSubmit = (e) =>{
        e.preventDefault();

        setPersonas([...personas,{nombre,apellido,dni,ciudad,comentario}]);
        setNombre('');
        setApellido('');
        setDni('');
        setCiudad('');
        setComentario('');
        console.log(personas);
    } 

    return(
        <>
         <div className="form">
            <form onSubmit={handleSubmit}>
                <label>Nombre: 
                    <input type="text" pattern="[A-Za-z]*" value={nombre} onChange={(e)=>{setNombre(e.target.value)}} placeholder="Nombre"/>
                </label>

                <label>Apellido: 
                    <input type="text" pattern="[A-Za-z]*" value={apellido} onChange={(e)=>{setApellido(e.target.value)}} placeholder="Apellido"/>
                </label>

                <label>DNI: 
                    <input type="text" pattern="[0-9]*" value={dni} onChange={(e)=>{setDni(e.target.value)}} placeholder="DNI"/>
                </label>

                <label>Ciudad: 
                    <input type="text" pattern="[A-Za-z]*" value={ciudad} onChange={(e)=>{setCiudad(e.target.value)}} placeholder="Ciudad"/>
                </label>

                <label>Comentario: 
                    <textarea type="text" value={comentario} onChange={(e)=>{setComentario(e.target.value)}} placeholder="Deja tu comentario aqui"/>
                </label>

                <button type="submit">Enviar</button>
            </form>  
            <div>
                {personas.map((persona)=> <Card key={persona.nombre} nombre={persona.nombre} apellido={persona.apellido} dni={persona.dni} ciudad={persona.ciudad} comentario={persona.comentario}/>)}
            </div>
        </div>

        
        </>
    )
}

export default MyForm