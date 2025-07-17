import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
const Ffetch2 = () => {
    const [state, setState] = useState({
        name: "",
        gender: "",
        image: ""
    })

    useEffect(() => {
        fecthData()
    }, [])

    function fecthData() {
        fetch('https://randomuser.me/api/').then((res) => {
            return res.json()
        }).then((data) => {
            setState({
                name: data.results[0].name.first,
                gender: data.results[0].gender,
                image: data.results[0].picture.medium
            })
        })
    }

    return (
        <div>
            <h1>{state.name}</h1>
            <p>{state.gender}</p>
            <img src={state.image} />

            <button onClick={fecthData}>Fetch</button>
        </div>
    )
}

export default Ffetch2
