
function Login (){

    return(
        <div>
            <label htmlFor="name">User Name</label>
            <input type="text" name="name"></input>
            <button>Login Here</button>
            {/* if name === login name then fill out with data of login db */}
        </div>
    )
}

export default Login