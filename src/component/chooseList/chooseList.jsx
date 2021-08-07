import React, { useState } from 'react'
import generate5 from './generate5'
import generate6 from './generate6'
import generate7 from './generate7'
import RoundLevel from '../roundLevel/roundLevel'

function ChooseList({number}) {


    const [go, setGo] = useState(false)
    const [list, setList] = useState([])
    
    function selectLevel(number, idList) {

        if(number === 7){

            let newlist = generate7(idList)
            setList([...list, newlist])
            setGo(true)
        }
        if(number === 6){
            let newlist = generate6(idList)
            setList([...list, newlist])
            setGo(true)

        }
        if(number === 5){

            let newlist = generate5(idList)
            setList([...list, newlist])
            setGo(true)
        }
     
    }

    if(go){
        return ( <RoundLevel list={list} number={number}/> )
    }

    return (
        <div>
            <button className="button" key={1} onClick={(e) => selectLevel(number, 1,e)}>Liste 1</button>
            <button className="button" key={2} onClick={(e) => selectLevel(number, 2,e)}>Liste 2</button>
            <button className="button" key={3} onClick={(e) => selectLevel(number, 3,e)}>Liste 3</button>
            <button className="button" key={4} onClick={(e) => selectLevel(number, 4,e)}>Liste 4</button>
            <button className="button" key={5} onClick={(e) => selectLevel(number, 5,e)}>Liste 5</button>
            <button className="button" key={6} onClick={(e) => selectLevel(number, 6,e)}>Liste 6</button>
            <button className="button" key={7} onClick={(e) => selectLevel(number, 7,e)}>Liste 7</button>
            <button className="button" key={8} onClick={(e) => selectLevel(number, 8,e)}>Liste 8</button>
            <button className="button" key={9} onClick={(e) => selectLevel(number, 9,e)}>Liste 9</button>
            <button className="button" key={10} onClick={(e) => selectLevel(number, 10,e)}>Liste 10</button>
        </div>
        )      
        
}


export default ChooseList