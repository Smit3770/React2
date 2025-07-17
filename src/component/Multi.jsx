import React, { useState } from 'react';

const Multi = () => {
    const [test, setState] = useState('');

    function handle(e) {
        setState(e.target.value);
    }

    function mul() {
        setState(test * 5);
    }

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#f5f5f5',
            fontFamily: 'Arial, sans-serif',
        },
        heading: {
            fontSize: '32px',
            marginBottom: '20px',
            color: '#333',
        },
        input: {
            padding: '10px',
            fontSize: '16px',
            marginBottom: '10px',
            width: '200px',
            borderRadius: '5px',
            border: '1px solid #ccc',
        },
        button: {
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginBottom: '20px',
        },
        result: {
            fontSize: '20px',
            color: '#333',
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Multiply by 5</h1>
            <input type="text" onChange={handle} style={styles.input} />
            <button onClick={mul} style={styles.button}>ADD</button>
            <p style={styles.result}>{test}</p>
        </div>
    );
};

export default Multi;
