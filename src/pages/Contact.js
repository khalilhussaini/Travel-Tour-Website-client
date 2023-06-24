import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { MapContainer, TileLayer } from "react-leaflet";
import "./Contact.css";
import { Image } from "react-bootstrap";

const RenderMap = () => {
  return (
    <div className="mapp">
      <h4>Map Component</h4>
      <div style={{ height: "400px", width: "100%" }}>
        <MapContainer center={[34.5553, 69.2075]} zoom={12}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="Map data © <a href='https://openstreetmap.org'>OpenStreetMap</a> contributors"
          />
        </MapContainer>
      </div>
    </div>
  );
};

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="ftco-section">
      <div className="content-wrapper">
        <div className="image-container">
          <img src="https://i.redd.it/vwz7ia5msvp71.jpg" alt="Travel" />
          <h2 className="heading">Contact with Us </h2>
        </div>
      </div>
      <Container>
        <Row className="justify-content-center"></Row>
        <h1>Contact with Us</h1>
        <br />
        <Row className="justify-content-center">
          <Col md={7}>
            <div className="contact-wrap  p-md-5 p-4">
              <h3 className="mb-4">Contact Us</h3>
              <div id="form-message-warning" className="mb-4"></div>
              <div id="form-message-success" className="mb-4">
                Your message was sent, thank you!
              </div>
              <Form
                method="POST"
                id="contactForm"
                name="contactForm"
                className="contactForm"
                onSubmit={handleSubmit}
              >
                <Row>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group>
                      <Form.Label>Subject</Form.Label>
                      <Form.Control
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group>
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="message"
                        id="message"
                        cols="30"
                        rows="4"
                        placeholder="Message"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group>
                      <Button type="submit" variant="primary">
                        Send Message
                      </Button>
                      <div className="submitting"></div>
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
          <Col md={5} className="d-flex align-items-stretch">
            <RenderMap />
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <div className="dbox w-100 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="fa fa-map-marker"></span>
              </div>
              <div className="text">
                <p>
                  <span>Address:</span> Kabul , Afghanistan
                </p>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div className="dbox w-100 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="fa fa-phone"></span>
              </div>
              <div className="text">
                <p>
                  <span>Phone:</span>{" "}
                  <a href="tel://417779967361">+ 417779967361</a>
                </p>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div className="dbox w-100 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="fa fa-paper-plane"></span>
              </div>
              <div className="text">
                <p>
                  <span>Email:</span>{" "}
                  <a href="mailto:khalilhussaini2022@gmaial.com">
                    khalilhussaini2022@gmaial.com
                  </a>
                </p>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div className="dbox w-100 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="fa fa-globe"></span>
              </div>
              <div className="text">
                <p>
                  <span>Website:</span> <a href="#">yoursite.com</a>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
