import React, { useState } from 'react'

const animateFighter = {
  "firstattack" : "spellcast 2s steps(4) infinite",
  "secondattack" : "slash 2s steps(3) infinite",
  "thirdattack" : 'thrust 2s steps(4) infinite',
  "default" :  'standingStill 3s infinite'
}

function PlayerOneFighterDisplay({ fighter, handleFight, pNo, turn}) {
  const [spriteState, setSpriteState] = useState('default');
  const { name, sprite, tier, abilities } = fighter;
  const displaySprite = {
    backgroundImage: `url(${sprite})`,
    animation:`${animateFighter[spriteState]}`,
    transform: 'scale(5)'
  }
  //console.log(animateFighter[spriteState]);

  const handleClick = (e) => {
    handleFight(pNo, tier, abilities[0][e.target.name])
    setSpriteState(e.target.name)
  }

  return (
    <section className='moves-sprite-container'>
      <div className='moves-button-container'>
        <h2 className='teal-header'>{name}</h2>
        <div className='moves-button-list'>
          <button className='moves-button' disabled={!turn} onClick={handleClick} name="firstattack">{abilities[0].firstattack}</button>
          <button className='moves-button' disabled={!turn} onClick={handleClick} name="secondattack">{abilities[0].secondattack}</button>
          <button className='moves-button' disabled={!turn} onClick={handleClick} name="thirdattack">{abilities[0].thirdattack}</button>
        </div>
      </div>
      <div className='current-fighter'>
        <div style={displaySprite} className='team-sprite'></div>
      </div>
    </section>

  )
}

export default PlayerOneFighterDisplay