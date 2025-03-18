//import React from "react";
import Header from "../Header/Header";
import Suggested from "../Suggested/Suggested";
import SFooter from "../SFooter/SFooter";
import Footer from "../Footer/Footer";
import "../App.css"; // Keep styling if needed

const Home = () => {
  return (
    <div>
      <div className="header">
        <Header />
        <SFooter />
      </div>
      <div className="Suggested">Suggested Services</div>
      <Suggested />
      <Footer />
    </div>
  );
};

export default Home;
