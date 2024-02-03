import { useState } from "react"


//EJEMPLO #1
// export const CounterApp = () => {

//     const [counter, setCounter] = useState(10)

//   return (
//     <>
//       <h1>Counter: { counter }</h1>
//       <hr/>
//       <button className='btn btn-danger' onClick={ () =>setCounter (counter + 1 )  }>+1</button>
//     </>
//   )
// }



//EJEMPLO #2 FORMA 1 DE RESOLVER 
// export const CounterApp = () => {

//     //Desestructuramos el objeto State el cual tiene 3 propiedades
//     const [{counter1, counter2, counter3}, setCounter] = useState ({
//         counter1:10,
//         counter2:20,
//         counter3:30,
//     });


//   return (
//     <>
//       <h1>Counter: { counter1 }</h1>
//       <h1>Counter: { counter2 }</h1>
//       <h1>Counter: { counter3 }</h1>
//       <hr/>


//       <button className='btn btn-danger' onClick={ () =>setCounter ({
//             //solo la propiedad 1 cambia de valor
//             counter1: counter1 + 1,
//             counter2: counter2, 
//             counter3: counter3,
//          })  

//         }>+1</button>
//     </>
//   )
// }




//EJEMPLO #2 FORMA 2 DE RESOLVER 
export const CounterApp = () => {

    
    const [state, setCounter] = useState ({
        counter1:10,
        counter2:20,
        counter3:30,
    });


    //Desestructuramos el objeto State el cual tiene 3 propiedades
    const {counter1, counter2, counter3} = state;


  return (
    <>
      <h1>Counter: { counter1 }</h1>
      <h1>Counter: { counter2 }</h1>
      <h1>Counter: { counter3 }</h1>
      <hr/>


      <button className='btn btn-danger' onClick={ () =>setCounter ({
            //exparcimos con spred todos los valores del objeto state
            ...state,
            //y solo la propiedad 1 cambia de valor
            counter1: counter1 + 1,
         })  
         
        }>+1</button>
    </>
  )
}
