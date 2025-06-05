import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RegisterUser from './components/RegisterUser';
import UserList from './components/UserList';

const App = () => {
  const [users, setUsers] = useState([]);

  return (
    <Router>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/">Register</Link> | <Link to="/users">User List</Link>
      </nav>
      <Routes>
        <Route path="/" element={<RegisterUser users={users} setUsers={setUsers} />} />
        <Route path="/users" element={<UserList users={users} setUsers={setUsers} />} />
      </Routes>
    </Router>
  );
};

export default App;
