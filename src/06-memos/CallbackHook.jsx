import { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    //o********************************************useState**********************************************
    const [counter, setCounter] = useState( 10 );

    //o********************************************useCallback**********************************************
    //Sirve para memorizar funciones y Retorna una Función que yo puedo ejecutar
    //Pero esa función solo se va a volver a procesar cuando algo cambie 
    const incrementFather = useCallback(

        //este es el Callback que queremos ejecutar 
        // c=counter
        
                (value) => { // este value=5, aqui se ponen todos los parametros o argumentos y se pueden desestrcuturar
                    
                    setCounter( (c) => c + value ); //Callback con argumento
            
                    // setCounter ((value)) => value + 1); //Callback con argumento

                    // setCounter ( counter + 1); //Callback sin argumento
      },
      [], //Dependencias
    );

    //o********************************************useEffect**********************************************
    useEffect(() => {
      // incrementFather();
    }, [incrementFather])
      
    //FORMA #1 
    //Creamos una funcion para incrementar counter
    // const incrementFather = () => {
    //     setCounter( counter + 1);
    // }


    return (
        <>
            <h1>useCallback Hook: { counter } </h1>
            <hr />

            {/* increment=nombre de la Props, incrementFather=es el valor que envío a la Props */}
            <ShowIncrement increment={ incrementFather } />
        </>
    )
}
