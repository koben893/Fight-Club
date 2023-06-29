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
          <ul key={displayedCoder.id}>
            <p>{moves.firstattack}</p>
            <p>{moves.secondattack}</p>
            <p>{moves.thirdattack}</p>
          </ul>
        )
    })

    const partTheSeasSprite = {
        backgroundImage: `url(${displayedCoder.sprite})`,
        animation: 'partTheSeas 3s steps(4) infinite',
    }

    // const partTheSeasBehind = {
    //     backgroundImage: `url(${displayedCoder.sprite})`,
    //     animation: 'partTheSeasBehind 3s steps(4) infinite',
    // }
    

    const fighterInfo =  
    <div className='fighter-info'>
        <div className='fighter-details'>
            <div>
                <h2>{displayedCoder.name}</h2>
                <ul>
                    <h4>Abilities</h4>
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
        <div className='fighter-info-sprite'>
            <div style={partTheSeasSprite} className='sprite'></div>
            {/* <div style={partTheSeasBehind} className='sprite'></div> */}
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