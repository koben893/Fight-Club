import React,{useState, useEffect} from 'react'
import FighterDisplay from './FighterDisplay';

const opponent = {
  "id": 6,
  "name": "Francesco Weeee",
  "tier": 1,
  "image": "https://i.imgur.com/GwcwHSU.png",
  "sprite": "https://i.imgur.com/SCWgUQJ.png",
  "abilities": [
    {
      "firstattack": "fetch: DELETE",
      "secondattack": "destructuring props",
      "thirdattack": "useEffect Hook"
    }
  ]
}

function BattleArenaPage({activeUser, opponents}) {
  const [team, setTeam] = useState([]);
  const [uFighter, setUFighter] = useState({});
  const [uHealth, setUHealth] = useState(10);
  const [opHealth, setOpHealth] = useState(10);
  useEffect(()=>{
    if (activeUser.fighterList) {
     setTeam(activeUser.fighterList)
     setUFighter(activeUser.fighterList[0])
    }
    else {
      setTeam([])
      setUFighter({})
    }
  },[activeUser])
  

console.log(uHealth, opHealth);
  const renderActiveFighter = (!activeUser.name) ? <div></div>: <FighterDisplay fighter={uFighter} />
  const renderActiveOpponent = <FighterDisplay fighter={opponent} />
  //const renderUserTeam = (!activeUser.name) ? <div></div>: team.map(fighter => <BenchFighterDisplay fighter={fighter}/>)
  return (
    <div>
      {/* <div>
        <BattleText />
      </div> */}
      <button onClick={()=>{setOpHealth(c=>c-uFighter.tier)}}>User Attack</button>
      {renderActiveFighter}
      <span>Vs</span>
      <button onClick={()=>{setUHealth(c=>c-opponent.tier)}}>Opponent Attack</button>
      {renderActiveOpponent}
      {/* {renderUserTeam} */}
      </div>
  )
}

export default BattleArenaPage