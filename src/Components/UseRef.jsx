// useRef hook is a react hook that allows us to create mutable variables, which will not re-render the component itself
// useRef is also used for accessing dom Elements
// useRef is used to store the previous value of a state or prop

import { useEffect, useRef, useState } from "react"


export default function UseRef() {

    const [value, setValue] = useState(0)
    const count = useRef(0)

    useEffect(() => {
        count.current = count.current + 1
    })
    // const [count, setCount] = useState(0)

    // useEffect(() => {
    //     setCount(prev => prev+1)
    // })
    return (
      <>
        <button onClick={() => setValue((prev) => prev-1)}>-1</button>
        <h1>{value}</h1>
            <button onClick={() => setValue((prev) => prev + 1)}>+1</button>
            
            <h1>Render Count:{count.current}</h1>
      </>
    );
}