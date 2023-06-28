import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ destination, dates, duration });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="destinationInput">Destination:</label>
      <input type="text" id="destinationInput" value={destination} onChange={(e) => setDestination(e.target.value)} />

      <label htmlFor="datesInput">Dates:</label>
      <input type="text" id="datesInput" value={dates} onChange={(e) => setDates(e.target.value)} />

      <label htmlFor="durationInput">Duration:</label>
      <input type="number" id="durationInput" value={duration} onChange={(e) => setDuration(e.target.value)} />

      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
