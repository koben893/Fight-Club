import React from 'react'
import { useState } from 'react'
import FighterContainer from './FighterContainer'
//contains a userForm for creating userName TeamName also want to render monsterContainer to select Fighter List
const empty = { name: '', teamName: '', fighterList: [] }
function CreateUser({cohort}) {
  const [teamInfo, setTeaminfo] = useState(empty)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (teamInfo.name !== '' && teamInfo.teamName !== '')
      console.log(teamInfo)
    else console.log('please enter a name and teamName')
    setTeaminfo(empty);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='uname'>User Name:</label>
        <input type='text' id='uname' name='uname' value={teamInfo.name} onChange={e => setTeaminfo(current => ({ ...current, name: e.target.value }))}></input>
        <label htmlFor='uname'>Team Name:</label>
        <input type='text' id='tname' name='tname' value={teamInfo.teamName} onChange={e => setTeaminfo(current => ({ ...current, teamName: e.target.value }))}></input>
        <input type="submit" value="Submit"></input>
      </form>
      <FighterContainer cohort={cohort}/>
    </div>
  )
}

export default CreateUser
