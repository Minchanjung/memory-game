import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const newGame = () => {
    if (score > bestScore) {
      setBestScore(score);
    }

    
  }

  return (
    <div className="App">
    
    </div>
  );
}

export default App;
