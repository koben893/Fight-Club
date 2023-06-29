
import Login from './Login'
import TeamPreviewCard from "./TeamPreviewCard";
import OpponentGen from './OpponentGen';
import { useState } from 'react';

function Home({ cohort, userList, activeUser, handleActUser, opponents }) {
    let randomOpponent = []

    const displayACard = activeUser.name ? <TeamPreviewCard player={activeUser}/> : <p>No Player Selected</p>
    let playerTwo = {name: 'CPU', teamName : 'CodeBosses', fighterList : cohort.slice(10, 13) }

    function randomNumberInRange(min, max) {
        //get number between min (inclusive) and max (inclusive)
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    const handleClick = () => {
        randomOpponent = []
        for( var i = 0; i < 3; i++){
            let randomNum = randomNumberInRange(1, 31);
            if(randomNum !== randomOpponent)
            {
                randomOpponent.push(randomNum)
            }
        }
        console.log(randomOpponent)
    };



function Home({ cohort, activeUser}) {

    return (
        <div>
            {displayACard}
            <span>VS</span>
            <TeamPreviewCard player={playerTwo}/>
            <OpponentGen opponents={opponents} randomOpponents={randomOpponent}/>
            <h2>Opposing Team is: {randomOpponent}</h2>
            <button onClick={handleClick}>Generate Opponents</button>
        </div>

    )

}

export default Home;