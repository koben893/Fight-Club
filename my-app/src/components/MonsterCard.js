import React, {useState} from 'react'

function MonsterCard({id, name, tier, image, abilities, handleSelect}) {
  const [selected, setSelected] = useState(false)

  const handleClick = () => {
    setSelected(!selected)
    handleSelect(id)
  }

  // const selectedCard =    
  // <div>
  //   <h3>{name}</h3>
  //   <ul>
  //     <h5>Abilities</h5>
  //     <div>{moveset}</div>
  //   </ul>
  //   <h5>Tier: {tier}</h5>
  // </div>


  return (
    <div onClick={handleClick}>
      {/* {selected ? selectedCard : <img src={image} alt={name}/>} */}
      <img src={image} alt={name}/>
    </div>
  )
}

export default MonsterCard
