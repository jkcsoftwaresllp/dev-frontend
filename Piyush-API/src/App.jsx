import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddUserPage from './pages/AddUserPage';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Router>
      <div style={{ maxWidth: 700, margin: '40px auto', fontFamily: 'Segoe UI, sans-serif' }}>
        <nav style={{
          display: 'flex',
          gap: '1rem',
          marginBottom: '2rem',
          background: '#f0f0f0',
          padding: '1rem',
          borderRadius: '8px'
        }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#1976d2', fontWeight: 600 }}>Home</Link>
          <Link to="/add-user" style={{ textDecoration: 'none', color: '#1976d2', fontWeight: 600 }}>Add User</Link>
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
