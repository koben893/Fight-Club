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
        const renderHeader = activeUser.name ? "Edit Your Team" : "Create Your Team"
    return (
        <div className="team-container">
            <h2 className="yellow-header">{renderHeader}</h2>
            <div className="team-list">{renderedTeams}</div>
            <button className="team-button" onClick={() => handleTeamUpdate(teamList)} disabled={!activeUser.name}>Don't Forget to Sign Up!</button>
        </div>
    )
}

export default TeamContainer;