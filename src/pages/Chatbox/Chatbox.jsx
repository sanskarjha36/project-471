import React, { useState } from "react";
import "./Chatbox.css";
import { Send } from "lucide-react";

const Chatbox = () => {
  const [messages, setMessages] = useState([
    { sender: "user", text: "Hey, what is the hourly rate?" },
    { sender: "receiver", text: "20$/hr" },
    { sender: "user", text: "Sounds good, can you come Thursday?" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
  };

  return (
    <div className="chat-container">
      {/* Sidebar for chat list */}
      <div className="chat-sidebar">
        <h2>Messages</h2>
        <div className="chat-list">
          <div className="chat-item">Carpenter Service</div>
        </div>
      </div>

      {/* Chat Window */}
      <div className="chat-window">
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="chat-input">
          <input
            type="text"
            placeholder="Message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage}>
            <Send size={20} color="white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
