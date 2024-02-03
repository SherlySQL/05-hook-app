
//EJEMPLO #1
// import { useEffect } from "react";

// export const Message = () => {

//     useEffect(() => { 
//         console.log('Message Mounted'); //Si usuario si existe, se dispara este y se pinta el h3 en el dom
  
//         return () => {
//             console.log('Message Unmounted'); //Si usuario no existe, se dispara este
//         }     
//     }, []);

//   return (
//     <>
//       <h3>Usuario ya existe</h3>
//     </>
//   )
// }




// //EJEMPLO #2
import { useEffect, useState } from "react"

export const Message = () => {
    
    //Para seguir los movimientos del Mouse


    //*************************************************USE STATE********************************************************//
    const [coords, setCoords] = useState({ x: 0, y: 0});




     //*************************************************USE EFFECT*******************************************************//
    useEffect(() => {
      
            const onMouseMove = ({ x, y }) => { //x, y son coordenadas y las estamos desectructurando del (event) onMouseMove
                const coords = { x, y };
                console.log(coords) 
                setCoords({ x, y }) //Actualiza el estado
            }
          
        //First (Funcion)   
        //mousemove=listener que escucha las coordenadas del mov del mouse y onMouseMove=funcion a la que se apunta o llama
        window.addEventListener( 'mousemove', onMouseMove ); 
        
      
      //Second (limpia)
      return () => {
        window.removeEventListener( 'mousemove', onMouseMove );
      }

    }, []); //Third (Dependencias)
    


  return (
    <>
        <h3>Usuario ya existe</h3>

        {/* imprime en el dom el state de las coordenadas convirtiendolas de JSON a string*/}
        { JSON.stringify( coords ) }
    </>
  )
}
