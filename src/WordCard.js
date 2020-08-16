import React, { useState } from 'react';
import _, { attempt, divide } from 'lodash';
import CharacterCard from './CharacterCard';

var last = "";
var ans = "";

const prepareStateFromWord = given_word => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return{
        word,
        chars,
        attempt: 1,
        guess: '',
        completed: false
    }
}

export default function WordCard(props){

    const [state, setState] = useState(prepareStateFromWord(props.value))

    const activationHandler = c =>{
        console.log(`${c} has been activated`)

        let guess = state.guess + c
        setState({...state, guess})

        if(guess.length == state.word.length){
            if(guess == state.word){
                console.log('yeah!')
                setState({...state, completed: true})
                last = guess;
                ans = "ANSWER : "
                alert("That Great You Stack True");
                
            }
            else{
                console.log('reset, next attempt')
                setState({...state, guess: '', attempt: state.attempt + 1})
                alert("That Great You Stack False");
            }
        }
        console.log(guess)
    }
    return(
        <body>
            <div class = "bg"> 
                <br></br>
                <br></br>
                <div class = "center"> 
                    {state.chars.map((c, i) => 
                    <CharacterCard value = {c} key = {i} activationHandler = {activationHandler} 
                    attempt = {state.attempt}/>)}
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div class = "center">
                        <p><span class="note">{ans}{last}</span></p>
                </div>
                <br></br>
                <br></br>
            </div>
        </body>
    )
}