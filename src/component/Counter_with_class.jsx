import React, { Component } from 'react';

export default class Counter_with_class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  inc = () => {
    this.setState({ count: this.state.count + 1 });
  };

  dec = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: 'linear-gradient(to right, #d3cce3, #e9e4f0)',
      fontFamily: 'Segoe UI, sans-serif',
    };

    const boxStyle = {
      backgroundColor: '#ffffff',
      padding: '50px',
      borderRadius: '16px',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
      textAlign: 'center',
      minWidth: '300px',
    };

    const countStyle = {
      fontSize: '60px',
      fontWeight: '900',
      marginBottom: '40px',
      color: '#222',
      letterSpacing: '2px',
    };

    const buttonStyle = {
      padding: '14px 28px',
      margin: '0 12px',
      fontSize: '18px',
      fontWeight: '600',
      borderRadius: '10px',
      border: 'none',
      cursor: 'pointer',
      color: '#fff',
      transition: 'transform 0.2s ease, background-color 0.3s ease',
    };

    const buttonHover = {
      transform: 'scale(1.05)',
    };

    const headingStyle = {
      fontSize: '32px',
      marginBottom: '20px',
      color: '#333',
    };

    return (
      <div style={containerStyle}>
        <div style={boxStyle}>
          <h1 style={headingStyle}>Counter</h1>
          <p style={countStyle}>{this.state.count}</p>
          <div>
            <button
              style={{
                ...buttonStyle,
                backgroundColor: '#28a745',
              }}
              onMouseOver={e => e.target.style.transform = 'scale(1.05)'}
              onMouseOut={e => e.target.style.transform = 'scale(1.0)'}
              onClick={this.inc}
            >
              INC
            </button>
            <button
              style={{
                ...buttonStyle,
                backgroundColor: '#dc3545',
              }}
              onMouseOver={e => e.target.style.transform = 'scale(1.05)'}
              onMouseOut={e => e.target.style.transform = 'scale(1.0)'}
              onClick={this.dec}
            >
              DEC
            </button>
            <button
              style={{
                ...buttonStyle,
                backgroundColor: '#007bff',
              }}
              onMouseOver={e => e.target.style.transform = 'scale(1.05)'}
              onMouseOut={e => e.target.style.transform = 'scale(1.0)'}
              onClick={this.reset}
            >
              RESET
            </button>
          </div>
        </div>
      </div>
    );
  }
}
