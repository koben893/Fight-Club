import React from 'react'
import Trophy from './Trophy';
import { useState } from 'react';

const allTrophies = {
  "t1" : { state: false, text: 'You Beat the Game Hooray!', emoji: "a" },
  "t2" : { state: false, text: 'You Defeated The Boss, Good Job!', emoji: "x" },
  't3': { state: false, text: 'Slayer of Cats', emoji: "t" },
  't4': { state: false, text: 'Biggest Loser', emoji: "o" },
  't5': { state: false, text: 'Hope Springs Eternal', emoji: "o" },
}


function TrophiesPage() {
  const [trophyState, setTrophyState] = useState(allTrophies);
  const displayMyTrophies = [];

  //handles whether trophy is active and should be displayed
  function handleTrophyState (tnum){
    const a = trophyState[tnum];
    setTrophyState( cur => ({...cur, [tnum] : {...a, state : !a.state}}))
  }

  function handleClick() {
    handleTrophyState('t1')
    handleTrophyState('t2')
    handleTrophyState('t3')
    handleTrophyState('t4')
    handleTrophyState('t5')
  }

  for (let key in allTrophies) {
    if (trophyState[key].state) displayMyTrophies.push(<Trophy key={key} text={allTrophies[key].text} emoji={allTrophies[key].emoji} />)
  }

  return (
    <div>
      {displayMyTrophies}
      <button onClick={handleClick}>click Me</button>
    </div>
  )
}

export default TrophiesPage