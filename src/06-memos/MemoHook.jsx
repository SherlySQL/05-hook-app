import { useMemo, useState } from 'react';
import { useCounter } from '../hooks'

const heavyStuff = ( iterationNumber = 100 ) => {
    for( let i = 0; i < iterationNumber; i++ ) {
        console.log('Ahí vamos...'); 
    }

    return `${ iterationNumber } iteraciones realizadas`;
}


export const MemoHook = () => {

    //Desestructuramos Objeto (counter) y Funcion (increment)
    const { counter, increment } = useCounter( 10 );
    const [ show, setShow ] = useState(true)


    //Hook useMemo
    const memorizedValue = useMemo( 
    
        () => heavyStuff(counter), //Funcion que retorna "Ahí vamos..." hasta el lenght de counter
        
    [counter]) //Dependencias ()


    return (
        <>
            {/* FORMA #1 */}
            {/* Esta seria la forma tradicional */}
            <h1>Counter: <small>{ counter }</small> </h1>   


            {/* FORMA #2 */}
            {/* Small es el componente Hijo que recibe y retorna el value de counter*/}
            {/* <h1>Counter: <Small value={ counter }/> </h1>  */} 

            <hr />
            <h4>{ memorizedValue }</h4>

            
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



