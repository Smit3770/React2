import React, { useState } from 'react';

const Counter_without_class = () => {
    const [count, setCount] = useState(0);
    const inc = () => setCount(count + 1);
    const dec = () => count > 0 && setCount(count - 1);
    const reset = () => setCount(0);

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: 'Segoe UI, sans-serif',
        transition: 'background-color 0.3s ease',
    };

    const boxStyle = {
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
        transition: 'background-color 0.3s ease, color 0.3s ease',
    };

    const headingStyle = {
        fontSize: '32px',
        marginBottom: '20px',
        color: '#333',
    };

    const countStyle = {
        fontSize: '48px',
        fontWeight: 'bold',
        marginBottom: '30px',
    };

    const buttonStyle = {
        padding: '12px 24px',
        margin: '0 10px',
        fontSize: '16px',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        transition: '0.3s ease',
        color: '#fff',
    };

    return (
        <div style={containerStyle}>
            <div style={boxStyle}>
                <h1 style={headingStyle}>Counter</h1>
                <p style={countStyle}>{count}</p>
                <div>
                    <button
                        style={{ ...buttonStyle, backgroundColor: '#4caf50' }}
                        onClick={inc}
                    >
                        INC
                    </button>
                    <button
                        style={{ ...buttonStyle, backgroundColor: '#f44336' }}
                        onClick={dec}
                    >
                        DEC
                    </button>
                    <button
                        style={{ ...buttonStyle, backgroundColor: '#2196f3' }}
                        onClick={reset}
                    >
                        RESET
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter_without_class;
