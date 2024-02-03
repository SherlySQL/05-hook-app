
import { useState } from 'react';

export const useForm = ( initialForm = {} ) => { //Esta funcion recibe como parametro un formulario 

    //*************************************************USE STATE********************************************************//

            //PASO #1 Crear Hook useState
            const [formState, setFormState] = useState( initialForm );


            //PASO #2 FORMA 1
            // const onInputChange=(event)=> { //del EVENT puedo desestructurar el TARGET
            //     console.log(event.target.name);
            // }


            //PASO #2  FORMA 2
            //Función para hacer el cambio de valores en el state, 
            //cada vez que el input que escribe el user cambia, redibujamos el state
            const onInputChange = ({ target }) => {


                //desestructuramos el objeto target del evento onInputChange
                const { name, value } = target;
                //console.log({ name, value });


                //Hacemos el cambio de estado
                setFormState({
                    ...formState, //mantengo todos los valores
                    [name]: value //cambia la propiedad "name" de cada input
                });
            }



  
   //******************************************** FUNCION RESET FORM ***********************************************************/        

   //Funcion Para Limpiar los valores del Formulario a = "" (Reset)  
    const onResetForm = () => { setFormState ( initialForm ); }      
 



 // Usamos {} por ser .js
  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm, //Funcion
  }
}


