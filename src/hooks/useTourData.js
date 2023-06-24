import { useContext } from 'react';
import { TourContext } from '../contexts/TourContext';

const useTourData = () => {
  const { tours, loading, searchTours, bookTour } = useContext(TourContext);

  return { tours, loading, searchTours, bookTour };
};

export default useTourData;
