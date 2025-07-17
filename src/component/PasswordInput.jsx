import React, { useState } from 'react';

function PasswordInput() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <div style={{
      maxWidth: '400px',
      margin: '50px auto',
      padding: '30px',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      backgroundColor: '#fefefe',
      textAlign: 'center'
    }}>
      <h3>Enter Password</h3>
      <input
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        style={{
          padding: '10px',
          fontSize: '16px',
          width: '80%',
          marginBottom: '10px',
          borderRadius: '8px',
          border: '1px solid #ccc'
        }}
      />
      <div>
        <label>
          <input
            type="checkbox"
            checked={showPassword}
            onChange={togglePasswordVisibility}
          /> Show Password
        </label>
      </div>
    </div>
  );
}

export default PasswordInput;
