import { useState } from 'react';
import { useCounter } from '../hooks'
import { Small } from './Small';

export const Memorize = () => {

    //Desestructuramos Objeto (counter) y Funcion (increment)
    const { counter, increment } = useCounter( 10 );
    const [ show, setShow ] = useState(true)

    return (
        <>
            {/* FORMA #1 */}
            {/* Esta seria la forma tradicional */}
            {/* <h1>Counter: <small>{ counter }</small> </h1>   */}


            {/* FORMA #2 */}
            {/* Small es el componente Hijo que recibe y retorna el value de counter*/}
            <h1>Counter: <Small value={ counter }/> </h1>   

            <hr />

            
            <button
                className="btn btn-primary"
                onClick={ () => increment() } //Tenemos que llamar de esta manera la funcion increment() porque estamos enviando un argumento
            >
                +1
            </button>



            <button
                className="btn btn-outline-primary"
                onClick={ () => setShow( !show )  }
            >
                {/* Se usa stringify, porque show es un valor Boleano y sin pasarlo a string no se podria mostrar  */}
                Show/Hide { JSON.stringify(show) } 
            </button> 
        
        </>
    )
}



