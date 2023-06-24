import React, { useEffect } from "react";
import "./footer.css";
import { FiChevronRight } from "react-icons/fi";
import {
  AiFillYoutube,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";
import { FiSend } from "react-icons/fi";
/* import video from '../Assets/video.mp4'; */
import { FaPlane } from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 300 });
  }, []);
  return (
    <section id="footer" className="footer">
      {/*             <div className="videoDiv">
        <video src={video} autoPlay loop muted type="video/mp4" className="fullscreen-video"></video>
      </div> */}
      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" data-aos-duration="2000" className="text">
            <p>KEEP IN TOUCH</p>
            <h1>Travel with us</h1>
          </div>
          <div className="inputDiv flex">
            <input
              data-aos="fade-up"
              data-aos-duration="2000"
              type="text"
              placeholder="Enter Email Address"
            />
            <button
              data-aos="fade-up"
              data-aos-duration="3000"
              className="btn flex"
              type="submit"
            >
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="kabul">
              <div className="kab">
                <FaPlane className="plane-icon" />
              </div>

              <h1> Travel and Tour</h1>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="5000"
              className="footerParagraph"
            >
              Discover the world with our extraordinary Travel and Tour
              adventures.
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="4000"
              className="footerSocials flex"
            >
              <a
                href="https://twitter.com/your_twitter_profile"
                className="active-button"
              >
                <AiOutlineTwitter className="icon" />
              </a>
              <a
                href="https://www.youtube.com/your_youtube_channel"
                className="active-button"
              >
                <AiFillYoutube className="icon" />
              </a>

              <a
                href="https://www.instagram.com/your_instagram_profile"
                className="active-button"
              >
                <AiFillInstagram className="icon" />
              </a>
            </div>
          </div>
          <div className="footerLinks grid">
            <div
              data-aos="fade-up"
              data-aos-duration="4000"
              className="linkGroup"
            >
              <span className="groupTitle">OUR AGENCY</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tourism
              </li>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="4000"
              className="linkGroup"
            >
              <span className="groupTitle">PARTNERS</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Booking
              </li>
            </div>
          </div>
          <div className="footerDiv flex">
            <p>BEST TRAVEL WEBSITE FOR EVERYONE </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
