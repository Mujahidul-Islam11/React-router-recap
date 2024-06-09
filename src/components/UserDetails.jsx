import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    return (
        <div>
            <h2>Username: {user?.name}</h2>
        </div>
    );
};

export default UserDetails;