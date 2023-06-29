import React, { useState } from 'react'

function FighterDisplay({ fighter, handleFight, pNo }) {
  const [spriteState, setSpriteState] = useState('standingStill');
  const { name, sprite, tier, abilities } = fighter;
  const displaySprite = {
    backgroundImage: `url(${sprite})`,
    animation: 'standingStill 3s infinite',
  }


  const handleClick = (e) => {
    handleFight(pNo, tier)
    setSpriteState(e.target.name)
  }

  console.log(spriteState)
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