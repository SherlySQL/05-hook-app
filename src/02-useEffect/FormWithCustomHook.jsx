
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {

    //Establecemos los parametros de useForm en su punto inicial = ""
    //Mandamos a llamar a la funcion onResetForm para poder usar el boton borrar 
    const { formState, onInputChange, onResetForm} = useForm (
        {
            username: '',
            email: '',
            password: ''
        } 
    );

    //Desestructuramos
    const {username, email, password} = formState;  

    //Mandamos a Pintar en el Dom 
    //Usamos <> por ser .jsx
    return (
        <>
            <h1>Formulario con Custom Hook</h1> 
            <hr />
            <input 
                type="text" 
                className="form-control"
                placeholder="Nombre"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />
            <input 
                type="email" 
                className="form-control mt-2"
                placeholder="E-mail"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />
            <input 
                type="password" 
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={ password }
                onChange={ onInputChange }
            />

            <button onClick={onResetForm} className='btn btn-primary mt-3'>Borrar</button>
        </>
    )
}
