import React, {useState} from 'react'
import ChooseList from '../chooseList/chooseList'
import Level from '../level/level'
import './homePage.css'



function HomePage() {

    const [number, setNumber] = useState(null)
    const list =[]

    function selectList(id) {
        setNumber(id)
    }

    if(number) {

        return (
            <ChooseList  number={number} list={list}/>
        ) 
    }

    return (
      <div className="homePage">
        
           <h1 className='button titleGame ' >
               Jeux du Mot Secret<br/>
           </h1>

           <h2 className="regle">
                Déchiffrez le mot secret
                <br/> Si la lettre est dans la bonne position la case devient <strong className="vert">Verte</strong><br/>
                Si la lettre est présent dans le mot la case devient <strong>Blanche</strong><br/>
                Sinon elle devient <strong className="orange" >Orange</strong>
            </h2>

           <div>
                <button className="button" key={2} onClick={(e) => selectList(5,e)}>Mot à 5 lettres</button>
                <button className="button" key={3} onClick={(e) => selectList(6,e)}>Mot à 6 lettres</button>
                <button className="button" key={4} onClick={(e) => selectList(7,e)}>Mot à 7 lettres</button>
   
            </div>
      </div>
    );
  }

export default HomePage