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
    const [albums, setAlbums] = useState(
        [{
            id: "MBDTF",
            caption: "My Beautiful Dark Twisted Fantasy",
            src: mbdtf
        }, 
        {
            id: "GKMC",
            caption: "Good Kid Maad City",
            src: gkmc
        },
         {
            id: "Ilmatic",
            caption: "Ilmatic",
            src: ilmatic
         }, 
         {
            id: "Faces",
            caption: "Faces",
            src: faces
         }, 
         {
            id: "TMB",
            caption: "The Melodic Blue",
            src: tmb
         }, 
         {
            id: "TPAB",
            caption: "To Pimp A Butterfly",
            src: tpab
         }, 
         {
            id: "Circles",
            caption: "Circles",
            src: circles
         }, 
         {
            id: "Swimming",
            caption: "Swimming",
            src: swimming
         }, 
         {
            id: "TMOTM",
            caption: "The Man On The Moon",
            src: tmotm
         }, 
         {
            id: "Nectar",
            caption: "Nectar",
            src: nectar
         }, 
         {
            id: "UP",
            caption: "Under Pressure",
            src: up
         }, 
         {
            id: "inRainbows",
            caption: "In Rainbows",
            src: inrainbows
         }]
    );

    const handleClick = (e) => {   
        const {id} = e.target; 
        shuffle(albums);

        if (cards[id] === false) {
            setCards(() => ({...cards, [id]: true,}));
            props.setScore(props.score + 1);
            if (props.score >= 11) {
                props.endGame();
            }
        }
        if (cards[id] === true) {
            setCards(() => ({...cards, [id]: false}))
            props.endGame();
        } 
    }

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
        console.log(currentIndex);
        console.log(randomIndex);
      
        // While there remain elements to shuffle.
        while (currentIndex !== 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          console.log(randomIndex)
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        console.log(array)
        return array;
    }

    return (
        <div className='cardContainer'>
            {albums.map((album, index) => {
                return <Card onClick={handleClick} id={album.id} caption={album.caption} src={album.src}/>
            })}
        </div>
    )
}

export default Gameboard
/*            <Card onClick={handleClick} id='MBDTF' caption='My Beautiful Dark Twisted Fantasy' src={mbdtf}/>
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
            <Card onClick={handleClick} id='inRainbows' caption='In Rainbows' src={inrainbows}/>*/