import { NavLink } from "react-router-dom";

function Navbar() {
    const dashes = <p className="dashes">//</p>

    return (
        <div className="nav">
            <NavLink to="/" exact className="nav-link" activeStyle={{ color: "#f9c51a" }}>{dashes}<p>HOME</p></NavLink>
            <NavLink to="/pregame" exact className="nav-link" activeStyle={{ color: "#f9c51a" }}>{dashes}<p>GAME PREVIEW</p></NavLink>
            <NavLink to="/arena" exact className="nav-link" activeStyle={{ color: "#f9c51a" }}>{dashes}<p>ARENA</p></NavLink>
            <NavLink to="/trophies" exact className="nav-link" activeStyle={{ color: "#f9c51a" }}>{dashes}<p>TROPHIES</p></NavLink>
        </div>
    )
}

export default Navbar;