import { useLoaderData, useNavigate } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const navigate = useNavigate();
    return (
        <div>
            <h2>Username: {user?.name}</h2>
            <button onClick={()=> navigate(-1)}>Go back</button>
        </div>
    );
};

export default UserDetails;