import React from "react";
import "./home.css";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import { HiOutlineLocationMarker, HiClipboardList } from "react-icons/hi";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  const RELAX = 4.5; // Example grade value
  const fees = "$100"; // Example fees value
  return (
    <div className="continer">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://media.istockphoto.com/id/1386846681/photo/birds-eye-view-of-kabul-city.jpg?s=612x612&w=0&k=20&c=rGXA2UcrPBgsGFsqOjlgk28mSjaZFvnmK4DmVcA-6zs="
            alt="First slide"
            width="100%"
            height="1000px"
          />
          <Carousel.Caption className="custom-caption">
            <h1 className="custom-caption-title custom-large-text">
              Search your Holiday
            </h1>
            <p className="custom-caption-text custom-large-tex ">
              Travel writing is all about your personal experiences
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://i.pinimg.com/736x/2c/4e/e1/2c4ee1c13c764f182e0287d867b2377e.jpg"
            alt="Second slide"
            width="100%"
            height="1000px"
          />
          <Carousel.Caption className="custom-caption">
            <h1 className="custom-caption-title  custom-large-text">
              Lets Make Your Best Trip Ever{""}
            </h1>
            <p className="custom-caption-text custom-large-text">
              Travel writing is all about your personal experiences
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://pbs.twimg.com/media/DJcAO-8XcAA9-7J?format=jpg&name=large"
            alt="Third slide"
            width="100%"
            height="1000px"
          />
          <Carousel.Caption className="custom-caption">
            <h1 className="custom-caption-title custom-large-text">
              Discover Your Favorite place with{" "}
            </h1>
            <p className="custom-caption-text custom-large-text">
              Travel writing is all about your personal experiences
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br />
      <br />
      <br />
      <br />
      <div className="world">
        <h1>Most visited destinations</h1>
      </div>
      <br />
      <br />
      <div className="row justify-content-center">
        <Card style={{ width: "35rem" }}>
          <Card.Img
            variant="top"
            src="https://farm2.staticflickr.com/1110/710346820_7d04f5fcbc_b.jpg"
          />
          <Card.Body>
            <Card.Title>Nangharhar</Card.Title>
            <span className="continent flex">
              <HiOutlineLocationMarker className="icon" />
              <span className="name"> Afghanistan</span>
            </span>
            <Card.Text>
              Nangarhār also called Nangrahar or Ningrahar, is one of the 34
              provinces of Afghanistan, located in the eastern part of the
              country and bordering Logar, Kabul, Laghman and Kunar provinces as
              well as having an international border with Pakistan.
            </Card.Text>
            <div className="fees flex">
              <div className="grade">
                <span>
                  {RELAX}
                  <small> +1 </small>{" "}
                </span>
              </div>
              <div className="price">
                <h5>{fees}</h5>
              </div>
            </div>
            <p className="font-italic text-muted mb-4"></p>
            <Button className="btn d-flex" active>
              <Link
                to="/Tours/BookingForm"
                className="d-flex align-items-center link-style"
              >
                DETAILS <HiClipboardList className="icon" />
              </Link>
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "35rem" }}>
          <Card.Img
            variant="top"
            src="https://i.insider.com/5a45428eb0bcd5ab188b7235?width=1136&format=jpeg"
          />
          <Card.Body>
            <Card.Title>PARWAN</Card.Title>
            <span className="continent flex">
              <HiOutlineLocationMarker className="icon" />
              <span className="name"> Afghanistan</span>
            </span>
            <Card.Text>
              Parwan province is located in the central part of Afghanistan and
              has a population of approximately 738,000. The main ethnic groups
              are Tajiks, Pashtuns, and Hazaras. The province borders Baghlan,
              Panjshir, Kapisa, Kabul, Wardak, and Bamyan. It is divided into 10
              districts.
            </Card.Text>
            <div className="fees flex">
              <div className="grade">
                <span>
                  {RELAX}
                  <small> +1 </small>{" "}
                </span>
              </div>
              <div className="price">
                <h5>{fees}</h5>
              </div>
            </div>
            <Button className="btn d-flex" active>
              <Link
                to="/Tours/BookingForm"
                className="d-flex align-items-center link-style"
              >
                DETAILS <HiClipboardList className="icon" />
              </Link>
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "35rem" }}>
          <Card.Img
            variant="top"
            src="https://images.squarespace-cdn.com/content/v1/56017699e4b02285801cfade/1562166068428-YMUTD34CN9NPQTHFKNC2/sister3.jpg"
          />
          <Card.Body>
            <Card.Title>Band Amir</Card.Title>
            <span className="continent flex">
              <HiOutlineLocationMarker className="icon" />
              <span className="name"> Afghanistan</span>
            </span>
            <Card.Text>
              Band-e-Amir is a chain of six lakes in the mountainous desert of
              central Afghanistan. The lakes formed from mineral-rich water that
              seeped out of faults and cracks in the rocky landscape. Over time,
              the water deposited layers of hardened mineral (travertine) that
              built up into walls that now contain the water.
            </Card.Text>
            <div className="fees flex">
              <div className="grade">
                <span>
                  {RELAX}
                  <small> +1 </small>{" "}
                </span>
              </div>
              <div className="price">
                <h5>{fees}</h5>
              </div>
            </div>
            <Button className="btn d-flex" active>
              <Link
                to="/Tours/BookingForm"
                className="d-flex align-items-center link-style"
              >
                DETAILS <HiClipboardList className="icon" />
              </Link>
            </Button>
          </Card.Body>
        </Card>
      </div>
      <br />
      <div className="row justify-content-center">
        <Card style={{ width: "35rem" }}>
          <Card.Img
            variant="top"
            src="https://cdn.kastatic.org/ka-perseus-images/07587d5f6c3ae1edb81266427e5982aebef60528.jpg"
          />
          <Card.Body>
            <Card.Title>Buddhas of Bamiyan</Card.Title>
            <span className="continent flex">
              <HiOutlineLocationMarker className="icon" />
              <span className="name"> Afghanistan</span>
            </span>
            <Card.Text>
              Bamiyan is located between the Indian subcontinent (to the
              southeast) and Central Asia (to the north), which made it an
              important location close to one of the most important branches of
              the Silk Route. The Silk Route was an ancient series of linked
              trade routes that connected the East to the West and carried both
              material wealth and ideas.
            </Card.Text>
            <div className="fees flex">
              <div className="grade">
                <span>
                  {RELAX}
                  <small> +1 </small>{" "}
                </span>
              </div>
              <div className="price">
                <h5>{fees}</h5>
              </div>
            </div>
            <Button className="btn d-flex" active>
              <Link
                to="/Tours/BookingForm"
                className="d-flex align-items-center link-style"
              >
                DETAILS <HiClipboardList className="icon" />
              </Link>
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "35rem" }}>
          <Card.Img
            variant="top"
            src="https://pbs.twimg.com/media/E0y2UmCXMAsGkPI.jpg"
          />
          <Card.Body>
            <Card.Title>Kabul</Card.Title>
            <span className="continent flex">
              <HiOutlineLocationMarker className="icon" />
              <span className="name"> Afghanistan</span>
            </span>
            <Card.Text>
              Kabul ([ˈkaːbʊl], Paschtu/Dari: کابل, Kābul) ist die Hauptstadt
              Afghanistans. Sie ist mit rund 4,3 Millionen Einwohnern (2020)[1]
              die größte Stadt Afghanistans und das ökonomische und kulturelle
              Zentrum des Landes.
            </Card.Text>
            <div className="fees flex">
              <div className="grade">
                <span>
                  {RELAX}
                  <small> +1 </small>{" "}
                </span>
              </div>
              <div className="price">
                <h5>{fees}</h5>
              </div>
            </div>
            <Button className="btn d-flex" active>
              <Link
                to="/Tours/BookingForm"
                className="d-flex align-items-center link-style"
              >
                DETAILS <HiClipboardList className="icon" />
              </Link>
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "35rem" }}>
          <Card.Img
            variant="top"
            src="https://travellersworldwide.com/wp-content/uploads/2022/07/shutterstock_1486485413.jpg.webp"
            alt="Centered Image"
          />
          <Card.Body>
            <Card.Title>HERAT</Card.Title>
            <span className="continent flex">
              <HiOutlineLocationMarker className="icon" />
              <span className="name"> Afghanistan</span>
            </span>
            <Card.Text>
              Herat dates back to Avestan times and was traditionally known for
              its wine. The city has a number of historic sites, including the
              Herat Citadel and the Musalla Complex.
            </Card.Text>
            <div className="fees flex">
              <div className="grade">
                <span>
                  {RELAX}
                  <small> +1 </small>{" "}
                </span>
              </div>
              <div className="price">
                <h5>{fees}</h5>
              </div>
            </div>
            <Button className="btn d-flex" active>
              <Link
                to="/Tours/BookingForm"
                className="d-flex align-items-center link-style"
              >
                DETAILS <HiClipboardList className="icon" />
              </Link>
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div className="Tours"></div>
    </div>
  );
}
export default Home;
