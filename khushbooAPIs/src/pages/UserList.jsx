import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const location = useLocation();
  const newUser = location.state?.newUser;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        let fetchedUsers = res.data;

        // Append the newly registered user (from navigation state)
        if (newUser) {
          fetchedUsers = [...fetchedUsers, newUser];
        }

        setUsers(fetchedUsers);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };

    fetchUsers();
  }, [newUser]); // Important: run this if newUser changes

  return (
    <div style={{ padding: "1rem" }}>
      <h2>List of Registered Users</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr><th>Name</th><th>Email</th><th>Username</th></tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr key={u.id ?? `new-${i}`}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
