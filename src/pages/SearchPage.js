import React from 'react';
import SearchForm from '../components/SearchForm';
import TourCard from '../components/TourCard';
import useTourData from '../hooks/useTourData';

const SearchPage = () => {
  const { tours, loading, searchTours, bookTour } = useTourData();

  const handleSearch = (searchParams) => {
    searchTours(searchParams);
  };

  const handleBook = (tourId) => {
    // Implement booking logic
  };

  return (
    <div>
      <h1>Tour Search</h1>
      <SearchForm onSearch={handleSearch} />

      {loading && <p>Loading...</p>}

      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} onBook={handleBook} />
      ))}
    </div>
  );
};

export default SearchPage;
