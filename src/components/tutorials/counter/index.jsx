import React from 'react'
import useCounter from '../customHooks/useCounter'

const Counter = () => {
  const [count, increment, decreament ] = useCounter(10)
    
  return (
    <div >
        <button onClick={increment}>increment</button>
        <button onClick={decreament}>decreament</button>
        <p>Counter = ${count}</p>
    </div>
  )
}

export default Counter