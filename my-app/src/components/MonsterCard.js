import React, {useState} from 'react'

function MonsterCard({id, name, image, tier, handleSelect}) {
  const [selected, setSelected] = useState(false)

  const handleClick = () => {
    setSelected(!selected)
    handleSelect(id)
  }

  return (
    <div onClick={handleClick}>
      {/* {selected ? selectedCard : <img src={image} alt={name}/>} */}
      <img src={image} alt={name}/>
    </div>
  )
}

export default MonsterCard
