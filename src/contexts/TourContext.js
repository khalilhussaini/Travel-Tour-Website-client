import React, { createContext, useState } from 'react';

export const TourContext = createContext();

export const TourProvider = ({ children }) => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchTours = async (searchParams) => {
    setLoading(true);
    // Make API request and update the tours state
    setLoading(false);
  };

  const bookTour = async (tourId, bookingData) => {
    // Make API request to book the tour
  };

  return (
    <TourContext.Provider value={{ tours, loading, searchTours, bookTour }}>
      {children}
    </TourContext.Provider>
  );
};
