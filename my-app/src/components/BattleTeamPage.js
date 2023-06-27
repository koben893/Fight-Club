import React from 'react'
import MonsterContainer from './MonsterContainer'

function BattleTeamPage({cohort, userList}) {
  const teamInfo = userList.map(user => 
    <MonsterContainer 
      cohort={cohort}
      key={user.id}
      teamName={user.teamName}
      fighterList={user.fighterList}
      trophies={user.trophies}
    />
    )
  return (
    <div>
      {teamInfo}
    </div>
  )
}

export default BattleTeamPage
