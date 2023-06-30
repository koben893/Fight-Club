import React, { useState } from 'react'

const animateFighter = {
  "firstattack" : "partTheSeas 3s steps(4)",
  "secondattack" : "partTheSeasBehind 3s steps(4) infinite",
  "thirdattack" : 'standingStill 3s infinite',
  "default" :  'standingStill 3s infinite'
}

function FighterDisplay({ fighter, handleFight, pNo }) {
  const [spriteState, setSpriteState] = useState('default');
  const { name, sprite, tier, abilities } = fighter;
  const displaySprite = {
    backgroundImage: `url(${sprite})`,
    animation:`${animateFighter[spriteState]}`,
    transform: 'scale(4)'
  }
  console.log(animateFighter[spriteState]);

  const handleClick = (e) => {
    handleFight(pNo, tier)
    setSpriteState(e.target.name)
  }

  return (
    <section>
      <h4>{name}</h4>
      <button onClick={handleClick} name="firstattack">{abilities[0].firstattack}</button>
      <button onClick={handleClick} name="secondattack">{abilities[0].secondattack}</button>
      <button onClick={handleClick} name="thirdattack">{abilities[0].thirdattack}</button>
      <div style={displaySprite} className='team-sprite'></div>
    </section>

  )
}

export default FighterDisplay