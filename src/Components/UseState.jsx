
// this hook allows the user to change the state of the component

import { useState } from "react"


export default function UseState() {

    const [color, setColor] = useState("black")
    const [car, setCar] = useState({
        brand: "Bmw",
        color: "black",
        year: "2026",
        
    })

    const [count, setCount] = useState(0)

    const updateColor = () => {
        setColor("green")
    };

    const changeColor = () => {
        setCar((car) => {
            return {
                ...car, brand:"ferrari",
            }
        })
    }

    const updateCount = () => {
        setCount((prev) => {
            return prev + 1
        })
    }
    return (
        <>
            <div>
                <h1>Hello, useState!</h1>
                <p>This component demonstrates the useState hook.</p>
                <p>My favourite Color is {color}</p>
                <button onClick={updateColor}> green</button>
            </div>

            <div>
                <h1>my favourite ride is {car.brand}</h1>
                <h2>it is the {car.year} {car.color} i want to buy</h2>
                <button onClick={changeColor}>car</button>
            </div>

            <div>
                <h1>Count:{count}</h1>
                <button onClick={updateCount}> Increase</button>
            </div>
        
        </>
    )
}