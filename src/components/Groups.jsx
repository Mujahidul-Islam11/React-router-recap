import { useLoaderData } from "react-router-dom";
import Group from "./Group";


const Groups = () => {
    const groups = useLoaderData();
    return (
        <div style={{display: "flex", flexWrap: "wrap", gap: "30px", justifyContent: "center", top: "20px", bottom:"20px", position: "relative"}}>
            {
                groups?.map(group => <Group key={group?.id} group={group}></Group>)
            }
        </div>
    );
};

export default Groups;