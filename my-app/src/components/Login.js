import { useState } from "react"

function Login({ userList, handleLogInUser, activeUser}) {
    const [userLogIn, setUserLogIn] = useState('');

    const checkUser = () => {
        const userFound = userList.find(user=>(user.name === userLogIn))
        if(activeUser.name) handleLogInUser({});
        else if (userFound) {
            handleLogInUser(userFound);
            setUserLogIn('');
        }
        else alert("not a user");
    }

    return (
        <div>
            {/* <label htmlFor="name">User Name</label> */}
            <p>{activeUser.name ? 'Welcome to The Game: ' + activeUser.name : "Please Log In or Create a User" }</p>
            <button className="login-button" onClick={checkUser}>{activeUser.name ? "Log Out" : "Log In"}</button>
            <input className="login-input" type="text" placeholder ="User Name" name="name" value={userLogIn} onChange={e => { setUserLogIn(e.target.value)}} disabled={activeUser.name} ></input>
        </div>
    )
}

export default Login