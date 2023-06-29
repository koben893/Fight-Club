import React from 'react'

function FighterDisplay({ fighter, handleFight, pNo}) {

     const { name, sprite, tier, abilities} = fighter;
    // const displaySprite = {
    //     backgroundImage: `url(${sprite})`,
    //     animation: 'standingStill 3s infinite',
    // }

    return (
        <section>
       <h4>{name}</h4>
        <button onClick={() => handleFight(pNo,tier)}>{abilities[0].firstattack}</button>
        <button onClick={() => handleFight(pNo,tier)}>{abilities[0].secondattack}</button>
        <button onClick={() => handleFight(pNo,tier)}>{abilities[0].thirdattack}</button>
        {/* <div style={displaySprite} className='team-sprite'></div> */}
      </section>
        
    )
}

export default FighterDisplay