import React, { useEffect, useState, useRef } from 'react'

export default function Timer() {
    const [state, setState] = useState(0)
    const id=useRef(0)
    console.log(id)

    function Start(){
        id.current=setInterval(()=>{
            setState((prevState)=>prevState+1)
            console.log(id.current)
        },1000)
    }

    function Stop(){
        clearInterval(id.current)
    }

    return (
        <div>
            <h1>Timer : {state}</h1>
            <button onClick={Start}>Start</button>
            <button onClick={Stop}>Stop</button>
        </div>
    )
}
