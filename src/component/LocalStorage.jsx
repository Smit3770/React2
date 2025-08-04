import React, { useEffect, useState } from 'react'

export default function LocalStorage() {
    const sorted = JSON.parse(localStorage.getItem("user")) || []
    const [state, setState] = useState('')
    const [text, setText] = useState(sorted)
    const [edit, setEdit] = useState(null)

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(text))
    }, [text])

    function addText(e) {
        setState(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (edit !== null) {
            const updateText = [...text]
            updateText[edit] = state
            setText(updateText)
            setEdit(null)
        }
        else {
            setText([...text, state])
        }
        setState('')
    }

    function handleDelete(i) {
        var newArr = [...text]
        newArr.splice(i, 1)
        setText(newArr)
    }

    function handleEdit(i) {
        setState(text[i])
        setEdit(i)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={state} onChange={addText} />
                <input type="submit" />
            </form>
            <p>{
                text.map((el, i) => {
                    return <>
                        <li>{el}</li>
                        <button onClick={() => handleEdit(i)}>Edit</button>
                        <button onClick={() => handleDelete(i)}>Del</button>
                    </>

                })
            }</p>
        </div>
    )
}
