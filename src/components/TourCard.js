import React from 'react';

const TourCard = ({ tour, onBook }) => {
  const handleBook = () => {
    onBook(tour.id);
  };

  return (
    <div>
      <h3>{tour.title}</h3>
      <p>Destination: {tour.destination}</p>
      <p>Dates: {tour.dates.join(', ')}</p>
      <p>Duration: {tour.duration} days</p>
      <p>Price: ${tour.price}</p>
      <p>Availability: {tour.availability}</p>
      <button onClick={handleBook}>Book Now</button>
    </div>
  );
};

export default TourCard;
