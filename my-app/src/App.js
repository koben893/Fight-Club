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
  const [opponentTeam, setOpponentTeam] = useState([]);

  const handleLogInUser = (activeUser) => setActiveUser(activeUser)

  const handleUpdateActUser = (newUser) => {
    setActiveUser(newUser)
    setUserList(current => [...current, newUser])
  }

  const handleTeamUpdate = (teamList) => {
    if (teamList.length !== 3) alert('need 3 coders only')
    else if (activeUser.name) setActiveUser(current => ({ ...current, fighterList: teamList }))
    else alert('no one is signed in')
  }

  const handleOpponentTeam = (team) => setOpponentTeam(team);

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
      <h1>Flatiron Fight-Club</h1>
      <Login userList={userList} handleLogInUser={handleLogInUser} activeUser={activeUser} />
      <Navbar />
      <Switch>
        <Route path="/pregame">
          <Home cohort={cohort} activeUser={activeUser} handleOpponentTeam={handleOpponentTeam} opponentTeam={opponentTeam} />
        </Route>
        <Route path="/arena">
          <BattleArenaPage activeUser={activeUser} opponentTeam={opponentTeam} />
        </Route>
        <Route path="/trophies">
          <TrophiesPage />
        </Route>
        <Route exact path="/">
          <BattleTeamPage
            cohort={cohort} activeUser={activeUser} handleUpdateActUser={handleUpdateActUser} handleTeamUpdate={handleTeamUpdate} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
