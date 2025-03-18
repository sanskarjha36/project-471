//import React from "react";
import { useNavigate } from "react-router-dom";
import "./UserMenu.css";

const UserMenu = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("User logged out");
    navigate("/sign-in"); // Redirect to Sign In page
  };
  const handleDelete = () => {
    console.log("User Deleted");
    navigate("/sign-up"); // Redirect to Sign In page
  };
  const handleService = () => {
    console.log("User Deleted");
    navigate("/view-service"); // Redirect to Sign In page
  };

  return (
    <div className="user-dropdown show">
      <ul>
        <li onClick={handleService} className="tag">Profile</li>
        <li onClick={handleDelete} className="tag">Delete Account</li>
        <li onClick={handleLogout} className="tag">Logout</li>
      </ul>
    </div>
  );
};

export default UserMenu;
