
//FORMA #1
// ASI HABIA QUEDADO EL COMPONENTE CUANDO TRABAJAMOS MultipleCustomHooks + Quote
//Aqui Recibimos y Desestructura el quote y el author que vienen del MultipleCustomHooks
// export const Quote = ({quote, author}) => {

//     return (
//         <blockquote className="blockquote text-end">
//             <p className="mb-1">{quote}</p>
//             <footer className="blockquote-footer mt-1"> {author} </footer>

//         </blockquote>
//     )
// }




//FORMA #2
// ASI QUEDÓ EL COMPONENTE CUANDO TRABAJAMOS Layout + Quote
import { useLayoutEffect, useRef, useState } from 'react';


export const Quote = ({ author, quote }) => {

//#1 Creamos el Hook useRef *******************************************************************************************
  const pRef = useRef(); 



//#2 Creamos el Hook useState con valores iniciales en 0 **************************************************************
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 }) 



//#3 Creamos el Hook useLayoutEffect ***********************************************************************************
  //Con la finalidad de obtener el size del div (blockquote) cada vez que se termina de renderizar el componente
  useLayoutEffect(() => {
    
    //Desestructuramos el  height, width del pRef que actualmente tiene el focus
    //utilizamos getBoundingClientRect(); elemento de HTML para obtener el tamaño del div (blockquote)
    const { height, width } =  pRef.current.getBoundingClientRect(); 
    setBoxSize({ height, width }); //Cambiamos el valor del useState
    
  }, [quote]) //Cada vez que hay un evento, se dispara el quote (quote es son los parrafos que se pintan en el dom)
  //En este caso funciona bien sin poner aqui la dependiencia qoute, es opcional ponerlo (en este caso)
  



  return (
    <>
      <blockquote 
        className="blockquote text-end"
        style={{ display: 'flex' }} //asi queda dinamico y lo puedo moficicar desde un state 
        // style="display: 'flex'"  puede haber puesto esto asi de forma tradicional, pero queda estatico
      >
          {/* asi se vincula el quote para que este parrafo que es el que esta cambiando de tamaño tome el focus con el ref={ pRef } */}
          <p ref={ pRef } className="mb-1">{ quote }</p>
          <footer className="blockquote-footer"> { author } </footer>
      </blockquote>

      {/* dentro de esta etiqueta code se pinta en el dom el valor del state boxSize */}
      <code>{ JSON.stringify(boxSize) }</code>
    </>
  )
}