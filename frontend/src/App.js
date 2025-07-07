import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/health')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage('API not reachable'));
  }, []);

  return (
    <div className="App">
      <h1>HiFi UI</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;
