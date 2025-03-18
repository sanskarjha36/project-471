import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import UserMenu from "../UserMenu/UserMenu";
import accountImg from "../assets/account.png";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const sFooterSearch = document.querySelector(".row1"); // Target the SFooter search bar
      if (!sFooterSearch) return;

      const sFooterRect = sFooterSearch.getBoundingClientRect();

      if (sFooterRect.top < 0) {
        setShowSearch(true); // Show search bar once SFooter search bar scrolls past navbar
      } else {
        setShowSearch(false); // Hide when scrolling above SFooter search bar
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to navigate to Home.jsx
  const handleHome = () => {
    navigate("/"); // Redirect to Home page
  };

  return (
    <div className="navbar">
      {/* Clickable title to navigate to Home */}
      <div className="v-title" onClick={handleHome}>VenturNova</div>

      {/* Floating Search Bar - Appears only after passing SFooter */}
      <div className={`floating-search ${showSearch ? "visible" : ""}`}>
        <div className="search-box">Search</div>
      </div>

      {/* Holder for menu and account icon */}
      <div className="holder">
        <Menu size={32} color="white" className="icon-1" />
        <div className="user-menu-wrapper">
          <img
            src={accountImg}
            alt="Account"
            className="account-icon"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          {menuOpen && <UserMenu />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;