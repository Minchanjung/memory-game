import React from 'react';
import '../styles/End.css';

const EndPage = (props) => {
    return (
        <div className='endContainer'>
            <div className='endContent'>
                <div id="scoreDisplay">Your Score was {props.score}</div>
                <button id='playAgainBtn' onClick={props.onClickEnd}>Play Again</button>
            </div>
            
        </div>
    )
}

export default EndPage;