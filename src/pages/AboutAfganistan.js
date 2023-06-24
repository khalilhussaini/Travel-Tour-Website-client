import React from "react";
import "./AboutAfganistan.css";
import Card from "react-bootstrap/Card";

const AboutAfganistan = () => {
  return (
    <div>
      <div className="content-wrpp">
        <div className="image-container">
          <img src="https://i.redd.it/vwz7ia5msvp71.jpg" alt="Travel" />
          <h2 className="heading">About Afghanistan </h2>
        </div>
      </div>

      <div className="col-xl-12 col-sm-6 mb-23 d-flex align-items-center justify-content-center">
        <div className="bg-white rounded shadow-sm py-44 px-4 justify-content-center">
          <Card style={{ width: "80rem", height: "40rem" }}>
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/originals/7a/2e/c7/7a2ec7008f206fa24cec375a03d39db4.jpg"
              style={{ width: "100%", height: "500px" }}
            />
            <Card.Body>
              <br />
              <br />
              <br />
              <br />
              <Card.Title>About Afghanistan</Card.Title>
              <br />
              <Card.Text>
                Kabul is the country's largest city and serves as its capital.
                As of 2021, Afghanistan's population is 40.2 million (officially
                estimated to be 32.9 million), composed of ethnic Pashtuns,
                Tajiks, Hazaras, Uzbeks, Turkmens, Qizilbash, Aimak, Pashayi,
                Baloch, Pamiris, Nuristanis, and others.
              </Card.Text>
              <p className="font-italic text-muted mb-4"></p>
              <a
                href="https://en.wikipedia.org/wiki/Afghanistan#:~:text=Kabul%20is%20the%20country's%20largest,Pamiris%2C%20Nuristanis%2C%20and%20others."
                className="btn btn-light px-5 rounded-pill shadow-sm"
              >
                Learn More
              </a>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default AboutAfganistan;
