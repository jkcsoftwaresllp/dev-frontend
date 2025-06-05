import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddUserPage({ setUsers, users }) {
  const [formData, setFormData] = useState({ name: '', email: '', username: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/users', formData)
      .then(res => {
        setUsers([...users, { ...formData, id: Date.now() }]);
        setFormData({ name: '', email: '', username: '' });
        navigate('/');
      })
      .catch(err => console.error(err));
  };

  return (
    <div style={{
      boxShadow: '0 2px 8px #0001',
      borderRadius: '8px',
      padding: '2rem',
      background: '#fff',
      maxWidth: 400,
      margin: '0 auto'
    }}>
      <h2 style={{ color: '#1976d2', marginBottom: '1.5rem' }}>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '0.7rem',
            marginBottom: '1.2rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
            fontSize: '1rem'
          }}
        />
        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '0.7rem',
            marginBottom: '1.2rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
            fontSize: '1rem'
          }}
        />
        <input
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '0.7rem',
            marginBottom: '1.2rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
            fontSize: '1rem'
          }}
        />
        <button
          type="submit"
          style={{
            background: '#1976d2',
            color: '#fff',
            border: 'none',
            padding: '0.8rem 1.5rem',
            borderRadius: '4px',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          Add User
        </button>
      </form>
    </div>
  );
}

export default AddUserPage;