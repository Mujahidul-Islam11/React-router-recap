import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul style={{display:"flex", gap:"20px"}}>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/Users'}>Users</Link>
                    <Link to={'/About'}>About</Link>
                    <Link to={'/Contact'}>Contact</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;