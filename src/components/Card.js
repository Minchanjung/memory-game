import React from 'react';

const Card = (props) => {
    return (
        <div>
            <img src={props.src} alt={props.caption}></img>
            <div>{props.caption}</div>
        </div>
    )
}

export default Card;