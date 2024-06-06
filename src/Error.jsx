import { useRouteError } from "react-router-dom";


const Error = () => {
    const err = useRouteError();
    return (
        <div>
            <h3>Opps!</h3>
            <p>{err.statusText}</p>
        </div>
    );
};

export default Error;