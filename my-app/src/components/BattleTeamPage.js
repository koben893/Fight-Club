import React from 'react'
import MonsterContainer from './MonsterContainer'
import CreateUser from './CreateUser'
//conditional rendering, where if activeUser exists then show teaminfo else show createUser Form
//on rendering TeamPage always render fighterList, but form renders only when user does not exist, otherwise render teamInfo
function BattleTeamPage({cohort, activeUser}) {
  const teamInfo = activeUser.name ?
    <MonsterContainer 
      cohort={cohort}
      key={activeUser.id}
      teamName={activeUser.teamName}
      fighterList={activeUser.fighterList}
    />
    :
    <CreateUser cohort={cohort}/>
    
  return (
    <div>
      {teamInfo}
    </div>
  )
}

export default BattleTeamPage
