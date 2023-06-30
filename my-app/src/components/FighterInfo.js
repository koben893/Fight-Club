import React, {useState, useEffect} from 'react'

function FighterInfo({displayedCoder, teamList, addTeamMember, removeTeamMember}) {
    const [onTeam, setOnTeam] = useState()

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
          <div key={displayedCoder.id}>
            <p className='abilities-list'>{moves.firstattack}</p>
            <p className='abilities-list'>{moves.secondattack}</p>
            <p className='abilities-list'>{moves.thirdattack}</p>
          </div>
        )
    })

    const thrust = {
        backgroundImage: `url(${displayedCoder.sprite})`,
        animation: 'thrust 2s steps(4) infinite',
    }

    // const spellcast = {
    //     backgroundImage: `url(${displayedCoder.sprite})`,
    //     animation: 'spellcast 2s steps(4) infinite',
    //     // animation: 'spellcast 2s steps(4)',
    // }

    // const slash = {
    //     backgroundImage: `url(${displayedCoder.sprite})`,
    //     animation: 'slash 2s steps(3) infinite',
    // }

    // const partTheSeasBehind = {
    //     backgroundImage: `url(${displayedCoder.sprite})`,
    //     animation: 'partTheSeasBehind 3s steps(4) infinite',
    // }
    

    const fighterInfo =  
    <div className='fighter-info'>
        <div className='fighter-details'>
            <div>
                <h2 className='fighter-name'>{displayedCoder.name}</h2>
                <div className='abilities'>
                    <h4>Abilities</h4>
                    {moveset}
                </div>
                <h5>Tier: {displayedCoder.tier}</h5>
            </div>
            <div className='button-container'>{onTeam ?
                <button className="remove-team-button" onClick={removeTeamMember}>Remove</button>
                :
                <button className="add-team-button" onClick={addTeamMember}>Add</button>}
            </div>
        </div>
        <div className='fighter-info-sprite'>
            <div>
                <div style={thrust} className='team-page-main-sprite'></div>
            </div>
            <img className='fighter-info-image' src={displayedCoder.image} alt={displayedCoder.name}/>
        </div>
    </div>

    const display = displayedCoder.name ? fighterInfo : <div></div>

    return (
        <div>
            {display}
        </div>
    )
}

export default FighterInfo;