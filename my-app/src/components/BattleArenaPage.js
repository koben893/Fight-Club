import React, { useState, useEffect } from 'react'
import PlayerOneFighterDisplay from './PlayerOneFighterDisplay';
//import PlayerTwoFighterDisplay from './PlayerTwoFighterDisplay';
import TeamCard from './TeamCard';
import CpuFighterDisplay from './CpuFighterDisplay';

const allHealth = 10;
function BattleArenaPage({ activeUser, opponentTeam }) {
  const [team, setTeam] = useState([]);
  const [oTeam, setOTeam] = useState([]);
  const [uFighter, setUFighter] = useState({});
  const [oFighter, setOFighter] = useState({});
  const [uHealth, setUHealth] = useState(allHealth);
  const [opHealth, setOpHealth] = useState(allHealth);
  const [turn, setTurn] = useState(true);
  const [cpuAtk, setCpuAtk] = useState('default');
  const [readAttack, setReadAttack] = useState("")

  useEffect(() => {
    if (activeUser.fighterList) {
      setTeam([activeUser.fighterList[1], activeUser.fighterList[2]])
      setUFighter(activeUser.fighterList[0])
    }
    else {
      setTeam([])
      setUFighter({})
    }

    if (opponentTeam.length !== 0) {
      setOFighter(opponentTeam[0])
      setOTeam([opponentTeam[1], opponentTeam[2]])
    }
    else {
      setOFighter({});
      setOTeam([]);
    }

    if (!activeUser.fighterList) {
      setUHealth(allHealth);
      setOpHealth(allHealth);
    }
  }, [activeUser, opponentTeam])

  useEffect(() => {
    const timerIDx = setTimeout(() => {

      if (team.length > 0 && uHealth <= 0) {
        setReadAttack('Next Round');
        setTeam(c => c.slice(1));
        setUFighter(team[0]);
        setUHealth(allHealth);
      }

      if (oTeam.length > 0 && opHealth <= 0) {
        setReadAttack('Next Round');
        setOTeam(c => c.slice(1));
        setOFighter(oTeam[0]);
        setOpHealth(allHealth);
        setCpuAtk('default');
      }

      if ((team.length === 0 && uHealth <= 0) || (oTeam.length === 0 && opHealth <= 0)) {
        alert("game over")
        setReadAttack(``);
        setUFighter(activeUser.fighterList[0]);
        setTeam([activeUser.fighterList[1], activeUser.fighterList[2]]);
        setOFighter(opponentTeam[0]);
        setOTeam([opponentTeam[1], opponentTeam[2]]);
        setCpuAtk('default');
        setTurn(true);
        setUHealth(allHealth);
        setOpHealth(allHealth);
      }
    }, 2000)

    return function cleanup() {
      clearTimeout(timerIDx);
    };
  }, [uHealth, opHealth, oTeam, team, activeUser, opponentTeam])

  const handleFight = (pNo, dmg, atk) => {
    const dmgR = Math.ceil(Math.random()*2 * dmg);
    setTurn(!turn);
    setTimeout(() => {
      if (pNo === 1) {
        setReadAttack(`${uFighter.name} use ${atk} and deals ${dmgR} damage`)
        setOpHealth(c => {
          if (c - dmgR < 0) return 0
          else return c - dmgR
        })
      }
    }, 2000)
  }

  useEffect(() => {
    const cpuAtkSet = ['firstattack', 'secondattack', 'thirdattack']
    const dmg = oFighter.tier;
    const dmgR = Math.ceil(Math.random()*2 * dmg);
    if (!turn && opHealth > 0) {
      const temp = cpuAtkSet[Math.floor(Math.random() * 3)]

      const timerIDy = setTimeout(() => {
        setCpuAtk(temp)
      }, 3000)

      const timerIDx = setTimeout(() => {
        setReadAttack(`${oFighter.name} uses ${oFighter.abilities[0][temp]} and deals ${dmgR} damage`)
        setCpuAtk("default")
        setUHealth(c => {
          if (c - dmgR < 0) return 0
          else return c - dmgR
        })
        setTurn(!turn);
      }, 5000)

      return function cleanup() {
        clearTimeout(timerIDx);
        clearTimeout(timerIDy);
      };

    }
  }, [turn, oFighter, opHealth])

  const isTeamDisplayed = (team.length === 0) ? <div></div> : team.map(coder => <TeamCard key={coder.id} id={coder.id} name={coder.name} sprite={coder.sprite} />)
  const isOTeamDisplayed = (oTeam.length === 0) ? <div></div> : oTeam.map(coder => <TeamCard key={coder.id} id={coder.id} name={coder.name} sprite={coder.sprite} />)

  const isArenaDisplayed = !uFighter.name || !oFighter.name ? <div><h2>Waiting for User and Opponent</h2><h2>(Check Home Page)</h2></div> :
    <section className='versus-container'>
      <div className='player-one'>
        <h1 className='yellow-header'>{activeUser.teamName}</h1>
        <PlayerOneFighterDisplay fighter={uFighter} handleFight={handleFight} pNo={1} turn={turn} uHealth={uHealth}/>
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
        <h1 className='yellow-header'>The Walking Devs</h1>
        {/* <PlayerOneFighterDisplay fighter={oFighter} handleFight={handleFight} pNo={2} turn={!turn}/> */}
        <CpuFighterDisplay fighter={oFighter} cpuAtk={cpuAtk} />
        <div className='hp-team-list-container'>
          <div className='hp-team-list'>
            {isOTeamDisplayed}
          </div>
          <div className='health-container'>
            <p className='health'>Health</p>
            <h1 className='hp'>{opHealth}</h1>
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