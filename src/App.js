import React, { useState } from 'react';
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
      {(renderEnd) ? <EndPage onClickEnd={handleStart} score={score}/> : null}
      <div className='contentContainer'>
        <div className='header'>
          <h1 id="logo">Album Memory</h1>
          <div id="scoreContainer">
            <div className="scoreClass" id="score">Score: {score}</div>
            <div className='scoreClass' id="bestScore">Best Score: {bestScore}</div>
          </div>
        </div>

        <Gameboard score={score} setScore={setScore} endGame={endGame}/>
      </div>
      
    </div>
  );
}

export default App;
