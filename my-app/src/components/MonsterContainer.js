import React, {useState, useEffect} from 'react'
import MonsterCard from './MonsterCard'


//create an internal state for fighterList then make sure to update activeuser fighterList when finished, initialize based on if user.fighterList exists
function MonsterContainer({cohort, teamName, fighterList, trophies}) {
  const [displayedCoder, setDisplayedCoder] = useState(cohort[0])
  const [onTeam, setOnTeam] = useState()
  const [teamList, setTeamList] = useState(fighterList)
  const [points, setPoints] = useState(5)

  const isCoderOnTeam = teamList.includes(displayedCoder)

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
    // teamList[0]

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
    if (isCoderOnTeam) {
      return setOnTeam(true)
    } else {
      return setOnTeam(false)
    }
  },[isCoderOnTeam, displayedCoder])

  // useEffect(() => {
  //   fetchData()
  // }, [])

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("http://localhost:3000/Users")
  //     const data = await response.json()
  //     setItems(data)
  //   } catch (error) {
  //     console.log('error fetching')
  //   }
  // }

  // const createTeam = async (teamList)

  // const createTeam = () => {
  //      const requestOptions = {
  //     method: 'PATCH',
  //     headers: {'Content-Type' : 'application/json'},
  //     body: JSON.stringify(teamList)
  //   }
  //   try {
  //     const response = fetch("http://localhost:3000/Users/", requestOptions)
  //     if (response.ok) {
  //       console.log('patch works')
  //     } else {
  //       console.log('patch failed')
  //     } 
  //   } catch (error) {
  //       console.log('error')
  //   }
  // }

  // const postTeam = () => {
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: {'Content-Type' : 'application/json'},
  //     body: JSON.stringify('new user team set up with')
  //   }
  //   try {
  //     const response = fetch("http://localhost:3000/Users", requestOptions)
  //     if (response.ok) {
  //       console.log('post works')
  //     } else {
  //       console.log('post failed')
  //     } 
  //   } catch (error) {
  //       console.log('error')
  //   }
  //   console.log(displayedCoder)
  // }

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
