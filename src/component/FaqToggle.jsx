import React, { useState } from 'react';

function FaqToggle() {
    const [isShow, setShow] = useState(false);

    const toggle = () => {
        setShow(prev => !prev);
    };

    const st = {
        maxWidth: '600px',
        margin: '40px auto',
        padding: '24px',
        border: 'none',
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#ffffff'
    }

    return (
        <div style={st}>
            <h3 onClick={toggle}>
                Elephant
            </h3>
            {isShow && (
                <p style={st}>
                    Elephants are the largest land animals on Earth, known for their intelligence, memory, and strong social bonds.
                </p>
            )}
        </div>
    );
}

export default FaqToggle;