import React, { useRef, useState } from 'react';

export default function Form_uc() {
    const nameref = useRef(null);
    const emailref = useRef(null);
    const displayref = useRef(null);
    const [items, setItems] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        const name = nameref.current.value;
        const email = emailref.current.value;

        if (!name || !email) return;

        if (editIndex !== null) {
            const updatedItems = [...items];
            updatedItems[editIndex] = { name, email };
            setItems(updatedItems);
            setEditIndex(null);
        } else {
            setItems([...items, { name, email }]);
        }

        nameref.current.value = '';
        emailref.current.value = '';
    }

    function handleEdit(index) {
        const item = items[index];
        nameref.current.value = item.name;
        emailref.current.value = item.email;
        setEditIndex(index);
    }

    function handleDelete(index) {
        const updatedItems = [...items];
        updatedItems.splice(index, 1); 
        setItems(updatedItems);

        if (editIndex === index) {
            nameref.current.value = '';
            emailref.current.value = '';
            setEditIndex(null);
        }
    }

    return (
        <div>
            <h2>Todo App (Uncontrolled)</h2>
            <form onSubmit={handleSubmit}>
                Name: <input type="text" ref={nameref} /><br /><br />
                Email: <input type="text" ref={emailref} /><br /><br />
                <button type="submit">{editIndex !== null ? 'Update' : 'Add'}</button>
            </form>

            <div ref={displayref}>
                {items.map((item, index) => (
                    <div key={index}>
                        <p>Name: {item.name}</p>
                        <p>Email: {item.email}</p>
                        <button onClick={() => handleEdit(index)}>Edit</button>
                        <button onClick={() => handleDelete(index)}>Delete</button>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
}
