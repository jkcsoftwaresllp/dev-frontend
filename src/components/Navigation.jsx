import React from "react";

const Navigation = ({ currentPage, onPageChange, userCount }) => {
  return (
    <nav className="navigation">
      <div className="nav-buttons">
        <button
          className={`nav-button ${currentPage === "add" ? "active" : ""}`}
          onClick={() => onPageChange("add")}
        >
          ➕ Add User
        </button>
        <button
          className={`nav-button ${currentPage === "list" ? "active" : ""}`}
          onClick={() => onPageChange("list")}
        >
          📋 View Users {userCount > 0 && `(${userCount})`}
        </button>
      </div>
      <div className="nav-indicator">
        <span className="current-page">
          {currentPage === "add" ? "Add New User" : "Users List"}
        </span>
      </div>
    </nav>
  );
};

export default Navigation;
