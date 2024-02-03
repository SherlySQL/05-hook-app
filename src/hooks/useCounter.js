
//FORMA #1
// import { useState } from "react"

//     export const useCounter = ( initialValue = 10 ) => {

//         //Objeto
//         const [ counter, setCounter ] = useState (initialValue )

//         //funcion #1
//         const increment = () => { setCounter( counter + 1 ); }

//         //funcion #2
//         const decrement = () => { 
//             if (counter === 0 ) return; //para que al llegar a 0 el contador no se pasa a -1, sino que no haga nada se quede en 0
//             setCounter( counter - 1 ); 
//         }

//         //funcion #3
//         const reset = () => { setCounter( initialValue ); }


//     return {
//         counter, //Objeto
//         increment, //funcion
//         decrement, //funcion
//         reset, //funcion
//     }

//  }
 
 

//Usamos en este return {} porque creamos y retornamos un objeto sin nombre con { counter, increment, decrement, reset }
//Tambien pude haber puesto la linea 24 asi
//counterx: counter
//Pero con Emma Script6 puedo obviar poner la propiedad y asignarle un valor asi "counterx: counter"
// y si solo escribo counter, lo toma como propiedad y le asigan por default el valor del objeto counter linea 8






//FORMA #2
import { useState } from "react"

    export const useCounter = ( initialValue = 10 ) => {

        //Objeto Hook
        const [ counter, setCounter ] = useState (initialValue )

        //funcion #1
        const increment = ( value = 2 ) => { setCounter( counter + value ); }
        //counter aumenta de valor de 2 en 2, cada vez que se llama esta función

        //funcion #2
        const decrement = ( value = 1 ) => { //Si el usuario no envia parametro value=1
            if (counter === 0 ) return; //para que al llegar a 0 el contador no se pasa a -1, sino que no haga nada se quede en 0, retorne y se salga
            setCounter( counter - value ); 
        } //counter disminuye de valor de 1 en 1, cada vez que se llama esta función

        
        //funcion #3
        const reset = () => { setCounter( initialValue ); }

        
    // Usamos {} por ser .js
    return {
        counter, //Objeto
        increment, //funcion
        decrement, //funcion
        reset, //funcion
    }

 }