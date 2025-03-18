import { useState } from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker"; // Import the date picker
import "react-datepicker/dist/react-datepicker.css"; // Import default styles
import "./Booking_card.css";

const BookingCard = ({ onClose }) => {
  const [selectedDate, setSelectedDate] = useState(null); // State for date picker

  return (
    <>
      {/* Blurred background overlay */}
      <div className="booking-overlay" onClick={onClose}></div>

      {/* Gradient Border Wrapper */}
      <div className="BC-Maincard">
        {/* Booking Card */}
        <div className="booking-card">
          <h2 className="BC-Head-1">Book This Service</h2>
          <p className="BC-Head-2">Enter your details to confirm the booking.</p>
          
          <input type="text" placeholder="Your Name" className="booking-input BC-i1" />
          <input type="text" placeholder="Phone Number" className="booking-input BC-i2" />
          <input type="text" placeholder="Full Address" className="booking-input BC-i3" />
          {/* Calendar (Date Picker) */}
          <div className="calendar">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              minDate={new Date()} // Prevent past date selection
              dateFormat="yyyy-MM-dd"
              className="date-picker"
              placeholderText="Select a date"
            />
          </div>

          <div className="button-container">
            <button className="btn-confirm">Confirm Booking</button>
            <button className="btn-cancel" onClick={onClose}>Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
};

BookingCard.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default BookingCard;