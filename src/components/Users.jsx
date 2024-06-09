import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
      <h3>All of our users are in this component</h3>
      {users?.map((user) => (
        <div key={user.id}>
          <ul>
            <li>{user?.name}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Users;
