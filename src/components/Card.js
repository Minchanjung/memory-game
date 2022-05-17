import React from 'react';

const Card = (props) => {
    return (
        <div onClick={props.onClick} name={props.name}>
            <img src={props.src} alt={props.caption}></img>
            <div>{props.caption}</div>
        </div>
    )
}

export default Card;