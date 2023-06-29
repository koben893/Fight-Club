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
            <label htmlFor="name">User Name</label>
            <input type="text" name="name" value={userLogIn} onChange={e => { setUserLogIn(e.target.value)}} disabled={activeUser.name} ></input>
            <button onClick={checkUser}>{activeUser.name ? "log out" : "log in"}</button>
            <p>{activeUser.name ? 'Welcome to The Game: ' + activeUser.name : "Please Log In or Go to Create Your Team Page" }</p>
        </div>
    )
}

export default Login