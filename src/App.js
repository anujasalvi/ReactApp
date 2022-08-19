import './App.css';
import Tool from './Components/headers.js';
import {useState} from 'react';

function App() {
  const [dark, setDark] = useState(true);
  return (
    <div className="App">
      <header className={dark ? "App-header" : "App-header-light"}>
        {/* <button onClick={() => setDark(true)}>Dark</button> */}
        <i>Randomize  your day</i>
      </header>
      <div className='main'>
        <Tool name="Anuja" company="KBRA"/>
      </div>
      <footer className='App-footer'>
        Take a chance ;)
      </footer>
    </div>
  );
}


export default App;
