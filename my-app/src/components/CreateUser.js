import React from 'react'

//contains a userForm for creating userName TeamName also want to render monsterContainer to select Fighter List
function CreateUser() {
  return (
    <div>CreatUser
      <form>
        <label htmlFor='uname'>User Name:</label>
        <input type='text' id='uname' name='uname' placeholder='Create User Name'></input>
        <input></input>
        <submit></submit>
      </form>
    </div>
  )
}

export default CreateUser
