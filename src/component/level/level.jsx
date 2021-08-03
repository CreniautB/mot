import React, { useState, useRef } from 'react'
import './level.css'
import _ from 'lodash'
import Square from '../square/square'
import getAllIndexes from './getAllIndexes'

function Level ({level, guess }) {
   

    const [array, setArray] = useState([])
    const [tour, setTour] = useState(1)    
    const[win, setWin] = useState(false)
    const input = useRef(null);
    
    function handleKeyPress(e) {
        if(e.key === 'Enter'){
            handleClick(e)
          }
    }

    function handleClick(e){
        if (input.current.value !== '' && input.current.value.length === level){
            let valueInput = input.current.value

            let currentArray = valueInput.split('')

            let newArray = [];

            if (_.isEqual(_.sortBy(guess), _.sortBy(currentArray))){
                setWin(true)
           }

            for(let i = 0;i < currentArray.length;i++){

                if(!guess.includes(currentArray[i])){
                    newArray.push({item: currentArray[i], color: 'red'});
                }
                if(guess.includes(currentArray[i])){ 

                    if( (getAllIndexes(guess, currentArray[i]).includes(i))){
                        newArray.push({item: currentArray[i], color: 'green'});
                    }
                    else {
                        newArray.push({item: currentArray[i], color: 'white'});
                    }
                }
            }
             
            setArray(oldArray => [...oldArray, newArray]);
            setTour(tour + 1)
        }
    }
  

    if(win)
    {
        return (
            <h1>Félicitation vous avez déchiffré le code ! </h1>
        )
    }

    if(tour === 11) {
        return (
            <h1>Vous n'avez pas réussi à déchiffrer le code<br/>
            Qui était : <strong className="code">{guess}</strong></h1>
        )
    }

    return(
        <div className='level'>

            <h1>Déchiffrer le code à {level} chiffre</h1>

            <h2>Essai {tour} / 10</h2>

            <div className="inputContainer" >
                <input ref={input} onKeyPress={(e) => handleKeyPress(e)} /><br/>
                <button onClick={(e) => handleClick(e)} className='button' >Valider votre choix</button>
            </div>
                <div className="arrayContainer">
                
                {array.map((col, index) => (

                    <div className='colonne' key={index}>

                    {col.map((ligne,index) => (
                       <Square  key={index} content={ligne.item} color={ligne.color} />
                    ))}
                    </div>
                ))}
                </div>

        </div>
    
    )
}
export default Level