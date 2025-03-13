import React, { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import SlideShow from "./SlideShow/SlideShow";
import Header from "./Header/Header";
import Suggested from "./Suggested/Suggested";
import SFooter from "./SFooter/SFooter";
import Footer from "./Footer/Footer";
import "./App.css";

const App = () => {
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const searchElement = document.querySelector(".search"); // Find the search bar
      if (!searchElement) return;

      const rect = searchElement.getBoundingClientRect(); // Get search bar position
      const navbarHeight = document.querySelector(".navbar").offsetHeight; // Navbar height

      if (rect.top < navbarHeight) {
        setShowSearch(true); // Show in navbar when scrolled past
      } else {
        setShowSearch(false); // Hide from navbar when below it
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div>
        <Navbar showSearch={showSearch} />
      </div>
      <div className="header">
        <Header />
      </div>
      <div>
        <SFooter />
      </div>
      <div className="Suggested">Suggested Services</div>
      <div>
        <Suggested />
      </div>

      <Footer/>
    </>
  );
};

export default App;
