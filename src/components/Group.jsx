/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";


const Group = ({group}) => {
    return (
        <div style={{border: "2px solid greenyellow", borderRadius: "8px", padding:"20px"}}>
            <p>{group?.id}</p>
            <h3>{group?.name}</h3>
            <NavLink to={group?.link}>Visit The Group</NavLink>
        </div>
    );
};

export default Group;