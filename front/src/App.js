import React, {useState} from 'react';
import './App.css';

const App = () => {

  const [message, setMessage] = useState('');
  const handleClick = async() => {
    const data = await window.fetch('/api/youtube')
    const json = await data.json()
    console.log(json)
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={handleClick}>Say hi ! </button>
        <p>{message}</p>
      </header>
    </div>
  );
}
export default App;
