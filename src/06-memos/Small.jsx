//Se hace asi para importar la funcion Memo
//Esta funcion es para pedirle a react que memorize un value

import React from "react" 

//Este componente recibe un value
//El value que recibe lo desestructuramos y se retorna
export const Small = React.memo(({value}) => {

  console.log ("Me volvi a Dibujar")
  
  return (
    <div>
      <small>{ value }</small>
    </div>
  )
})


