import Navbar from "./Navbar"
import Login from './Login'
import { useState } from "react";
import TeamPreviewCard from "./TeamPreviewCard";
import { act } from "react-dom/test-utils";

const noUser = {};
function Home({ cohert, userList }) {

    const [activeUser, setActiveUser] = useState(noUser);
    const handleActUser = (activeUser) => setActiveUser(activeUser);

    let listYourTeam;
    console.log(activeUser);


    // function setYourTeam (activeUser) {
    //     const yourTeam = cohert.filter(coder => {
    //             if (coder.id === activeUser.fighterList[0] || coder.id === activeUser.fighterList[1] || coder.id === activeUser.fighterList[2]) {
    //                 return true;
    //             }
    //             else return false;
    //         })
    //         return yourTeam.map(coder => <li key={coder.id}>{coder.name}</li>);
    // }

    // if(activeUser.fighterList) {
    //     listYourTeam = setYourTeam(activeUser)
    // }
    // else listYourTeam = <p>No Team Set</p>;

    const playerOne = {name: 'TJ', teamName : 'Gotcha', fighterList : cohert.slice(0,3)}
    const playerTwo = {name: 'CPU', teamName : 'CodeBosses', fighterList : cohert.slice(10, 13) }
    return (
        <div>
            <Login userList={userList} handleActUser={handleActUser} />
            <TeamPreviewCard player={playerOne}/>
            <span>VS</span>
            <TeamPreviewCard player={playerTwo}/>
        </div>
    )

}

export default Home;