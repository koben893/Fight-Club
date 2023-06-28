import React, {useState} from 'react'

// compoonent that renders coders card

function MonsterCard({id, name, image, handleSelect}) {
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
