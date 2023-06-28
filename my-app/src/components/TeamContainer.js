import MonsterCard from "./MonsterCard";

// component to display team info

function TeamContainer({teamName, teamList, handleSelect}) {

    const renderedTeams = teamList.map(coder => 
        <MonsterCard
          key={coder.id}
          id={coder.id}
          name={coder.name}
          image={coder.image}
          handleSelect={handleSelect}
        />
    )
    return (
        <div>
            <h3>Team Members</h3>
            {renderedTeams}
        </div>
    )
}

export default TeamContainer;