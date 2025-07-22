import React from 'react'
import { useState } from 'react'


export default function Todu_task() {
    const [state, setState] = useState({
        name: '',
        email: ''
    })
    const [list, setList] = useState([])
    const [editIndex, setEditIndex] = useState(null)

    function handleChange(e) {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (!state.name && !state.email) return
        if (editIndex === null) {
            setList([...list, state])
        } else {
            const updated = [...list]
            updated[editIndex] = state
            setList(updated)
            setEditIndex(null)
        }
        setState({ name: '', email: '' })
    }

    function handleDelete(i) {
        const updatedList = list.filter((item, index) => index !== i)
        setList(updatedList)
    }

    function handleEdit(i) {
        setState(list[i])
        setEditIndex(i)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>FORM</h1>
                <input type="text" name='name' value={state.name} placeholder='Enter Name' onChange={handleChange} /><br />
                <input type="text" name='email' value={state.email} placeholder='Enter Email' onChange={handleChange} /><br />
                <input type="submit" />
            </form>
            <ul>
                {
                    list.map((el, i) => (
                        <div key={i}>
                            <span>Name : {el.name}</span><br />
                            <span>Email : {el.email}</span><br />
                            <button onClick={() => handleEdit(i)}>Edit</button>
                            <button onClick={() => handleDelete(i)}>Delete</button>
                            <br />
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}
