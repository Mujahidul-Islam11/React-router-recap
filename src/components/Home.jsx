import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "./Navbar";


const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Navbar></Navbar>
            <h3>This is home</h3>
            {
                navigation.state === "loading" ? <h3>Loading....</h3>:<Outlet></Outlet> 
            }
            {/* Have to use outlet to show the nested routes under the home component */}
        </div>
    );
};

export default Home;