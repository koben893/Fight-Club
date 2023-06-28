import React, { useState, useEffect } from 'react'
import MonsterCard from './MonsterCard'


//create an internal state for fighterList then make sure to update activeuser fighterList when finished, initialize based on if user.fighterList exists
function MonsterContainer({ cohort, teamName, fighterList }) {
  const [displayedCoder, setDisplayedCoder] = useState(cohort[0])
  const [onTeam, setOnTeam] = useState()
  const [teamList, setTeamList] = useState(fighterList)
  const [points, setPoints] = useState(5)


  const addTeamMember = () => {
    setTeamList((currentTeamList) => [...currentTeamList, displayedCoder])
  }

  const removeTeamMember = () => {
    const updatedTeam = teamList.filter(coder => coder.id !== displayedCoder.id)
    setTeamList(updatedTeam)
  }

  const handleSelect = (id) => {
    const selectedCoder = cohort.filter((singleCoder) => singleCoder.id === id)
    setDisplayedCoder(selectedCoder[0])
  }

  const pointsLeft = teamList.reduce((accumulator, item) => {
    ['tier'].forEach((key) => {
      if (item[key]) {
        accumulator[key] = (accumulator[key] || 0) + item[key]
      }
    })
    return accumulator
  }, {})

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

  const renderedTeams = teamList.map(coder =>
    <MonsterCard
      key={coder.id}
      id={coder.id}
      name={coder.name}
      image={coder.image}
      handleSelect={handleSelect}
    />
  )

  const moveset = displayedCoder.abilities.map(moves => {
    return (
      <ul key={displayedCoder.id}>
        <p>{moves.firstattack}</p>
        <p>{moves.secondattack}</p>
        <p>{moves.thirdattack}</p>
      </ul>
    )
  })

  useEffect(() => {
    const copy = [...teamList];
    const copyD = { ...displayedCoder }
    if (copy.length === 0) setOnTeam(false);
    else {
      const found = copy.find((element) => element.id === copyD.id)
      if (found) setOnTeam(true);
      else setOnTeam(false);
    }
  }, [teamList, displayedCoder])

  return (
    <div>
      <div>
        <h1>Points Left to Build Team</h1>
        <h2>{points}</h2>
      </div>
      <div>
        <h1>Team Info</h1>
        <h2>{teamName}</h2>
        {renderedTeams}
      </div>
      <div>
        <h1>Fighter Info</h1>
        <div>
          <h3>{displayedCoder.name}</h3>
          <ul>
            <h5>Abilities</h5>
            {moveset}
          </ul>
          <h5>Tier: {displayedCoder.tier}</h5>
        </div>
        <div>{onTeam ?
          <button onClick={removeTeamMember}>Remove</button>
          :
          <button onClick={addTeamMember}>Add</button>}
        </div>
        {/* <button onClick={createTeam}>Create Team</button> */}
      </div>
      <div>
        <h1>Choose Your Team</h1>
        {renderedCoders}
      </div>
    </div>

  )
}

export default MonsterContainer
