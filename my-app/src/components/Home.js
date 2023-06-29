
import TeamPreviewCard from "./TeamPreviewCard";
import OpponentGen from './OpponentGen';
import { useState } from 'react';

function Home({ cohort, activeUser, opponents }) {
    const [randomOpponent, setRandomOpponent] = useState([])

    const displayACard = activeUser.name ? <TeamPreviewCard player={activeUser}/> : <p>No Player Selected</p>
    let playerTwo = {name: 'CPU', teamName : 'CodeBosses', fighterList : cohort.slice(10, 13) }

    function randomNumberInRange(min, max) {
        //get number between min (inclusive) and max (inclusive)
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    const handleClick = () => {
        setRandomOpponent([]);
        const randomNum = recurRandArr();
        setRandomOpponent(randomNum)
    };

    function recurRandArr(l=0, randArr= ['', '', ''], eleA = [1, 2, 3 ,4 ,5 ,6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]) {
        if (l === 3) return randArr;
        let ioEl = randomNumberInRange(0, eleA.length -1);
        randArr[l] = eleA[ioEl];
        eleA.splice(ioEl, 1);
        return recurRandArr(l + 1, randArr, eleA)
    }

    return (
        <div>
            {displayACard}
            <span>VS</span>
            {/* <TeamPreviewCard player={playerTwo}/> */}
            <h2>Opposing Team is: {randomOpponent}</h2>
            <OpponentGen opponents={opponents} randomOpponents={randomOpponent}/>
            
            <button onClick={handleClick}>Generate Opponents</button>
        </div>
    )
}

export default Home