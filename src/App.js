import React from 'react';
import './App.css';
import WordCard from './WordCard';

var word = "";
var Hint = "";
var random = Math.floor(Math.random() * 7);

    if(random == 0){
      word = "Cheetah";
    }
    else if(random == 1){
      word = "dolphin";
    }
    else if(random == 2){
      word = "giraffe";
    }
    else if(random == 3){
      word = "elephant";
    }
    else if(random == 3){
      word = "crocodile";
    }
    else{
      word = "Cat";
    }

function App() {
  return (
    <body>  
      <h2>  Sort the letters in the animal category.  </h2>
      <div>
        <WordCard value = {word} />
      </div> 
    </body>
  );
}

export default App;
