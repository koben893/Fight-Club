import React from 'react'
import TeamCard from './TeamCard';

function TeamPreviewCard({player}) {
    const {name, teamName, fighterList} = player;
    const renderList = fighterList.map(coder=> <TeamCard key={coder.id} id={coder.id} name={coder.name} sprite={coder.sprite}/>)
  return (
    <div className='preview-card'>
        <h3 className='preview-title'>{name}</h3>
        <h2 className='yellow-header'>{teamName}</h2>
        <div>{renderList}</div>
    </div>
  )
}

export default TeamPreviewCard
