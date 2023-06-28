
import TeamPreviewCard from "./TeamPreviewCard";

function Home({ cohort, activeUser}) {

    const displayACard = activeUser.name ? <TeamPreviewCard player={activeUser} /> : <p>No Player Selected</p>
    const playerTwo = {name: 'CPU', teamName : 'CodeBosses', fighterList : cohort.slice(10, 13) }
    return (
        <div>
            {displayACard}
            <span>VS</span>
            <TeamPreviewCard player={playerTwo}/>
        </div>
    )

}

export default Home;