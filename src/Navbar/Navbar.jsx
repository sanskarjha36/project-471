import React from "react";
import "./Navbar.css";
import { Menu } from "lucide-react";
import UserMenu from "../UserMenu/UserMenu"; // Import your UserMenu component
import accountImg from "../assets/account.png"; // Import account image

const Navbar = ({ showSearch }) => { // Accept `showSearch` as a prop
  return (
    <>
      <div className="navbar">
        <div className="title">VenturNova</div>

        {/* If showSearch is true, show the floating search bar */}
        {showSearch && (
          <div className="floating-search">
            <div className="search-box">Search</div>
          </div>
        )}

        {/* Account and Menu Holder */}
        <div className="holder">
          <Menu size={32} color="white" className="icon-1" />
          
          {/* UserMenu Component */}
          <UserMenu accountImg={accountImg} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
