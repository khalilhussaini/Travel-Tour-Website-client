import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState('');
  const [duration, setDuration] = useState('');
  const [filters, setFilters] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onSearch function with the search criteria
    onSearch(destination, dates, duration, filters);
  };

  // Render the form fields and handle user input

  return (
    <form onSubmit={handleSubmit}>
      {/* Render form fields */}
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
