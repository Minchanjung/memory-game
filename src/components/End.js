import React from 'react';
import '../styles/End.css';

const EndPage = (props) => {
    return (
        <div className='startContainer'>
            <div className='startContent'>
                <div>Your Score was {props.score}</div>
                <button onClick={props.onClickEnd}>Play Again</button>
            </div>
            
        </div>
    )
}

export default EndPage;