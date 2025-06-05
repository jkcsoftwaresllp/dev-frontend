// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddUserPage from './pages/AddUserPage';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  // Fetch users once when App mounts
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
          <Link to="/add-user">Add User</Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage users={users} />} />
          <Route path="/add-user" element={<AddUserPage setUsers={setUsers} users={users} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
