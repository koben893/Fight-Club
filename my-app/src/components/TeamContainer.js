// import MonsterCard from "./MonsterCard";
import TeamCard from "./TeamCard";

// component to display team info

function TeamContainer({teamList, handleSelect}) {

    const renderedTeams = teamList.map(coder => 
        <TeamCard
          key={coder.id}
          id={coder.id}
          name={coder.name}
          sprite={coder.sprite}
          handleSelect={handleSelect}
        />
    )
    return (
        <div className="team-container">
            <h2>Team Members</h2>
            {renderedTeams}
        </div>
    )
}

export default TeamContainer;