import { useState } from "react"

function Login({ userList, handleActUser }) {
    const [logIn, setLogIn] = useState('');
    const [logState, setLogState] = useState(false);

    const checkUser = () => {
        if (userList[0].name === logIn) {
            setLogState(true);
            handleActUser(userList[0])
        }
        else console.log("not a user")
    }

    return (
        <div>
            <label htmlFor="name">User Name</label>
            <input type="text" name="name" value={logIn} onChange={e => { setLogIn(e.target.value) }}></input>
            <button onClick={checkUser}>{logState ? "Logged In" : "Click To Log In"}</button>
            <p>{logState ? 'Welcome to The Game: ' + logIn : "Please Log In or Go to Create Your Team Page" }</p>
        </div>
    )
}

export default Login