import React, {useState, useEffect} from 'react'
import CreateUser from './CreateUser'
import FighterContainer from './FighterContainer'
import TeamContainer from './TeamContainer'
import FighterInfo from './FighterInfo'

function BattleTeamPage({cohort, activeUser, handleUpdateActUser, handleTeamUpdate}) {
  const [displayedCoder, setDisplayedCoder] = useState({id:'', name:'', abilities:[]})
  const [teamList, setTeamList] = useState([]);

  useEffect(() => {
    if (activeUser.fighterList) setTeamList(activeUser.fighterList);
    else setTeamList([]);
  }, [activeUser])
  
  const handleSelect = (id) => {
    const selectedCoder = cohort.filter((singleCoder) => singleCoder.id === id)
    setDisplayedCoder(selectedCoder[0])
  }

  const addTeamMember = () => {
    setTeamList((currentTeamList) => [...currentTeamList, displayedCoder])
  }

const removeTeamMember = () => {
const updatedTeam = teamList.filter(coder => coder.id !== displayedCoder.id)
    setTeamList(updatedTeam)
}

  const showUser = activeUser.name ?
    <h1>{activeUser.teamName}</h1>
    :
    <CreateUser handleUpdateActUser={handleUpdateActUser} teamList={teamList}/>
    
  return (
    <div>
      {showUser}
      <div className='battle-team-page'>
        <FighterInfo displayedCoder={displayedCoder} teamList={teamList} addTeamMember={addTeamMember} removeTeamMember={removeTeamMember}/>
        <TeamContainer activeUser={activeUser} teamList={teamList} handleSelect={handleSelect} handleTeamUpdate={handleTeamUpdate}/>
      </div>
      <FighterContainer cohort={cohort} handleSelect={handleSelect}/>
    </div>
  )
}

export default BattleTeamPage
