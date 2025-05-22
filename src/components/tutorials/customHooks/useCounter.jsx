import { useState } from 'react'

const useCounter = (initialValue) => {
    const [count, setCount] = useState(initialValue)

    const increment = () => {
        setCount(count + initialValue)
    }
    const decreament = () => {
        setCount(count - initialValue)
    }
    return [count, increment, decreament]
}

export default useCounter