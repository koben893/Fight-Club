import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './components/Home'
import BattleArenaPage from './components/BattleArenaPage';
import BattleTeamPage from './components/BattleTeamPage';
import TrophiesPage from './components/TrophiesPage';
import Navbar from './components/Navbar';
import Login from './components/Login';

function App() {
  const [cohort, setCohort] = useState([])
  const [userList, setUserList] = useState([])
  const [activeUser, setActiveUser] = useState({})
  const [teamList, setTeamList] = useState([]);

  const handleLogInUser = (activeUser) => setActiveUser(activeUser)

  const handleUpdateActUser = (newUser) => {
    setActiveUser(newUser)
    setUserList(current=>[...current, newUser])
 }

  const handleTeamSubmission = () => {
    if (teamList.length < 3 || teamList.length > 3) alert('need 3 coders only')
    else if (activeUser.name) setActiveUser(current => ({ ...current, fighterList: teamList }))
    else alert('no one is signed in')
  }

  useEffect(() => {
    if (activeUser.fighterList) {
      setTeamList(activeUser.fighterList)
    }
    else setTeamList([]);
  }, [activeUser])


  useEffect(() => {
    fetch("http://localhost:3000/fighters")
      .then(r => r.json())
      .then(coder => setCohort(coder))
  }, [])

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then(r => r.json())
      .then(user => setUserList(user))
  }, [])

  return (
    <div className="App">
      <h1>Title of Our App</h1>
      <Login userList={userList} handleLogInUser={handleLogInUser} activeUser={activeUser} setTeamList={setTeamList} />
      <Navbar />
      <Switch>
        <Route path="/teamPage">
          <BattleTeamPage
            cohort={cohort}
            activeUser={activeUser}
            teamList={teamList}
            setTeamList={setTeamList}
            handleUpdateActUser={handleUpdateActUser}
            handleTeamSubmission={handleTeamSubmission} />
        </Route>
        <Route path="/arena">
          <BattleArenaPage />
        </Route>
        <Route path="/trophies">
          <TrophiesPage />
        </Route>
        <Route exact path="/">
          <Home userList={userList} cohort={cohort} activeUser={activeUser} handleActUser={handleLogInUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
