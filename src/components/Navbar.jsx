import { Link, NavLink } from "react-router-dom";
import "../App.css"

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul style={{display:"flex", gap:"20px", justifyContent:"center", alignItems:"center"}}>
                    <Link to={'/'}>Home</Link>
                    <NavLink to={'/Groups'}>Groups</NavLink>
                    <NavLink to={'/Users'}>Users</NavLink>
                    <NavLink to={'/About'}>About</NavLink>
                    <Link to={'/Contact'}>Contact</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;