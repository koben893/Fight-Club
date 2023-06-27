import Navbar from "./Navbar"
import Login from './Login'
import { useState } from "react";
import TeamPreviewCard from "./TeamPreviewCard";
import { act } from "react-dom/test-utils";


function Home({ cohert, userList, activeUser, setActiveUser }) {
    const handleActUser = (activeUser) => setActiveUser(activeUser);

    console.log(activeUser);

    const displayACard = activeUser.name ? <TeamPreviewCard player={activeUser} /> : <p>No Player Selected</p>
    console.log(activeUser);
    const playerOne = {name: 'TJ', teamName : 'Gotcha', fighterList : cohert.slice(0,3)}
    const playerTwo = {name: 'CPU', teamName : 'CodeBosses', fighterList : cohert.slice(10, 13) }
    return (
        <div>
            <Login userList={userList} handleActUser={handleActUser} />
            {displayACard}
            <span>VS</span>
            <TeamPreviewCard player={playerTwo}/>
        </div>
    )

}

export default Home;