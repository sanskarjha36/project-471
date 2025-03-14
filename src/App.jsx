import  { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./pages/Home/Home";
import Sign_In from "./pages/Sign_In/Sign_In";
import Sign_Up from "./pages/Sign_Up/Sign_Up";
import View_Service from "./pages/View_Service/View_Service"

const App = () => {
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const searchElement = document.querySelector(".search"); 
      if (!searchElement) return;

      const rect = searchElement.getBoundingClientRect();
      const navbarHeight = document.querySelector(".navbar").offsetHeight;

      if (rect.top < navbarHeight) {
        setShowSearch(true);
      } else {
        setShowSearch(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <Navbar showSearch={showSearch} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Sign_In />} /> {/* ✅ Add Sign In Route */}
        <Route path="/sign-up" element={<Sign_Up />} />
        <Route path="/view-service" element={<View_Service />} />
      </Routes>
    </Router>
  );
};

export default App;
