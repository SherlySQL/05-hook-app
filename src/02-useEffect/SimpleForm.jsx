
import { useEffect, useState } from 'react';
import { Message } from './Message';


export const SimpleForm = () => {

    //*************************************************USE STATE********************************************************//

    //#1 Crear Hook useState
        const [formState, setFormState] = useState({
            username: 'Tashira',
            email: 'tashira.clarke@gmail.com'
        });


    //#2 Desestructurar el formState
        const { username, email } = formState;


    //#3 FORMA 1
        // const onInputChange=(event)=> { //del EVENT puedo desestructurar el TARGET
        //     console.log(event.target.name);
        // }


    //#3  FORMA 2
    //Función para hacer el cambio de valores en el state, 
    //cada vez que el input que escribe el user cambia, redibujamos el state
        const onInputChange = ({ target }) => {


            //desestruturamos el objeto target del evento onInputChange
            const { name, value } = target; 
            //console.log({ name, value });


            //Hacemos el cambio de estado
            setFormState({
                ...formState, //mantengo todos los valores
                [ name ]: value //cambia la propiedad "name" de cada input
            });
        }




    //*************************************************USE EFFECT*******************************************************//
    //el useEffect tiene (una funcion callbak interno que retorna) + [] (una dependencia) que se ejecuta cuando se dispara el useffect
    //el useEffect se dispara cada vez que se redibuja el componente, por el cambio de state
    //en este ejercicio creamos 3 efectos (el primero cuando cambia el estado, el 2 solo cuando cambia el form y el 3 el email)
    useEffect( () => { 
        //console.log('useEffect called!');
    }, []);
    
    useEffect( () => {
        //console.log('formState changed!');
    }, [formState]);

    useEffect( () => {
        //console.log('email changed!');
    }, [ email ]);

    

    return (
        <>
            <h1>Formulario Simple</h1> 
            <hr />

            <input 
                type="text" 
                className="form-control"
                placeholder="Sherly"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />

            <input 
                type="email" 
                className="form-control mt-2"
                placeholder="sherly.clarke@gmail.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />


            {
                // if "Si username===strider2, && entonces se va a mostrar Message"
                (username === 'Tashira2' ) && <Message />
            } 

           

        </>
    )
}