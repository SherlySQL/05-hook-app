
import { useFetch, useCounter } from '../hooks'//importamos con ARCHIVO BARRIL index.js (Directorio hooks)
import { LoadingQuote, Quote } from '../03-examples'; //importamos con ARCHIVO BARRIL index.js (Directorio 03-examples)


export const Layout = () => {


    //*************************************************DESESTRUCTURACION DE HOOKS IMPORTADOS********************************************************//  
    
    //Desestructuramos de useCounter (el contador del useState y la función increment y decrement que vienen del useCounter.js)
    const { counter, increment, decrement} = useCounter (8) //al useCounter le mandamos como parametro 8 por ellos counter=8 al inicializarlo

    //Desestructuramos useFetch
    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`); //como counter=8 la data va a mostrar 8 arreglos al inicio
    //console.log({ data, isLoading, hasError }) // Usamos counter en bakticks para ir aumentando counter y con ello el length de objeto data

    //Desestructuramos la data 
    //Aqui hacemos una evaluacion de 2 booleanos (!!data=false) y (data[3]=true)
    const { author, quote } = !!data && data[3]; //Si la data tiene un valor, entonces toma la data en la posicion 3, !! doble negacion es = false
    //Por mas que counter aumente su valor aumentado la cantidad de registros a mostrar con data, la posicion que se va a mostrar es la 3 en el DOM



  return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr />

        {/*****************************************************************Aca abajo hacemos un ternario*********************************************************************/}
        {
           isLoading  
           ? <LoadingQuote/> //si isLoading=true muestra esta primera condicion y si es false la segunda condicion       
           : <Quote author={author}  quote={quote}/> //Aqui enviamos los datos (author, quote) a otro Componente           
        }



        {/**********************************************************************BOTONES**************************************************************************************/}

        {/* En el onclick creamos una funcion anonima () la cual va a retornar increment ()  */}
        {/* como increment lo mandamos sin parametro el toma el valor que hay en useCounter.js por default  */}
        {/* counter iniciaba=8, pero como en useCounter.js se aumenta en 2, ahora van a aparecer en la segunda vez 10 registros de data y asi sucesivamente */}
        <button className="btn btn-primary mb-2" onClick={ () => increment () } >
            Next quote
        </button>


        {/* En el onclick creamos una funcion anonima () la cual va a retornar decrement ()  */}
        {/* como decrement lo mandamos sin parametro el toma el valor que hay en useCounter.js por default  */}
        {/* el valor del counter va a disminuir de 1 en 1 porque asi se indica en el useCounter.js  */}
        <button className="btn btn-danger mb-2" onClick={ () => decrement () } >
          Previous quote
        </button>
          
    </>
  )
}


