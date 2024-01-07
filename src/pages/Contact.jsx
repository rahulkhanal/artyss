import React from "react";
import "./Contact.scss";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="Contact">
      <div className="hero">
        <img src="/src/assets/media/conatct.5d3ac94d.jpeg" alt="" />
      </div>
      <div className="contact-section">
        <h1>Contact Us</h1>
        <br />
        <br />
        <form>
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <br />
          <div className="form-row">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" />
          </div>
          <br />
          <div className="form-row">
            <label htmlFor="contact">Contact</label>
            <input type="tel" id="contact" />
          </div>
          <br />
          <div className="form-row">
            <label htmlFor="describe">Enquiry For</label>
            <textarea name="" id="describe" cols="30" rows="10"></textarea>
          </div>
          <br />
          <br />
          <div className="form-row">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <br />
      <br />
      <br />
      <div className="social">
        <FaFacebook
          size={30}
          onClick={() =>
            (window.location.href =
              "https://www.facebook.com/artyssdesignstudio")
          }
        />
        <FaInstagram
          size={30}
          onClick={() =>
            (window.location.href = "https://www.instagram.com/artyss_studio/")
          }
        />
        <FaYoutube
          size={30}
          onClick={() =>
            (window.location.href =
              "https://www.youtube.com/channel/UC6ON5yb7iQ2P_yzjqPWZV1Q")
          }
        />
        <FaLinkedin
          size={30}
          onClick={() =>
            (window.location.href = "https://www.linkedin.com/company/artyss/")
          }
        />
      </div>
      <br />
    </div>
  );
};

export default Contact;
