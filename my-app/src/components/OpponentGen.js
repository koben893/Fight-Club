import React from 'react'
import TeamCard from './TeamCard';

function OpponentGen({enemyTeam}) {

const renderList = (enemyTeam.length === 0) ? <p>No Team Selected</p> : enemyTeam.map(coder=> <TeamCard key={coder.id} id={coder.id} name={coder.name} sprite={coder.sprite}/>)
    return (
    <div className='preview-card'>
        <h3 className='preview-title'>CPU</h3>
        <h2 className='yellow-header'>The Walking Devs</h2>
        <div>{renderList}</div>
    </div>
    )
}

export default OpponentGen