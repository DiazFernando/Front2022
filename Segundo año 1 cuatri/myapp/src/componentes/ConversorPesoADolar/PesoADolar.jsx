import React, {useState} from "react";

function PesoADolar(){
    const [peso, setPeso] = useState('');

    
}

function PesoADolar(){
    const [peso, setPeso] = useState('');

    return (
        <div>
            <h2>Conversor de pesos a dólares</h2>
            <input 
            type="number" 
            value={peso}
            onChange={(e)=>setPeso(e.target.valeu)}
            style={{width:'12rem'}}
            />
            <h4>{peso ? `${peso} pesos equivalen a ${convertirADolar(peso)} dólares` : 'Ingrese los pesos a convertir'</h4>
        </div>
    )
}