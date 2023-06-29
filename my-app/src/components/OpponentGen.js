import React from 'react'

function OpponentGen({opponents, randomOpponents}) {
    const {name, id, tier, image, abilities} = opponents;

    const filterOpponents = opponents.filter(opponents => 
    {
        return (randomOpponents[0] === opponents.id || randomOpponents[1] === opponents.id || randomOpponents[2] === opponents.id)
    }
        )
    const renderOpponentList = filterOpponents.map(coder=><li key={coder.id}>{coder.name}</li>)
console.log(filterOpponents)

    return (
        <div className='preview-card'>
            <h5>{name} {abilities}</h5>
            <ul>{renderOpponentList}</ul>
        </div>
    )
}

export default OpponentGen