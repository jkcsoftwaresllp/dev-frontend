
import React, { useState } from 'react';

const UserForm = ({ onAddUser, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setSubmitting(true);
    
    const result = await onAddUser(formData);
    
    if (result.success) {
      
      setFormData({
        name: '',
        email: '',
        username: ''
      });
      alert('User added successfully!');
      
      if (onSuccess) {
        setTimeout(() => onSuccess(), 1000);
      }
    } else {
      alert(result.error);
    }
    
    setSubmitting(false);
  };

  return (
    <div className="page-container">
      <div className="user-form-container">
        <h2 className="form-title">Add New User</h2>
        
        <form onSubmit={handleSubmit} className="user-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`form-input ${errors.name ? 'error' : ''}`}
              placeholder="Enter full name"
              disabled={submitting}
              autoComplete="name"
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`form-input ${errors.email ? 'error' : ''}`}
              placeholder="Enter email address"
              disabled={submitting}
              autoComplete="email"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username *
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className={`form-input ${errors.username ? 'error' : ''}`}
              placeholder="Enter username"
              disabled={submitting}
              autoComplete="username"
            />
            {errors.username && <span className="error-message">{errors.username}</span>}
          </div>
          
          <button
            type="submit"
            disabled={submitting}
            className="submit-button"
          >
            {submitting ? 'Adding User...' : 'Add User'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;