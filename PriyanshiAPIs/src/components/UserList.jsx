import React, { useEffect } from 'react';
import axios from 'axios';

const UserList = ({ users, setUsers }) => {
  useEffect(() => {
    if (users.length === 0) {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setUsers(res.data))
        .catch(err => console.error(err));
    }
  }, [users, setUsers]);

  return (
    <div>
      <h2>Registered Users</h2>
      <table border="1">
        <thead>
          <tr><th>Name</th><th>Email</th><th>Username</th></tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id || user.name}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
