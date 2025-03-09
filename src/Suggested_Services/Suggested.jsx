// suggest.jsx
import { useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import "./suggest.css";

const images = [
  { src: "https://via.placeholder.com/300", desc: "Beautiful Sunset" },
  { src: "https://via.placeholder.com/300", desc: "Mountain View" },
  { src: "https://via.placeholder.com/300", desc: "City Lights" }
];

export default function ImageScrollCard() {
  const scrollRef = useRef(null);

  return (
    <Card className="card-container">
      <div className="user-info">
        <img src="https://via.placeholder.com/50" alt="User Avatar" className="user-avatar" />
        <div>
          <p className="user-name">John Doe</p>
          <p className="user-handle">@johndoe</p>
        </div>
      </div>
      <CardContent className="image-scroll-container">
        <div ref={scrollRef} className="image-scroll">
          {images.map((img, index) => (
            <motion.div key={index} className="image-card" whileHover={{ scale: 1.05 }}>
              <img src={img.src} alt={img.desc} className="image" />
              <p className="image-desc">{img.desc}</p>
            </motion.div>
          ))}
        </div>
      </CardContent>
      <div className="button-container">
        <Button className="follow-button">Follow</Button>
      </div>
    </Card>
  );
}
