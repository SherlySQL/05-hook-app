

import { useEffect, useState } from "react";
//AQUI SE USANDO MULTIPLES HOOKS

export const useFetch = ( url ) => {

    //******************Creamos este Hook "useState" para Evaluar el estado de la data que viene del Api*************************//
        const [state, setState] = useState({
            data: null, //cuando se inicializa el hook, la data esta vacia, por ello va en "null"
            isLoading: true, //por defecto cuando se inicializa el hook, estoy cargando, por ello isLoading es igual a "true"
            hasError: null, //hasError va por defecto en "null", porque no tengo ningun error
        })


    //******************************************Peticion Promesa Asyncrona "getfetch"********************************************************************************
    //Recordar que el fetch es de Javascript para el manejo de Promesas Api
    //Que React utiliza Axios para el manejo de Api
    //Recordar que asyncrono no sucede en le mismo tiempo   
        const getFetch = async () => {

                //PASO #1
                setState({
                    ...state, //Desestructuramos todo el state actual
                    isLoading: true,
                });

                //PASO #2
                const resp = await fetch (url);
                const data = await resp.json();
                console.log(data);  //getFetch imprime la data del Api en consola 


                //PASO #3
                //si llamo al setState tengo que llamar a cada una de sus propiedades
                setState({
                    data, // Aqui se carga en la variable DATA: la data prometida con el fetch del Api
                    //data: data, //la linea anterior tambien la puedo poner asi 
                    isLoading: false, //termino el proceso ya no estamos cargando por ello isLoading va en "false"
                    hasError: null, //no hay error por hasError ello va "null"
                });
        }

    //*****************************************El useEffect dispara el getFetch****************************************************************************
        useEffect(() => {
                    
            getFetch(); //Llamamos la peticion fetch o promesa, //Tipo observable o listener

        }, [url]) // si lo pongo a llamar algún elemento, se dispara cada vez que ese elemento tiene un evento


  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  }; 
  
}

