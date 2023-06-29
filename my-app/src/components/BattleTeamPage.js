import React, {useState} from 'react'
import CreateUser from './CreateUser'
import FighterContainer from './FighterContainer'
import TeamContainer from './TeamContainer'
import FighterInfo from './FighterInfo'

function BattleTeamPage({cohort, activeUser, teamList, setTeamList, handleUpdateActUser, handleTeamSubmission}) {
  const [displayedCoder, setDisplayedCoder] = useState({id:'', name:'', abilities:[]})

  const handleSelect = (id) => {
    const selectedCoder = cohort.filter((singleCoder) => singleCoder.id === id)
    setDisplayedCoder(selectedCoder[0])
  }

  const teamInfo = activeUser.name ?
    <h1>{activeUser.teamName}</h1>
    :
    <CreateUser handleUpdateActUser={handleUpdateActUser} teamList={teamList}/>
    
  return (
    <div>
      {teamInfo}
      <TeamContainer teamList={teamList} handleSelect={handleSelect}/>
      <button onClick={handleTeamSubmission}>Confirm Changes to Your Team</button>
      <FighterInfo displayedCoder={displayedCoder} teamList={teamList} setTeamList={setTeamList}/>
      <FighterContainer cohort={cohort} handleSelect={handleSelect}/>
    </div>
  )
}

export default BattleTeamPage
