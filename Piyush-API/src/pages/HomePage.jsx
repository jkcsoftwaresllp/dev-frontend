import React from 'react';

function HomePage({ users }) {
  return (
    <div style={{
      boxShadow: '0 2px 8px #0001',
      borderRadius: '8px',
      padding: '1rem',
      background: '#fff',
      marginBottom: '1rem'
    }}>
      <h2 style={{ marginBottom: '1rem', color: '#1976d2' }}>Registered Users</h2>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        background: '#fff',
        border: '1px solid #ccc'
      }}>
        <thead>
          <tr>
            <th style={{border: '1px solid #ccc', padding: '8px', background: '#f5f5f5'}}>Name</th>
            <th style={{border: '1px solid #ccc', padding: '8px', background: '#f5f5f5'}}>Email</th>
            <th style={{border: '1px solid #ccc', padding: '8px', background: '#f5f5f5'}}>Username</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="3" style={{textAlign: 'center', color: '#888', padding: '16px'}}>No users found.</td>
            </tr>
          ) : (
            users.map(user => (
              <tr key={user.id || user.email}>
                <td style={{border: '1px solid #ccc', padding: '8px'}}>{user.name}</td>
                <td style={{border: '1px solid #ccc', padding: '8px'}}>{user.email}</td>
                <td style={{border: '1px solid #ccc', padding: '8px'}}>{user.username}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default HomePage;