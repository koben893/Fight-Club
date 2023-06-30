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
    return (
            <div className="team-list">{renderedTeams}</div>
    )
}

export default TeamContainer;