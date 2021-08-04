import React, { useState, useRef } from 'react'
import './level.css'
import _ from 'lodash'
import Square from '../square/square'
import getAllIndexes from './getAllIndexes'

function Level ({level, guess }) {
   
    const [array, setArray] = useState([])
    const [tour, setTour] = useState(1)    
    const [win, setWin] = useState(false)
    const input = useRef(null);
    
    function handleKeyPress(e) {
        if(e.key === 'Enter'){
            handleClick(e)
          }
    }

    
    function handleClick(e){

        if (input.current.value !== '' && input.current.value.length === level){
            let valueInput = input.current.value.toUpperCase()
            let currentArray = valueInput.split('')

            let newArray = [];

            if (_.isEqual(_.sortBy(guess), _.sortBy(currentArray))){
                setWin(true)
           }

            for(let i = 0;i < currentArray.length;i++){

                if(!guess.includes(currentArray[i])){
                    newArray.push({item: currentArray[i], color: 'orange', fontColor : 'white'});
                }
                if(guess.includes(currentArray[i])){ 

                    if( (getAllIndexes(guess, currentArray[i]).includes(i))){
                        newArray.push({item: currentArray[i], color: 'rgba(17, 209, 69, 0.95)', fontColor : 'white'});
                    }
                    else {
                        newArray.push({item: currentArray[i], color: 'white', fontColor : 'black'});
                    }
                }
            }
             
            setArray(oldArray => [...oldArray, newArray]);
            setTour(tour + 1)
        }
    }

    function getNote(tour) {
        if(tour === 1 ){return 20}if(tour === 2 ) {return 18}if(tour === 3 ) {return 16}if(tour === 4 ) {return 14}if(tour === 5 ) {return 12}if(tour === 6 ) {return 10}if(tour === 7 ) {return 8}if(tour === 8 ) {return 6}if(tour === 9 ) {return 4}if(tour ===10){return 2}
    }

    if(win)
    {
        let note = getNote(tour)
        return (
            <h1>Félicitation vous avez réussit à devniez le mot !<br/> Vous avez obtenu {note} / 20 </h1>
        )
    }

    if(tour === 11) {
        return (
            <h1>Vous n'avez pas réussi à deviner le mot<br/>
            Qui était : <strong className="code">{guess}</strong></h1>
        )
    }

    return(
        <div className='level'>

            <h1>Devnier le mot à {level} lettres</h1>

            <div className="tourCount" >Essai {tour} / 10</div>

            <div className="inputContainer" >
                <input ref={input} onKeyPress={(e) => handleKeyPress(e)} /><br/>
                <button onClick={(e) => handleClick(e)} className='button' >Valider votre choix</button>
            </div>
                <div className="arrayContainer">
                
                {array.map((col, index) => (

                    <div className='colonne' key={index}>

                    {col.map((ligne,index) => (
                       <Square  key={index} content={ligne.item} color={ligne.color} fontColor={ligne.fontColor} />
                    ))}
                    </div>
                ))}
                </div>

        </div>
    
    )
}
export default Level