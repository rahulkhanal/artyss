import React from "react";
import "./Footer.scss";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="main-div">
          <div className="footer-img">
            <img src="materials/media/footer.png" alt="" />
          </div>
          <br />
          <span>
            Artyss Design Studio is a team of small passionate and experienced
            designers who are committed to providing you with an experience
            unlike any other, where you can enjoy great design and
            craftsmanship.
          </span>
          <br />
          <br />
          <div className="footer-social">
            <FaFacebook
              size={25}
              onClick={() =>
                (window.location.href =
                  "https://www.facebook.com/artyssdesignstudio")
              }
            />
            <FaInstagram
              size={25}
              onClick={() =>
                (window.location.href =
                  "https://www.instagram.com/artyss_studio/")
              }
            />
            <FaYoutube
              size={25}
              onClick={() =>
                (window.location.href =
                  "https://www.youtube.com/channel/UC6ON5yb7iQ2P_yzjqPWZV1Q")
              }
            />
            <FaLinkedin
              size={25}
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/company/artyss/")
              }
            />
          </div>
        </div>
        <div className="mid-footer main-div">
          <div>
            <div style={{ textAlign: "center" }}>
              <b>Quick Links</b>
              <br />
              <br />
              <ul>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">FAQs</a>
                </li>
                <li>
                  <a href="">Support</a>
                </li>
                <li>
                  <a href="">About Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div style={{ textAlign: "center" }}>
              <b>Important Links</b>
              <br />
              <br />
              <ul>
                <li>
                  <a href="">Terms of Service</a>
                </li>
                <li>
                  <a href="">Disclaimer</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="main-div">
          <div style={{ textAlign: "center" }}>
            <b>Address</b>
            <br />
            <br />
            <p>
              Artyss Experience centre, # 533 <br />
              2nd floor, Skanda Arcade, 14th <br />
              Cross Rd, F Block, Sahakar Nagar,
              <br />
              Byatarayanapura, Bengaluru,
              <br /> Karnataka 560092
              <br />
              <br />
              <span>Email : support@artyss.in</span>
              <br />
              <br />
              <span>Phone : +91 9538118866</span>
            </p>
          </div>
        </div>
      </footer>
      <center className="footer-span">
        © 2021 Artyss Inc. All Rights Reserved.
      </center>
    </>
  );
};

export default Footer;
