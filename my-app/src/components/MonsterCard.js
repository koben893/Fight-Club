import React, {useState} from 'react'
import './Sprite.css'

// compoonent that renders coders card

function MonsterCard({id, name, image, handleSelect}) {
  const [selected, setSelected] = useState(false)

  const handleClick = () => {
    setSelected(!selected)
    handleSelect(id)
  }

  return (
    <div>
      <div onClick={handleClick}>
        {selected ? <img src={image} alt={name} className='selected-fighters'/> : <img src={image} alt={name} className='fighters'/>}
      </div>
    </div>
  )
}

export default MonsterCard
