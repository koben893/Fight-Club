import React, {useState, useEffect} from 'react'
import CreateUser from './CreateUser'
import FighterContainer from './FighterContainer'
import TeamContainer from './TeamContainer'
import FighterInfo from './FighterInfo'

function BattleTeamPage({cohort, activeUser, teamList, setTeamList}) {
  const [displayedCoder, setDisplayedCoder] = useState({id:'', name:'', abilities:[]})

  const handleSelect = (id) => {
    const selectedCoder = cohort.filter((singleCoder) => singleCoder.id === id)
    setDisplayedCoder(selectedCoder[0])
  }

  const teamInfo = activeUser.name ?
    <h1>{activeUser.teamName}</h1>
    :
    <CreateUser cohort={cohort}/>
    
  return (
    <div>
      {teamInfo}
      <div className='battle-team-page'>
        <FighterInfo displayedCoder={displayedCoder} teamList={teamList} setTeamList={setTeamList}/>
        <TeamContainer teamList={teamList} handleSelect={handleSelect}/>
      </div>
      <FighterContainer cohort={cohort} handleSelect={handleSelect}/>
    </div>
  )
}

export default BattleTeamPage
