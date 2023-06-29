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
      <div className='battle-team-container'>
        <FighterInfo displayedCoder={displayedCoder} teamList={teamList} addTeamMember={addTeamMember} removeTeamMember={removeTeamMember}/>
        <TeamContainer activeUser={activeUser} teamList={teamList} handleSelect={handleSelect} handleTeamUpdate={handleTeamUpdate}/>
      </div>
      <div className='fighter-container-handler'>
        <FighterContainer cohort={cohort} handleSelect={handleSelect} teamList={teamList} displayedCoder={displayedCoder}/>
      </div>
    </div>
  )
}

export default BattleTeamPage
