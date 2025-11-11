import React from "react";
import "./About.css";
import { Container, Row, Col, Card } from "react-bootstrap";

function About() {
  return (
    <>
      <div className="bg-light">
        <div className="content-wrapper">
          <div className="image-container">
            <img
              src="https://pbs.twimg.com/media/FXbFHAlWYAAcRIi.jpg:large"
              alt="Travel"
            />
            {/* <h2 className="heading">About Us</h2> */}
          </div>
        </div>
      </div>
      <section className="welcome pt-0 section-margin">
        <Container>
          <Row className="align-items-center">
            <Col lg={5} mb={4} mb-lg={0}>
              <Row noGutters className="welcome-images">
                <Col sm={7}>
                  <Card>
                    <Card.Img
                      src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/89/46/41/live-is-great.jpg?w=500&h=300&s=1"
                      alt="Card image cap"
                      width="100%"
                    />
                  </Card>
                </Col>
                <Col sm={5}>
                  <Card>
                    <Card.Img
                      src="https://qph.cf2.quoracdn.net/main-qimg-eba6a8d718906249dd8b0ce8c70bf675-lq"
                      alt="Card image cap"
                    />
                  </Card>
                </Col>
                <Col lg={12}>
                  <Card>
                    <Card.Img
                      src="https://againstthecompass.com/wp-content/uploads/2021/08/DSC_74291-1024x684.avif"
                      alt="Card image cap"
                    />
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col lg={7}>
              <div className="welcome-content">
                <h2 className="mb-4">
                  <span className="d-block">Welcome</span> To our Travel and
                  Tour with Us
                </h2>
                <p>
                  Welcome to Create Travel and Tour Website, the ultimate online
                  platform for planning and booking your dream vacations. We are
                  dedicated to providing you with a seamless and personalized
                  travel experience that caters to your unique preferences and
                  interests. At Create Travel and Tour Website, we understand
                  that every traveler is different, which is why we offer a wide
                  range of destinations and experiences to choose from. Whether
                  you're seeking adventurous activities, cultural immersions,
                  luxurious getaways, or budget-friendly trips, we have
                  something for everyone.
                </p>
                <p>
                  Our website allows you to customize your travel plans
                  according to your specific requirements. You have the freedom
                  to handpick your preferred activities, select accommodations
                  that suit your style and budget, and choose transportation
                  options that best fit your itinerary. With our user-friendly
                  interface, you can effortlessly create tailored itineraries
                  that cater to your travel aspirations.
                </p>
                <a
                  href="#"
                  className="btn btn-light px-5 rounded-pill shadow-sm"
                >
                  Learn More
                </a>
              </div>
            </Col>
          </Row>
          <div className="container py-5">
            <div className="row">
              <div className="col-xl-3 col-sm-6 mb-8">
                <br />
                <br />
                <br />
                <div className="line">
                  <h1>100% Trusted</h1>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable.
                  </p>
                  <br />
                </div>
                <p className="font-italic text-muted mb-4"></p>
                <a
                  href="#"
                  className="btn btn-light px-5 rounded-pill shadow-sm"
                >
                  Read More +
                </a>
              </div>
              <div className="col-xl-3 col-sm-6 mb-12">
                <br />
                <br />
                <br />
                <div className="line">
                  <h1>12 Year Experience</h1>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable.
                  </p>
                  <br />
                </div>
                <p className="font-italic text-muted mb-4"></p>
                <a
                  href="#"
                  className="btn btn-light px-5 rounded-pill shadow-sm"
                >
                  Read More +
                </a>
              </div>
            </div>
          </div>
          <Row className="show-grid text-center testimonial-section">
            <div className="testimonial">
              <h1 className="text-center">What People Say about Us</h1>
              <h5 className="text-center">
                I've been on multiple tours with this agency, and they never
                disappoint. The staff is professional, and their attention to
                detail is impressive. From breathtaking landscapes to cultural
                experiences, every trip has been a delight.
              </h5>
            </div>
            <Col xs={12} sm={4} className="person-wrapper">
              <img
                src="https://cdn.thetealmango.com/wp-content/uploads/2021/08/Robert.jpg"
                circle
                className="profile-pic"
                alt="Profile"
              />
              <h3>Mari Johnson</h3>
              <p>
                “Travel and Tour Website was an excellent Travel Agent for us
                and considered our unique needs as she planned our itinerary.
                Every suggestion she made was excellent.”
              </p>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <img
                src="https://imgix.ranker.com/list_img_v2/1960/2741960/original/famous-leo-male-celebrities?w=817&h=427&fm=jpg&q=50&fit=crop"
                circle
                className="profile-pic"
                alt="Profile"
              />
              <h3>James Anderson</h3>
              <p>
                “I would highly recommend Andy because everything on my month
                long trip to New Zealand, Australia and French Polynesia went
                without a hitch.”
              </p>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <img
                src="https://mochamanstyle.com/wp-content/uploads/2014/11/steve_harvey.jpg"
                circle
                className="profile-pic"
                alt="Profile"
              />
              <h3>Becka Steward</h3>
              <p>
                “I would highly recommend Andy because everything on my month
                long trip to New Zealand, Australia and French Polynesia went
                without a hitch.”
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="bg-light py-5">
        <div className="container py-5">
          <div className="row mb-4">
            <div className="col-lg-5">
              <h2 className="display-4 font-weight-light">Our team</h2>
              <p className="font-italic text-muted">
                We believe that the success of any travel experience lies in the
                hands of the people behind it.
              </p>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-13 px-4">
                <img
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Khalil Hussaini</h5>
                <span className="small text-uppercase text-muted">
                  CEO - Founder
                </span>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-8 px-4">
                <img
                  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Ali Reza</h5>
                <span className="small text-uppercase text-muted">
                  CEO - Founder
                </span>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-8 px-4">
                <img
                  src="https://cdn.shopify.com/s/files/1/0850/2114/files/tips_to_help_heighten_senses_480x480.png?v=1624399167"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Tom Sunderland</h5>
                <span className="small text-uppercase text-muted">
                  CEO - Founder
                </span>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-8 px-4">
                <img
                  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Anna Delpano</h5>
                <span className="small text-uppercase text-muted">
                  CEO - Founder
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
