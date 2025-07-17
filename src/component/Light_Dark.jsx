import React, { useState } from 'react'

const Light_Dark = () => {

    const [darkMode,setDarkMode]=useState(false)

    function toggleMode(){
        setDarkMode(!darkMode)
    }

    const appStyle = {
        height: '100vh',
        backgroundColor: darkMode ? '#222' : '#f4f4f4',
        color: darkMode ? '#fff' : '#000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease',
      };
    
      const buttonStyle = {
        padding: '10px 20px',
        marginTop: '20px',
        fontSize: '16px',
        cursor: 'pointer',
      };

    
    return (
        <div style={appStyle}>
            <h1>{darkMode?'Dark Mode':'Light Mode'}</h1>
            <button style={buttonStyle} onClick={toggleMode}>button</button>
        </div>
    )
}

export default Light_Dark
