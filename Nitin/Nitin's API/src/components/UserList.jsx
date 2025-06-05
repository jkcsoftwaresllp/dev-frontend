
import React from 'react';
import UserItem from './UserItem';

const UserList = ({ users, loading, error, onRefresh, onAddNew }) => {
  if (loading) {
    return (
      <div className="page-container">
        <div className="user-list-container">
          <h2 className="list-title">Registered Users</h2>
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <span className="loading-text">Loading users...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-container">
        <div className="user-list-container">
          <h2 className="list-title">Registered Users</h2>
          <div className="error-container">
            <p className="error-text">{error}</p>
            <button onClick={onRefresh} className="retry-button">
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="user-list-container">
        <div className="list-header">
          <h2 className="list-title">
            Registered Users ({users.length})
          </h2>
          <div className="header-buttons">
            <button onClick={onAddNew} className="add-new-button">
              ➕ Add New User
            </button>
            <button onClick={onRefresh} className="refresh-button">
              🔄 Refresh
            </button>
          </div>
        </div>
        
        {users.length === 0 ? (
          <div className="empty-state">
            <p>No users found</p>
            <button onClick={onAddNew} className="empty-add-button">
              Add Your First User
            </button>
          </div>
        ) : (
          <div className="table-container">
            <table className="users-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <UserItem 
                    key={user.id || index} 
                    user={user} 
                  />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserList;