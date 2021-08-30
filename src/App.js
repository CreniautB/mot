import './App.css';
import HomePage from './component/homePage/homePage';
import './component/homePage/homePage.css'
import React, {useState} from 'react'

function App() {


    const [level, setLevel] = useState(null)
    const [number, setNumber] = useState(null)

  return (
    <div className="homePage">
          <img src="img/logo.png" alt='logo' width='120'></img>
          <br/>
          <br/>
          <a href="https://www.calldsk.fr" rel="noreferrer" target="_blank" className="buttonLink" >www.calldsk.fr</a>
                    
        <HomePage level={level} setLevel={setLevel} number={number} setNumber={setNumber} />
    </div>
  );
}

export default App;
