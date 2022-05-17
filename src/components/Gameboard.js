import React, { useState } from 'react';
import Card from './Card';
import '../styles/Gameboard.css';


const Gameboard = (props) => {
    const [cards, setCards] = useState({MBDTF: false, GKMC: false, Ilmatic: false, Faces: false, TMB: false, TPAB: false, Circles: false, Swimming: false, TMOTM: false, Nectar: false, UP: false, inRainbows: false});

    const handleClick = (name) => {
        if (cards.name === false) {
            setCards(() => ({...cards, [name]: true,}))
            props.setScore(props.score + 1);
        } else {
            props.endGame();
        }
    }

    return (
        <div className='cardContainer'>
            <Card onClick={handleClick('MBDTF')} name='MBDTF' caption='My Beautiful Dark Twisted Fantasy' src={props.src}/>
            <Card onClick={handleClick('GKMC')} name='GKMC' caption='Good Kid Maad City' src={props.src}/>
            <Card onClick={handleClick('Ilmatic')} name='Ilmatic' caption='Ilmatic' src={props.src}/>
            <Card onClick={handleClick('Faces')} name='Faces' caption='Faces' src={props.src}/>
            <Card onClick={handleClick('TMB')} name='TMB' caption='The Melodic Blue' src={props.src}/>
            <Card onClick={handleClick('TPAB')} name='TPAB' caption='To Pimp A Butterfly' src={props.src}/>
            <Card onClick={handleClick('Circles')} name='Circles' caption='Circles' src={props.src}/>
            <Card onClick={handleClick('Swimming')} name='Swimming' caption='Swimming' src={props.src}/>
            <Card onClick={handleClick('TMOTM')} name='TMOTM' caption='The Man On The Moon' src={props.src}/>
            <Card onClick={handleClick('Nectar')} name='Nectar' caption='Nectar' src={props.src}/>
            <Card onClick={handleClick('UP')} name='UP' caption='Under Pressure' src={props.src}/>
            <Card onClick={handleClick('inRainbows')} name='inRainbows' caption='In Rainbows' src={props.src}/>
        </div>
    )
}

export default Gameboard