import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="nav">
            <NavLink to="/" exact className="nav-link" activeStyle={{ color: "red" }}>To Home</NavLink>
            <NavLink to="/teamPage" exact className="nav-link" activeStyle={{ color: "red" }}>Choose Battle Team</NavLink>
            <NavLink to="/trophies" exact className="nav-link" activeStyle={{ color: "red" }}>See Trophies</NavLink>
            <NavLink to="/arena" exact className="nav-link" activeStyle={{ color: "red" }}>Go To Arena</NavLink>
        </div>
    )
}

export default Navbar;