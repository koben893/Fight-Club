import React from 'react'
import TeamCard from './TeamCard';

function OpponentGen({opponents, randomOpponents}) {
    const {name, id, tier, image, abilities} = opponents;

    const filterOpponents = opponents.filter(opponents => 
    {
        return (randomOpponents[0] === opponents.id || randomOpponents[1] === opponents.id || randomOpponents[2] === opponents.id)
    }
        )
        
console.log(filterOpponents)
const renderList = filterOpponents.map(coder=> <TeamCard key={coder.id} id={coder.id} name={coder.name} sprite={coder.sprite}/>)
    return (
    <div className='preview-card'>
        {renderList}
    </div>
    )
}

export default OpponentGen