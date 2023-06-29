import React from 'react'
import MonsterCard from './MonsterCard'
import TeamCard from './TeamCard'

// component to create list of coders at the bottom

function FighterContainer({ cohort, handleSelect, teamList, displayedCoder}) {



    const renderedCoders = cohort.map(coder =>
        <MonsterCard
            key={coder.id}
            id={coder.id}
            name={coder.name}
            image={coder.image}
            tier={coder.tier}
            handleSelect={handleSelect}
            teamList={teamList}
            displayedCoder={displayedCoder}
        />
    )

    return (
        <div className="choose-fighter">
            <h2>Select Your Coders</h2>
            <div className='fighter-container'>
                {renderedCoders}
            </div>
        </div>
    )
}

export default FighterContainer