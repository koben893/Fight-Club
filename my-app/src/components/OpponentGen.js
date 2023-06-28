import React from 'react'

function OpponentGen({opponents, randomOpponents}) {
    const {name, teamName, fighterList} = opponents;
    const renderList = fighterList.map(coder=><li key={coder.id}>{coder.name}</li>)

    return (
    <div className='preview-card'>
        <h5>{name} : {teamName}</h5>
        <ul>{renderList}</ul>
    </div>
    )
}

export default OpponentGen