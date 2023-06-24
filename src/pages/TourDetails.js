import React from 'react';
import BookingForm from '../components/BookingForm';
import { createBooking } from '../api/bookings';

const TourDetails = ({ tour }) => {
  const handleBooking = (tourId, travelDates, participants, requirements) => {
    // Call the API to create a new booking with the provided details
    createBooking(tourId, travelDates, participants, requirements)
      .then((data) => {
        // Handle the success response
        console.log('Booking created:', data);
      })
      .catch((error) => {
        // Handle the error response
        console.error('Error creating booking:', error);
      });
  };

  return (
    <div>
      <h2>{tour.name}</h2>
      {/* Render tour details */}
      <BookingForm tourId={tour.id} onSubmit={handleBooking} />
    </div>
  );
};

export default TourDetails;
