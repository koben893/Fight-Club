import React, {useState, useEffect} from 'react'

function FighterInfo({displayedCoder, teamList, setTeamList}) {
    const [onTeam, setOnTeam] = useState()

    const addTeamMember = () => {
        setTeamList((currentTeamList) => [...currentTeamList, displayedCoder])
      }
    
    const removeTeamMember = () => {
    const updatedTeam = teamList.filter(coder => coder.id !== displayedCoder.id)
        setTeamList(updatedTeam)
    }

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

    const moveset = displayedCoder.abilities.map(moves => {
        return (
          <ul key={displayedCoder.id}>
            <p>{moves.firstattack}</p>
            <p>{moves.secondattack}</p>
            <p>{moves.thirdattack}</p>
          </ul>
        )
    })

    const fighterInfo =  
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
    </div>

    const display = displayedCoder ? fighterInfo : <div>Fighter Name: </div>

    return (
        <div>{display}</div>
    )
}

export default FighterInfo;