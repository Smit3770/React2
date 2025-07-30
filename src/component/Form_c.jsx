import React, { useState } from 'react'

export default function Form_c() {
    const [state, setState] = useState({
        name: '',
        gender: '',
        email: '',
        mobile: '',
        role: ''
    })
    const [list, setList] = useState([])
    const [editIndex, setEditIndex] = useState(null)

    function handleChange(e) {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (!state.name && !state.gender && !state.email && !state.mobile && !state.role) return
        if (editIndex === null) {
            setList([...list, state])
        } else {
            const updated = [...list]
            updated[editIndex] = state
            setList(updated)
            setEditIndex(null)
        }
        setState({ name: '', email: '', gender: '', mobile: '', role: '' })
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
                <h1>FORM (Control)</h1>
                <input type="text" name='name' value={state.name} placeholder='Enter Name' onChange={handleChange} /><br />
                <input type="text" name='email' value={state.email} placeholder='Enter Email' onChange={handleChange} /><br />

                <label>Gender</label>
                <input type="radio" name='gender' value="Male" checked={state.gender === "Male"} onChange={handleChange} />Male
                <input type="radio" name='gender' value="Female" checked={state.gender === "Female"} onChange={handleChange} />Female<br />

                <input type="text" name='mobile' value={state.mobile} placeholder='Enter Contact' onChange={handleChange} /><br />
                <input type="text" name='role' value={state.role} placeholder='Enter Role' onChange={handleChange} /><br />

                <input type="submit" />
            </form>
            <ul>
                {
                    list.map((el, i) => (
                        <div key={i}>
                            <span>Name : {el.name}</span><br />
                            <span>Email : {el.email}</span><br />
                            <span>Gender : {el.gender}</span><br />
                            <span>Contact : {el.mobile}</span><br />
                            <span>Role : {el.role}</span><br />
                            <button onClick={() => handleEdit(i)}>Edit</button>
                            <button onClick={() => handleDelete(i)}>Delete</button>
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}
