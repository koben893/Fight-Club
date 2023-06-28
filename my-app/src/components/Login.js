import { useState } from "react"

function Login({ userList, handleActUser, activeUser}) {
    const [userLogIn, setUserLogIn] = useState('');
    //const [logState, setLogState] = useState(false);

    const checkUser = () => {
        if(activeUser.name){
            handleActUser({});
        }
        else if (userList[0].name === userLogIn) {
            handleActUser(userList[0]);
            setUserLogIn('');
        }
        else alert("not a user");
    }

    return (
        <div>
            <label htmlFor="name">User Name</label>
            <input type="text" name="name" value={userLogIn} onChange={e => { setUserLogIn(e.target.value)}} disabled={activeUser.name} ></input>
            <button onClick={checkUser}>{activeUser.name ? "log out" : "log in"}</button>
            <p>{activeUser.name ? 'Welcome to The Game: ' + userLogIn : "Please Log In or Go to Create Your Team Page" }</p>
        </div>
    )
}

export default Login