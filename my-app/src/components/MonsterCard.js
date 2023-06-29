import React, { useState, useEffect } from 'react'
import './Sprite.css'
import FighterContainer from './FighterContainer'

// compoonent that renders coders card

function MonsterCard({ id, name, image, handleSelect, teamList, displayedCoder }) {
  const [selected, setSelected] = useState(false)

  useEffect(() => {
    function isSelected() {
      if (displayedCoder.id === id) setSelected(true);
      else setSelected(false);

      teamList.forEach(fighter => {
        if (id === fighter.id) setSelected(true);
      }
      )
    }
    isSelected();
  }, [teamList, id, displayedCoder])


  const handleClick = () => {
    handleSelect(id)
  }

  return (
    <div>
      <div onClick={handleClick}>
        {selected ? <img src={image} alt={name} className='selected-fighters' /> : <img src={image} alt={name} className='fighters' />}
      </div>
    </div>
  )
}

export default MonsterCard
