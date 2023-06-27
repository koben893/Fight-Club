import React, {useState} from 'react'
import MonsterCard from './MonsterCard'

function MonsterContainer({cohort, teamName, fighterList, trophies}) {
  const [displayedCoder, setDisplayedCoder] = useState(cohort[0])

  const handleSelect = (id) => {
    const selectedCoder = cohort.filter((singleCoder) => singleCoder.id === id)
    setDisplayedCoder(selectedCoder[0])
  }

  const moveset = displayedCoder.abilities.map(moves => { 
    return (
      <ul key={displayedCoder.id}>
        <p>{moves.firstattack}</p>
        <p>{moves.secondattack}</p>
        <p>{moves.thirdattack}</p>
      </ul>
    )
  })

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

  const renderedTeams = fighterList.map(coder => 
    <MonsterCard
      key={coder.id}
      id={coder.id}
      name={coder.name}
      image={coder.image}
      handleSelect={handleSelect}
    />
  )

  return (
    <div>
      <div>
        <h1>Team Info</h1>
          <h2>{teamName}</h2>
          {renderedTeams}
          <ul>{trophies}</ul>
      </div>
      <div>
        <h1>Fighter Info</h1>
          <div>
            <h3>{displayedCoder.name}</h3>
            <ul>
              <h5>Abilities</h5>
              {moveset}
            </ul>
            <h5>{displayedCoder.tier}</h5>
          </div>
      </div>
      <div>
        <h1>Choose Your Team</h1>
        {renderedCoders}
      </div>
    </div>
    
  )
}

export default MonsterContainer
