
import React from 'react';

//"increment" es el valor que viene de las Props y lo desestructuramos 
//Aqui usamos la Función "memo" para memorizar el valor que viene de las props
export const ShowIncrement = React.memo( ({ increment }) => {

    console.log(' Me volví a generar :( ');

    return (
        <button
            className="btn btn-primary"
            onClick={() => {
                increment( 5 );
            }}
        >
            Incrementar
        </button>
    )
})

