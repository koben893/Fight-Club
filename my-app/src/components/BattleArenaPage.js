import React, { useState, useEffect } from 'react'
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

function BattleArenaPage({ activeUser, opponents }) {
  const [team, setTeam] = useState([]);
  const [uFighter, setUFighter] = useState({});
  const [uHealth, setUHealth] = useState(10);
  const [opHealth, setOpHealth] = useState(10);
  useEffect(() => {
    if (activeUser.fighterList) {
      setTeam(activeUser.fighterList)
      setUFighter(activeUser.fighterList[0])
    }
    else {
      setTeam([])
      setUFighter({})
    }
    if (!activeUser.fighterList) {
      setUHealth(10);
      setOpHealth(10);
    }
  }, [activeUser])

  useEffect(() => {
    if (uHealth < 1 || opHealth < 1) {
      alert('Match Over');
      setUHealth(10);
      setOpHealth(10);
    }
  }, [uHealth, opHealth])

  const handleFight = (pNo, tier) => {
    if (pNo === 1) setOpHealth(c => c - tier)

    if (pNo === 2) setUHealth(c => c - tier)
  }

  const isTeamDisplayed = (team.length === 0) ? <div></div> : team.map(fighter => <span key={fighter}>{fighter.name + " "}</span>)
  const isArenaDisplayed = !uFighter.name ? <h4>Waiting For User & Opponent</h4> :
    <section>
      <h3>{uHealth}</h3>
      <FighterDisplay fighter={uFighter} handleFight={handleFight} pNo={1} />
      {isTeamDisplayed}
      <span>Vs</span>
      <h3>{opHealth}</h3>
      <FighterDisplay fighter={opponent} handleFight={handleFight} pNo={2} />
      {/* fighter List of Opponent */}
    </section>



  return (
    <div>
      {isArenaDisplayed}
    </div>
  )
}

export default BattleArenaPage