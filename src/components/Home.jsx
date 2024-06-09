import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h3>This is home</h3>
            <Outlet></Outlet> 
            {/* Have to use outlet to show the nested routes under the home component */}
        </div>
    );
};

export default Home;