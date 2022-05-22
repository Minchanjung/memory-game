import React, { useState } from 'react';
import Card from './Card';
import '../styles/Gameboard.css';
import circles from '../imgs/circles.jpeg';
import mbdtf from '../imgs/mbdtf.jpeg';
import gkmc from '../imgs/gkmc.jpeg';
import ilmatic from '../imgs/ilmatic.jpeg';
import faces from '../imgs/faces.jpeg';
import tmb from '../imgs/tmb.webp';
import tpab from '../imgs/tpab.jpeg';
import swimming from '../imgs/Mac Miller_Swimming.webp';
import tmotm from '../imgs/tmotm.jpeg';
import nectar from '../imgs/nectar.jpeg';
import up from '../imgs/under_pressure.jpeg';
import inrainbows from '../imgs/in_rainbows.jpeg';


const Gameboard = (props) => {
    const [cards, setCards] = useState({MBDTF: false, GKMC: false, Ilmatic: false, Faces: false, TMB: false, TPAB: false, Circles: false, Swimming: false, TMOTM: false, Nectar: false, UP: false, inRainbows: false});

    const handleClick = (e) => {   
        const {id} = e.target; 
        
        if (cards[id] === false) {
            setCards(() => ({...cards, [id]: true,}));
            console.log(cards[id]);
            props.setScore(props.score + 1);
            console.log(cards)
            console.log(props.score)
            if (props.score >= 11) {
                console.log('lastmove');
                props.endGame();
            }
        }
        if (cards[id] === true) {
            /*for (const property in cards) {
                console.log(typeof(property));
                setCards(() => ({...cards, [property]: false}))
                console.log(cards[property])
            }*/
            console.log(cards[id]);
            setCards(() => ({...cards, [id]: false}))
            console.log(cards[id])
            props.endGame();
        } 
    }

    return (
        <div className='cardContainer'>
            <Card onClick={handleClick} id='MBDTF' caption='My Beautiful Dark Twisted Fantasy' src={mbdtf}/>
            <Card onClick={handleClick} id='GKMC' caption='Good Kid Maad City' src={gkmc}/>
            <Card onClick={handleClick} id='Ilmatic' caption='Ilmatic' src={ilmatic}/>
            <Card onClick={handleClick} id='Faces' caption='Faces' src={faces}/>
            <Card onClick={handleClick} id='TMB' caption='The Melodic Blue' src={tmb}/>
            <Card onClick={handleClick} id='TPAB' caption='To Pimp A Butterfly' src={tpab}/>
            <Card onClick={handleClick} id='Circles' caption='Circles' src={circles}/>
            <Card onClick={handleClick} id='Swimming' caption='Swimming' src={swimming}/>
            <Card onClick={handleClick} id='TMOTM' caption='The Man On The Moon' src={tmotm}/>
            <Card onClick={handleClick} id='Nectar' caption='Nectar' src={nectar}/>
            <Card onClick={handleClick} id='UP' caption='Under Pressure' src={up}/>
            <Card onClick={handleClick} id='inRainbows' caption='In Rainbows' src={inrainbows}/>
        </div>
    )
}

export default Gameboard