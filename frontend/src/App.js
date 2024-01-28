import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('/data')
      .then(response => response.json())
      .then(data => setData(data.message))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Received from backend: {data}
        </p>
      </header>
    </div>
  );
}

export default App;
