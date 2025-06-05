

import React, { useState, useEffect } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import Navigation from './components/Navigation';
import { fetchUsers, createUser } from './services/userService';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState('add'); // 'add' or 'list'

  
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const userData = await fetchUsers();
      setUsers(userData);
    } catch (err) {
      setError('Failed to fetch users. Please try again.');
      console.error('Error fetching users:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddUser = async (newUser) => {
    try {
      const createdUser = await createUser(newUser);
      
      
      console.log('POST Response:', createdUser);
      
      
      setUsers(prevUsers => [...prevUsers, { ...createdUser, id: Date.now() }]);
      
      return { success: true };
    } catch (err) {
      console.error('Error adding user:', err);
      return { success: false, error: 'Failed to add user. Please try again.' };
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="app-title">User Demo App</h1>
        
        <Navigation 
          currentPage={currentPage} 
          onPageChange={handlePageChange}
          userCount={users.length}
        />
        
        <div className="page-content">
          {currentPage === 'add' ? (
            <UserForm onAddUser={handleAddUser} onSuccess={() => setCurrentPage('list')} />
          ) : (
            <UserList 
              users={users} 
              loading={loading} 
              error={error}
              onRefresh={loadUsers}
              onAddNew={() => setCurrentPage('add')}
            />
          )}
        </div>
        
        <div className="app-footer">
          <p>Open browser console to see POST response logs</p>
        </div>
      </div>
    </div>
  );
};

export default App;