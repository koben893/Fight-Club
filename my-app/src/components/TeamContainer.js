import MonsterCard from "./MonsterCard";

function TeamContainer({teamList, handleSelect, handleTeamUpdate, activeUser}) {
    const renderedTeams = (teamList.length === 0) ? <div></div> : teamList.map(coder => 
        <MonsterCard
          key={coder.id}
          id={coder.id}
          name={coder.name}
          image={coder.image}
          handleSelect={handleSelect}
        /> 
    ) 
        const renderHeader = activeUser.name ? "Change Your Team Below" : "Choose Your Team Below"
    return (
        <div>
            <h3>{renderHeader}</h3>
            {renderedTeams}
            <button onClick={() => handleTeamUpdate(teamList)} disabled={!activeUser.name}>Confirm Changes to Your Team</button>
        </div>
    )
}

export default TeamContainer;