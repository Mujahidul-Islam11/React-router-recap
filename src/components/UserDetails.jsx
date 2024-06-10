import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const navigate = useNavigate();
    const params = useParams();
    console.log(params)
    return (
        <div>
            <h2>User id: {params?.id}</h2>
            <h2>Username: {user?.name}</h2>
            <button onClick={()=> navigate(-1)}>Go back</button>
        </div>
    );
};

export default UserDetails;