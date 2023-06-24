import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { searchTours, bookTour } from '../api/tours'; // Import API functions for searching and booking tours

const Tours = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tourType, setTourType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedTour, setSelectedTour] = useState(null);

  // Function to handle search form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Prepare search criteria
    const searchCriteria = {
      destination: '', // Add destination value here based on the form input
      dates: '', // Add dates value here based on the form input
      duration: '', // Add duration value here based on the form input
      // Add any other relevant filters based on the form input
    };
    // Call the API function to search for tours
    searchTours(searchCriteria)
      .then((results) => {
        setSearchResults(results);
      })
      .catch((error) => {
        console.log('Error searching tours:', error);
      });
  };

  // Function to handle tour selection
  const handleTourSelect = (tour) => {
    setSelectedTour(tour);
  };

  // Function to handle tour booking
  const handleTourBooking = () => {
    // Prepare booking details
    const bookingDetails = {
      tourId: selectedTour.id,
      name,
      email,
      startDate,
      numberOfPeople,
      // Add any other relevant booking details based on the form input
    };
    // Call the API function to book the tour
    bookTour(bookingDetails)
      .then((response) => {
        console.log('Tour booked successfully!', response);
        // Reset form fields
        setName('');
        setEmail('');
        setStartDate('');
        setNumberOfPeople('');
        setSelectedTour(null);
        // Show success message or redirect to booking confirmation page
      })
      .catch((error) => {
        console.log('Error booking tour:', error);
        // Show error message or handle the error in an appropriate way
      });
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <h1>Book a Tour</h1>
          <Form onSubmit={handleSearchSubmit}>
            {/* Add search form fields here */}
            <Button variant="primary" type="submit">
              Search Tours
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          {searchResults.length > 0 ? (
            <div>
              <h2>Search Results</h2>
              {searchResults.map((tour) => (
                <Card key={tour.id} onClick={() => handleTourSelect(tour)}>
                  <Card.Body>
                    <Card.Title>{tour.title}</Card.Title>
                    {/* Add tour details to display */}
                  </Card.Body>
                </Card>
              ))}
            </div>
          ) : (
            <p>No results found.</p>
          )}
        </Col>
      </Row>
      {selectedTour && (
        <Row className="justify-content-center mt-5">
          <Col md={6}>
            <h2>Selected Tour: {selectedTour.title}</h2>
            {/* Display detailed tour information here */}
            <Form onSubmit={handleTourBooking}>
              {/* Add booking form fields here */}
              <Button variant="primary" type="submit">
                Book Tour
              </Button>
            </Form>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Tours;
