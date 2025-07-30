import React, { useEffect, useRef, useState } from 'react'

export default function Speed() {
    const [text,setText]=useState('')
    const [wpm,setwpm]=useState(0)
    const [second,setSecond]=useState(0)
    const [showResult,setShowResult]=useState(false)
    const timer=useRef(null)

    function handleChange(e){
        setText(e.target.value)
        if(!timer.current){
            timer.current=setInterval(()=>{
                setSecond(s=>s+1)
            },1000)
        }
    }

    function handleSubmit(){
        clearInterval(timer.current)
        timer.current=null
        setShowResult(true)

        setTimeout(()=>{
            setShowResult(false)
            setText(' ')
        },3000)
    }

    useEffect(()=>{
        const words=text.trim().split().length
        if(second>0){
            setwpm(Math.round((words/second)*60))
        }
    }) 

    const char=text.replace(/\s/g,'').length
    
    return (
        <div>
            <textarea value={text} onChange={handleChange} placeholder='Enter text'></textarea>
            <button onClick={handleSubmit}>Submit</button>
            {
                showResult &&(
                    <>
                        <p>WPM:{wpm}</p>
                        <p>Character:{char}</p>
                        <p>Time:{second}seconds</p>
                    </>
                )
            }
        </div>
    )
}
