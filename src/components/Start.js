import React from 'react';
import '../styles/Start.css'

const StartPage = (props) => {
    return (
        <div className='startContainer'>
            <div className='startContent'>
                <h1>Welcome</h1>
                <h2>How to Play</h2>
                <p>;aljfsljfa fsa instructions</p>
                <button onClick={props.onClick}>Play</button>
            </div>
            
        </div>
    )
}

export default StartPage;