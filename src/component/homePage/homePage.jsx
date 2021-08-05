import React, {useState} from 'react'
import Level from '../level/level'
import './homePage.css'
import generate from './generate'


function HomePage() {

    const [level, setLevel] = useState(false)
    
    function selectLevel(id) {
        setLevel(id)
    }


    if(level) {
        
        const guessString = generate(level)
        let guess =  guessString
        
        return (
            <Level  level={level} guess={guess} />
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
                <button className="button" key={2} onClick={(e) => selectLevel(5,e)}>Mot à 5 lettres</button>
                <button className="button" key={3} onClick={(e) => selectLevel(6,e)}>Mot à 6 lettres</button>
                <button className="button" key={4} onClick={(e) => selectLevel(7,e)}>Mot à 7 lettres</button>
   
            </div>
      </div>
    );
  }

export default HomePage