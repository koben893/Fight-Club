import React from 'react'
import TeamCard from './TeamCard';

function OpponentGen({enemyTeam}) {

const renderList = (enemyTeam.length === 0) ? <div><p>Generate a</p><p>Random Team</p><p>to Fight Using</p><p>the Button</p><p>Below</p></div> : enemyTeam.map(coder=><TeamCard key={coder.id} id={coder.id} name={coder.name} sprite={coder.sprite}/>)
    return (
    <div className='preview-card'>
        <h3 className='preview-title'>CPU</h3>
        <h2 className='yellow-header'>The Walking Devs</h2>
        {/* render "The Walking Devs" only when team exists */}
        <div>{renderList}</div>
    </div>
    )
}

export default OpponentGen