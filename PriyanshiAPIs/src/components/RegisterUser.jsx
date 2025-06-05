import React, { useState } from 'react';
import axios from 'axios';

const RegisterUser = ({ users, setUsers }) => {
  const [formData, setFormData] = useState({ name: '', email: '', username: '' });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://jsonplaceholder.typicode.com/users', formData);
      console.log('Response:', res.data);
      setUsers([...users, res.data]);
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register User</h2>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterUser;
