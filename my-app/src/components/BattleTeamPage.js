import React from 'react'
import MonsterContainer from './MonsterContainer'

//conditional rendering, where if activeUser exists then show teaminfo else show createUser Form
//on rendering TeamPage always render fighterList, but form renders only when user does not exist, otherwise render teamInfo
function BattleTeamPage({cohort, userList}) {
  const teamInfo = userList.map(user => {
    return <MonsterContainer 
      cohort={cohort}
      key={user.id}
      teamName={user.teamName}
      fighterList={user.fighterList}
      trophies={user.trophies}
    />
  }
    )

  return (
    <div>
      {teamInfo}
    </div>
  )
}

export default BattleTeamPage
