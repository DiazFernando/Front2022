import React, {
    useEffect,
    useState,
  } from 'react';
  
  export const Contador = () => {
      const [count,setCount] = useState(0);
      const [message, setMessage] = useState('')
  
      const incrementar = () =>{
        setCount(count+1);
      }

      useEffect(()=>{
        
          if (count===0){
             setMessage("Has click en el boton para comenzar a contar");
             } else {
              setMessage("El contador está en:" `${count}`)
             } 
                     
      },)
    
  
  
      return (  
        <div>
        <h1>Contador</h1>
        <h3>{message}</h3>
        <button onClick={incrementar}> Incrementar</button>
        </div>
    )
}