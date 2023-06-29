import MonsterCard from "./MonsterCard";

// component to display team info

function TeamContainer({teamList, handleSelect}) {
    const renderedTeams = (teamList.length === 0) ? <div></div> : teamList.map(coder => 
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