import React from 'react'
import TeamCard from './TeamCard';

function OpponentGen({enemyTeam, handleClick}) {

const renderList = (enemyTeam.length === 0) ? <p>No Team Selected</p> : enemyTeam.map(coder=> <TeamCard key={coder.id} id={coder.id} name={coder.name} sprite={coder.sprite}/>)
    return (
    <div className='preview-card'>
        {renderList}
        <button onClick={handleClick}>Generate Opponents</button>
    </div>
    )
}

export default OpponentGen