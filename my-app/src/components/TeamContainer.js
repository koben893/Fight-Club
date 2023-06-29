// import MonsterCard from "./MonsterCard";
import TeamCard from "./TeamCard";


function TeamContainer({teamList, handleSelect, handleTeamUpdate, activeUser}) {
    const renderedTeams = (teamList.length === 0) ? <div></div> : teamList.map(coder => 
        <TeamCard
          key={coder.id}
          id={coder.id}
          name={coder.name}
          sprite={coder.sprite}
          handleSelect={handleSelect}
        /> 
    ) 
        const renderHeader = activeUser.name ? "Change Your Team Below" : "Choose Your Team Below"
    return (
        <div className="team-container">
            <h2>{renderHeader}</h2>
            {renderedTeams}
            <button onClick={() => handleTeamUpdate(teamList)} disabled={!activeUser.name}>Confirm Changes to Your Team</button>
        </div>
    )
}

export default TeamContainer;