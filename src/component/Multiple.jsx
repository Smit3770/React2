import React from 'react'
import { useState } from 'react'
const Multiple = () => {

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


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' onChange={handleChange} />
                <input type="text" name='email' onChange={handleChange} />
                <input type="submit" />
            </form>
            
        </div>
    )
}

export default Multiple
