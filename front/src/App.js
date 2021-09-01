import React, {useState} from 'react';
import './App.css';

const App = () => {

  const [message, setMessage] = useState('');
  const handleClick = async() => {
    const data = await window.fetch('/api/nicolas')
    const json = await data.json()
    //we transform the raw data into json 
    const message = json.message;
    setMessage(message);
    //then we send him the message from express to display it on the front end, i.e. react -> we test -> react and express are well connected
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
