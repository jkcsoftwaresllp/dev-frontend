import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function AddUserPage({ setUsers, users }) {
  const [formData, setFormData] = useState({ name: '', email: '', username: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/users', formData)
      .then(() => {
        setUsers([...users, { ...formData, id: Date.now() }]); 
        setFormData({ name: '', email: '', username: '' });
        alert("User successfully added!");
        navigate('/'); 
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required /><br /><br />
        <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required /><br /><br />
        <input name="username" placeholder="Username" value={formData.username} onChange={handleChange} required /><br /><br />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default AddUserPage;