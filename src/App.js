import './App.css';
import HomePage from './component/homePage/homePage';
import './component/homePage/homePage.css'
import React, {useState} from 'react'

function App() {


    const [level, setLevel] = useState(null)
    const [number, setNumber] = useState(null)

  return (
    <div className="homePage">
        <img src='img/logo.png' alt='logo' width='120px' ></img>
        <HomePage level={level} setLevel={setLevel} number={number} setNumber={setNumber} />
    </div>
  );
}

export default App;
