import React, { useState, useEffect } from 'react'
import PlayerOneFighterDisplay from './PlayerOneFighterDisplay';
import PlayerTwoFighterDisplay from './PlayerTwoFighterDisplay';
import TeamCard from './TeamCard';
import CpuFighterDisplay from './CpuFighterDisplay';

function BattleArenaPage({ activeUser, opponentTeam }) {
  const [team, setTeam] = useState([]);
  const [oTeam, setOTeam] = useState([]);
  const [uFighter, setUFighter] = useState({});
  const [oFighter, setOFighter] = useState({});
  const [uHealth, setUHealth] = useState(10);
  const [opHealth, setOpHealth] = useState(10);
  const [turn, setTurn] = useState(true);
  const [cpuAtk, setCpuAtk] = useState('default');
  const [readAttack, setReadAttack] = useState("")

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


  const handleFight = (pNo, tier, atk) => {
    setReadAttack(`${uFighter.name} use ${atk} and deals ${tier} damage`)
    setTimeout(()=>{
      if (pNo === 1) setOpHealth(c => c - tier)
      if (pNo === 2) setUHealth(c => c - tier)
      setTurn(!turn);
    }, 3000)

  }

  useEffect(()=>{
    const cpuAtkSet = ['firstattck', 'secondattack', 'thirdattack']
    const dmg = oFighter.tier;
    if(!turn){
      const temp = cpuAtkSet[Math.floor(Math.random() *3)]
      setCpuAtk(temp)
      
      setTimeout(()=>setReadAttack(`${oFighter.name} uses ${oFighter.abilities[0][temp]} and deals ${dmg} damage`), 2000)
      setTimeout(()=>{
        setUHealth(c => c - dmg)
        setTurn(!turn);
      }, 5000)
    }
  },[turn, oFighter])

  const isTeamDisplayed = (team.length === 0) ? <div></div> : team.map(coder => <TeamCard key={coder.id} id={coder.id} name={coder.name} sprite={coder.sprite} />)
  const isOTeamDisplayed = (oTeam.length === 0) ? <div></div> : oTeam.map(coder => <TeamCard key={coder.id} id={coder.id} name={coder.name} sprite={coder.sprite} />)
 
  const isArenaDisplayed = !uFighter.name || !oFighter.name ? <div><h2>Waiting for User and Opponent</h2><h2>(Check Home Page)</h2></div> :
    <section className='versus-container'>
      <div className='player-one'>
        <h1 className='yellow-header'>Team Name Here</h1>
        <PlayerOneFighterDisplay fighter={uFighter} handleFight={handleFight} pNo={1} turn={turn}/>
        <div className='hp-team-list-container'>
          <div className='health-container'>
              <p className='health'>Health</p>
              <h1 className='hp'>{uHealth}</h1>
          </div>
          <div className='hp-team-list'>
            {isTeamDisplayed}
          </div>
        </div>
      </div>

      <h2 className="versus">VS</h2>

      <div className='player-one'>
        <h1 className='yellow-header'>Team Name Here</h1>
        {/* <PlayerOneFighterDisplay fighter={oFighter} handleFight={handleFight} pNo={2} turn={!turn}/> */}
        <CpuFighterDisplay fighter={oFighter} cpuAtk={cpuAtk}/>
        <div className='hp-team-list-container'>
        <div className='hp-team-list'>
            {isOTeamDisplayed}
          </div>
          <div className='health-container'>
              <p className='health'>Health</p>
              <h1 className='hp'>{opHealth}</h1>
          </div>
          <div className='hp-team-list'>
            {isOTeamDisplayed}
          </div>
        </div>
      </div>
    </section>

  return (
    <div>
      {isArenaDisplayed}
      <h4>{readAttack}</h4>
    </div>
  )
}

export default BattleArenaPage