import logo from "./logo.svg";
import "./App.css";
import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/auth/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      if (response.ok) {
        setMessage('Connected to server');
        setError('');
      } else {
        setMessage('');
        setError('Error: Not connected to server');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('');
      setError('Error: Unable to connect to server');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo" />
        <p>A simple React app.....</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
        <form
          onSubmit={handleSubmit}
          className="form">
          <button type="submit">
            Check Connection
          </button>
        </form>
        {message && <p>{message}</p>}
        {error && <p>{error}</p>}
      </header>
    </div>
  );
}

export default App;
