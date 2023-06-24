/* import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = () => {
  const [travelDates, setTravelDates] = useState('');
  const [participants, setParticipants] = useState('');

  const handleBooking = () => {
  };
  return (
    <div className="booking-form-container">
      <h2 className="world ">Book a Tour</h2>
      <form>
        <div className="form-group">
          <label htmlFor="travelDates">Travel Dates:</label>
          <input
            type="text"
            id="travelDates"
            className="form-input"
            value={travelDates}
            onChange={(e) => setTravelDates(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="participants">Number of Participants:</label>
          <input
            type="text"
            id="participants"
            className="form-input"
            value={participants}
            onChange={(e) => setParticipants(e.target.value)}
          />
        </div>

        <button type="button" className="btn-book" onClick={handleBooking}>
          Book Now
        </button>
      </form>
      
    </div>
  );
};

export default BookingForm;
 */
