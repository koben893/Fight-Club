import React from 'react'

function OpponentGen({opponents, randomOpponents}) {
    const {name, id, tier, image, abilities} = opponents;

    //const renderOpponents = fighterList.map(coder=>
    const filterOpponents = randomOpponents.filter(randomOpponent => 
    randomOpponent === opponents.id)
    console.log("hello" ,{filterOpponents})
    console.log(opponents)
    console.log("random" + randomOpponents)
    return (
    <div className='preview-card'>
        <h5>{filterOpponents}</h5>
    </div>
    )
}

export default OpponentGen