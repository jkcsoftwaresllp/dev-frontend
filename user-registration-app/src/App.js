import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RegisterUser from './components/RegisterUser';
import UserLIst from './components/UserLIst';

function App() {
  return (
    <Router>
      <nav style={{ padding: '10px' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Register</Link>
        <Link to="/users">User List</Link>
      </nav>
      <Routes>
        <Route path="/" element={<RegisterUser />} />
        <Route path="/users" element={<UserLIst />} />
      </Routes>
    </Router>
  );
}

export default App;

