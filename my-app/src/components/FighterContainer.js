import React, { useState, useEffect } from 'react'
import MonsterCard from './MonsterCard'

function FighterContainer({ cohort }) {
    console.log(cohort)
    const [displayedCoder, setDisplayedCoder] = useState('')

    const handleSelect = (id) => {
        const selectedCoder = cohort.filter((singleCoder) => singleCoder.id === id)
        setDisplayedCoder(selectedCoder[0])
    }

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
            <h1>Fighter Info</h1>
            <ul>
               {displayedCoder.name}
            </ul>
            <h1>Choose Your Team</h1>
            {renderedCoders}
        </div>
    )
}

export default FighterContainer