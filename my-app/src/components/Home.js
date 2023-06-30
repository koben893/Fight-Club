
import TeamPreviewCard from "./TeamPreviewCard";
import OpponentGen from './OpponentGen';

function Home({ cohort, activeUser, handleOpponentTeam, opponentTeam}) {
    function randomNumberInRange(min, max) {
        //get number between min (inclusive) and max (inclusive)
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function recurRandArr(l = 0, randArr = ['', '', ''], eleA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]) {
        if (l === 3) return randArr;
        let ioEl = randomNumberInRange(0, eleA.length - 1);
        randArr[l] = eleA[ioEl];
        eleA.splice(ioEl, 1);
        return recurRandArr(l + 1, randArr, eleA)
    }

    
    const handleClick = () => {
        const randomNum = recurRandArr();
        const enemyTeam = cohort.filter(opponent => (randomNum[0] === opponent.id || randomNum[1] === opponent.id || randomNum[2] === opponent.id))
        handleOpponentTeam(enemyTeam);
    };

    const renderPreview = !activeUser.name ? <div><h2>Please Log In or Create a New User</h2><h2>on the Team Page</h2></div> : 
        <div>
            <div className="multi-team-container">
                <OpponentGen enemyTeam={opponentTeam} />
                <h2 className="versus">VS</h2>
                <TeamPreviewCard player={activeUser} />
            </div>
            <div className="generate-button-container">
                <button className="generate-opponent-button" onClick={handleClick}>Generate Opponents</button>
            </div>
        </div>

    return (
        <div>{renderPreview}</div>
    )
}

export default Home