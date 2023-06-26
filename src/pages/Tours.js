import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import "./tours.css";

const Tours = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tourType, setTourType] = useState("");
  const [tourProvince, setTourProvince] = useState("");
  const [startDate, setStartDate] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");

  const handleBooking = (e) => {
    e.preventDefault();
    // Process form submission logic here
    console.log("Form submitted!");

    //    send data to the server
    fetch("http://localhost:3005/api/v1/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        tourType,
        tourProvince,
        startDate,
        numberOfPeople,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // Reset form fields
    setName("");
    setEmail("");
    setTourType("");
    setTourProvince("");
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
            <Form.Group controlId="tourProvince">
              <Form.Label>Tour Province</Form.Label>
              <Form.Control
                as="select"
                value={tourProvince}
                onChange={(e) => setTourProvince(e.target.value)}
                required
              >
                <option value="">Select Province</option>
                <option value="kabul">Kabul</option>
                <option value="Bamiyan">Bamiyan</option>
                <option value="HERAT">Herat</option>
                <option value="Nangharhar">Nangharhar</option>
                <option value="BandAmir">Band Amir</option>
                <option value="Parwan">Parwan</option>
                <option value="BuddhasOfBamiyan">Buddhas of Bamiyan</option>
              </Form.Control>
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
