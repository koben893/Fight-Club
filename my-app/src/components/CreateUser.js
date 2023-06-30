import React from 'react'
import { useState } from 'react'

const empty = { name: '', teamName: '', fighterList: [] }

function CreateUser({handleUpdateActUser, teamList}) {
  const [teamInfo, setTeaminfo] = useState(empty)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (teamInfo.name === '' || teamInfo.teamName === '') alert("Create a Name and Team Name")
    else if (teamList.length !== 3) alert('Only 3 Coders Per Team')
    else {
      const utdUser = {...teamInfo};
      const utdTL = [...teamList];
      const postObj = { 
        name : utdUser.name,
        teamName : utdUser.teamName,
        fighterList : utdTL
      }

      fetch("http://localhost:3000/users", {
        method : "POST",
        headers: {"Content-Type" : "application/json"},
        body : JSON.stringify(postObj)
      })
      .then(r=>r.json())
      .then(data=>handleUpdateActUser(data))
    }

    setTeaminfo(empty);
  }

  return (
    <div className='create-user-container'>
      <form className='create-user-form' onSubmit={handleSubmit}>
        <label className='create-label' htmlFor='uname'>Create User Name:</label>
        <input className='create-form' type='text' id='uname' name='uname' value={teamInfo.name} onChange={e => setTeaminfo(current => ({ ...current, name: e.target.value }))}></input>
        <label className='create-label' htmlFor='uname'>Create Team Name:</label>
        <input className='create-form' type='text' id='tname' name='tname' value={teamInfo.teamName} onChange={e => setTeaminfo(current => ({ ...current, teamName: e.target.value }))}></input>
          <div className='create-submit-container'>
            <input className='create-submit' type="submit" value="Submit"></input>
          </div>
      </form>
    </div>
  )
}

export default CreateUser
