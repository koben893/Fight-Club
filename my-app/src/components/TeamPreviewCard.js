import React from 'react'

function TeamPreviewCard({player}) {
    const {name, teamName, fighterList} = player;
    const renderList = fighterList.map(coder=><li key={coder.id}>{coder.name}</li>)
  return (
    <div className='preview-card'>
        <h5>{name} : {teamName}</h5>
        <ul>{renderList}</ul>
    </div>
  )
}

export default TeamPreviewCard
