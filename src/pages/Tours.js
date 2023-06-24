import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import "./tours.css";

const Tours = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tourType, setTourType] = useState("");
  const [tourProvience, setTourProvience] = useState("");
  const [startDate, setStartDate] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");

  const handleBooking = (e) => {
    e.preventDefault();
    // Process form submission logic here
    console.log("Form submitted!");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Tour Type:", tourType);
    console.log("Tour Province:", tourProvience);
    console.log("Start Date:", startDate);
    console.log("Number of People:", numberOfPeople);
    // Reset form fields
    setName("");
    setEmail("");
    setTourType("");
    setTourProvience("");
    setStartDate("");
    setNumberOfPeople("");
  };

  return (
    <div className="count">
      <Row className="justify-content-center mt-0">
        <Col md={6}>
          <h1>Book a Tour</h1>
          <Form onSubmit={handleBooking}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="tourType">
              <Form.Label>Tours</Form.Label>
              <Form.Control
                as="select"
                value={tourType}
                onChange={(e) => setTourType(e.target.value)}
                required
              >
                <option value="">Select a tour type</option>
                <option value="Adventure">Adventure</option>
                <option value="Cultural">Cultural</option>
                <option value="Nature">Nature</option>
                <option value="Historical">Historical</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="tourProvience">
              <Form.Label>Tour Province</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the tour province"
                value={tourProvience}
                onChange={(e) => setTourProvience(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="startDate">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="numberOfPeople">
              <Form.Label>Number of People</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter the number of people"
                value={numberOfPeople}
                onChange={(e) => setNumberOfPeople(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Book Now
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Tours;
