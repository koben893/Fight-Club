import './App.css';
import React, {useState, useEffect} from 'react';
import Home from './components/Home'

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
      <Home />
    </div>
  );
}

export default App;
