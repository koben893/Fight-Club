import React, { useState, useEffect } from 'react'
import FighterDisplay from './FighterDisplay';
import TeamCard from './TeamCard';

function BattleArenaPage({ activeUser, opponentTeam }) {
  const [team, setTeam] = useState([]);
  const [oTeam, setOTeam] = useState([]);
  const [uFighter, setUFighter] = useState({});
  const [oFighter, setOFighter] = useState({});
  const [uHealth, setUHealth] = useState(10);
  const [opHealth, setOpHealth] = useState(10);

  useEffect(() => {
    if (activeUser.fighterList) {
      setTeam([activeUser.fighterList[1],activeUser.fighterList[2] ])
      setUFighter(activeUser.fighterList[0])
    }
    else {
      setTeam([])
      setUFighter({})
    }

    if (opponentTeam.length !== 0) {
      setOFighter(opponentTeam[0])
      setOTeam([ opponentTeam[1], opponentTeam[2] ])
    }
    else {
      setOFighter({});
      setOTeam([]);
    }

    if (!activeUser.fighterList) {
      setUHealth(10);
      setOpHealth(10);
    }
  }, [activeUser, opponentTeam])

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

  const isTeamDisplayed = (team.length === 0) ? <div></div> : team.map(coder => <TeamCard key={coder.id} id={coder.id} name={coder.name} sprite={coder.sprite} />)
  const isOTeamDisplayed = (oTeam.length === 0) ? <div></div> : oTeam.map(coder => <TeamCard key={coder.id} id={coder.id} name={coder.name} sprite={coder.sprite} />)
 
  const isArenaDisplayed = !uFighter.name || !oFighter.name ? <h4>Waiting For User & Opponent</h4> :
    <section>
      <h3>{uHealth}</h3>
      <FighterDisplay fighter={uFighter} handleFight={handleFight} pNo={1} />
      <div>
        {isTeamDisplayed}
      </div>

      <span>Vs</span>

      <h3>{opHealth}</h3>
      <FighterDisplay fighter={oFighter} handleFight={handleFight} pNo={2} />
      <div>
        {isOTeamDisplayed}
      </div>
    </section>

  return (
    <div>
      {isArenaDisplayed}
    </div>
  )
}

export default BattleArenaPage