import React from 'react';
import '../styles/Start.css'

const StartPage = (props) => {
    return (
        <div className='startContainer'>
            <div className='startContent'>
                <h1 id="startHeader">Welcome to <br/>Album Memory Game</h1>
                <h2>How to Play</h2>
                <p>The objective of this game is to click every album once.<br/>
                The position of the albums will change every click.<br/>
                Have fun and Good Luck?</p>
                <button id='playBtn' onClick={props.onClick}>Play</button>
            </div>
            
        </div>
    )
}

export default StartPage;