import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './components/Home'
import BattleArenaPage from './components/BattleArenaPage';
import BattleTeamPage from './components/BattleTeamPage';
import TrophiesPage from './components/TrophiesPage';
import Navbar from './components/Navbar';

function App() {
  const [cohort, setCohort] = useState([])
  const [userList, setUserList] = useState([])

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
      <Navbar />
      <Switch>
        <Route path="/teamPage">
          <BattleTeamPage />
        </Route>
        <Route path="/arena">
          <BattleArenaPage />
        </Route>
        <Route path="/trophies">
          <TrophiesPage />
        </Route>
        <Route exact path="/">
          <Home userList={userList} cohert={cohort}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
