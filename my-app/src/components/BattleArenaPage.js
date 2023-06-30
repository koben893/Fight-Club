import React, { useState, useEffect } from 'react'
import PlayerOneFighterDisplay from './PlayerOneFighterDisplay';
//import PlayerTwoFighterDisplay from './PlayerTwoFighterDisplay';
import TeamCard from './TeamCard';
import CpuFighterDisplay from './CpuFighterDisplay';

function BattleArenaPage({ activeUser, opponentTeam }) {
  const [team, setTeam] = useState([]);
  const [oTeam, setOTeam] = useState([]);
  const [uFighter, setUFighter] = useState({});
  const [oFighter, setOFighter] = useState({});
  const [uHealth, setUHealth] = useState(5);
  const [opHealth, setOpHealth] = useState(5);
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
      setUHealth(10);
      setOpHealth(10);
    }
  }, [activeUser, opponentTeam])

  useEffect(() => {
    const timerIDx = setTimeout(() => {

      if (team.length > 0 && uHealth <= 0) {
        setReadAttack('Match Over');
        setTeam(c => c.slice(1));
        setUFighter(team[0]);
        setUHealth(5);
      }

      if (oTeam.length > 0 && opHealth <= 0) {
        setReadAttack('Match Over');
        setOTeam(c => c.slice(1));
        setOFighter(oTeam[0]);
        setOpHealth(5);
        setCpuAtk('default');
      }

      if ((team.length === 0 && uHealth <= 0 ) || (oTeam.length === 0 && opHealth <= 0)) {
        alert("game over")
        setReadAttack(``);
        setUFighter(activeUser.fighterList[0]);
        setTeam([activeUser.fighterList[1], activeUser.fighterList[2]]);
        setOFighter(opponentTeam[0]);
        setOTeam([opponentTeam[1], opponentTeam[2]]);
        setCpuAtk('default');
        setTurn(true);
        setUHealth(5);
        setOpHealth(5);
      }
    }, 1000)

    return function cleanup() {
      clearTimeout(timerIDx);
    };
  }, [uHealth, opHealth, oTeam, team, activeUser, opponentTeam])

  // useEffect(() => {
  //   const timerIDy = setTimeout(() => {
  //     if (round < 4) {
  //       setReadAttack(`Round ${round} Begin`);
  //       setUFighter(activeUser.fighterList[round])
  //       setOFighter(opponentTeam[round])
  //     }
  //   }, 2000)

  //   return function cleanup() {
  //     clearTimeout(timerIDy);
  //   };

  // }, [activeUser, opponentTeam, round])


  const handleFight = (pNo, dmg, atk) => {
    setTurn(!turn);
    setTimeout(() => {
      setReadAttack(`${uFighter.name} use ${atk} and deals ${dmg} damage`)
      if (pNo === 1) setOpHealth(c => {
        if (c - dmg < 0) return 0
        else return c - dmg
      })
      //if (pNo === 2) setUHealth(c => c - tier)
    }, 2000)
  }

  useEffect(() => {
    const cpuAtkSet = ['firstattack', 'secondattack', 'thirdattack']
    const dmg = oFighter.tier;
    if (!turn && opHealth > 0) {
      const temp = cpuAtkSet[Math.floor(Math.random() * 3)]

      const timerIDy = setTimeout(() => {
        setCpuAtk(temp)
      }, 2000)

      const timerIDx = setTimeout(() => {
        setReadAttack(`${oFighter.name} uses ${oFighter.abilities[0][temp]} and deals ${dmg} damage`)
        setCpuAtk("default")
        setUHealth(c => {
          if (c - dmg < 0) return 0
          else return c - dmg
        })
        setTurn(!turn);
      }, 4000)

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
        <PlayerOneFighterDisplay fighter={uFighter} handleFight={handleFight} pNo={1} turn={turn} />
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