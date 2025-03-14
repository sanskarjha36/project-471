import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MessageCircle, X } from "lucide-react"; // Importing icons
import Header from "../../Header/Header";
import Suggested from "../../Suggested/Suggested";
import SFooter from "../../SFooter/SFooter";
import Footer from "../../Footer/Footer";
import Chatbox from "../Chatbox/Chatbox";
import '../../App.css';
import './Home.css'; // Import FAB & Modal styles

const Home = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <div className="header">
        <Header />
        <SFooter />
      </div>
      <div className="Suggested">Suggested Services</div>
      <div><Suggested /></div>
      <Footer />

      {/* Floating Action Button */}
      <button className="fab" onClick={toggleModal}>
        <MessageCircle size={28} color="white" />
      </button>

      {/* Modal Pop-up */}
      {isModalOpen && (
        <>
          <div className="modal-overlay" onClick={toggleModal}></div> {/* Background Overlay */}
          <div className="modal">
            <button className="close-btn" onClick={toggleModal}>
              <X size={24} color="white" />
            </button>
            <div><Chatbox/></div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
