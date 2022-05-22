import React from 'react';
import '../styles/Card.css'

const Card = (props) => {
    return (
        <div onClick={props.onClick} id={props.id} className="cards">
            <div className='imgContainer'>
                <img src={props.src} alt={props.caption}></img>
                <div id='caption'>{props.caption}</div>
            </div>
               
        </div>
    )
}

export default Card;