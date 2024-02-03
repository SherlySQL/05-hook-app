import { useRef } from 'react';

export const FocusScreen = () => {

    //Creamos el Hook useRef
    const inputRef = useRef(); 


    //Creamos una función "onClick"
    //que llama al inputRef del useRef, indicandole que seleccione el elemento que tiene ref=inputRef 
    const onClick = () => {
        inputRef.current.select(); // Esta es la forma nueva con hooks para darle el focus a un input
        console.log(inputRef); //aqui podemos imprimir en consola para ver que nos trae el useRef 
    }


    //Esta era la forma sin Hooks para darle el focus a un input
    //const onClick = () => {
    // document.querySelector('input').select(); 
    //}


  return (
    <>
        <h1>Focus Screen</h1>
        <hr />

        <input 
            ref={ inputRef } //aqui indicamos que este input es el que tiene el ref=inputRef
            type="text" 
            placeholder="Ingrese su nombre"
            className="form-control"
        />

        <button 
            className="btn btn-primary mt-2"
            onClick={ onClick }
        >
            {/*Aqui le decimos que le de el foco al elemento que tiene el ref=inputRef */}
            Set focus
        </button>

    </>
  )
}