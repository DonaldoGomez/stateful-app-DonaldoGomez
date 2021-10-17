import React, {useState} from 'react';
import './App.css';

//localStorage.setItem('name', JSON.stringify(this.state))

function App() {
  const [name, setName] = useState(window.localStorage.getItem('name'));

  const handleOnChange = (event) => {
    setName(event.target.value);
    window.localStorage.setItem('name', JSON.stringify(event.target.value))
  };

  return (
    <div>
      <p>Esooo {name}!!</p>
      <input id="nombreInput" type="text" onChange={handleOnChange} placeholder='Escribe tu nombre'></input>
    </div>
  );
}

export default App;
