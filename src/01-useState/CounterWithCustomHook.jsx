import { useCounter } from "../hooks/useCounter";



export const CounterWithCustomHook = () => {

 //Desestructuramos el useCounter que importamos // useCounter retorna un objeto con { counter, increment, decrement, reset }
 const { counter, increment, decrement, reset } = useCounter(); 

  return (
    <>
      <h1 p-5>Counter with Hook: { counter }</h1>

      <hr/>

      <button className='btn btn-primary' onClick={ () => increment(2) }>+1</button>
      <button className='btn btn-secondary' onClick={ reset } >Reset</button>
      <button className='btn btn-danger' onClick={ () => decrement(2)  }>-1</button>
    </>
  )
}


