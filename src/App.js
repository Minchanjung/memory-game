import React, { useState, useEffect } from 'react';
import StartPage from './components/Start';
import Gameboard from './components/Gameboard';
import EndPage from './components/End';
import './App.css';

const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [renderStart, setRenderStart] = useState(true)
  const [renderEnd, setRenderEnd] = useState(false)

  const handleStart = () => {
    setRenderStart(false);
    setRenderEnd(false);
    setScore(0);
  }

  const endGame = () => {
    setRenderEnd(true)
    if (score > bestScore) {
      setBestScore(score);
    }

  }

  return (
    <div className="App">
      {(renderStart) ? <StartPage onClick={handleStart}/> : null }
      <div className='header'>
        <h1>Game</h1>
        <div id="scoreContainer">
          <div id="score">Score: </div>
          <div id="bestScore">Best Score: </div>
        </div>
      </div>

      <Gameboard score={score} setScore={setScore} endGame={endGame}/>

      {(renderEnd) ? <EndPage onClickEnd={handleStart} score={score}/> : null}
    </div>
  );
}

export default App;
