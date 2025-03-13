import React, { useState } from "react";
import "./UserMenu.css";

const UserMenu = ({ accountImg }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="user-menu-wrapper">
      {/* User Icon */}
      <img
        src={accountImg}
        alt="User Account"
        className="account-icon"
        onClick={() => setMenuOpen(!menuOpen)} // Toggle dropdown
      />

      {/* Dropdown appears when menuOpen is true */}
      <div className={`user-dropdown ${menuOpen ? "show" : ""}`}>
        <ul>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/settings">Settings</a></li>
          <li><a href="/logout">Logout</a></li>
          <li><a href="/contactus">Contact Us</a></li>
        </ul>
      </div>
    </div>
  );
};

export default UserMenu;
