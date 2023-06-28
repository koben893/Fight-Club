import React, { useState, useEffect } from 'react'
import MonsterCard from './MonsterCard'

// component to create list of coders at the bottom

function FighterContainer({ cohort, handleSelect }) {

    const renderedCoders = cohort.map(coder =>
        <MonsterCard
            key={coder.id}
            id={coder.id}
            name={coder.name}
            image={coder.image}
            tier={coder.tier}
            handleSelect={handleSelect}
        />
    )

    return (
        <div>
            <h1>Choose Your Team</h1>
            {renderedCoders}
        </div>
    )
}

export default FighterContainer