import React from 'react'
import TeamCard from './TeamCard';

function TeamPreviewCard({player}) {
    const {name, teamName, fighterList} = player;
    const renderList = fighterList.map(coder=> <TeamCard key={coder.id} id={coder.id} name={coder.name} sprite={coder.sprite}/>)
  return (
    <div className='preview-card'>
        <h5>{name} : {teamName}</h5>
        <ul>{renderList}</ul>
    </div>
  )
}

export default TeamPreviewCard
