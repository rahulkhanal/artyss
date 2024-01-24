import React, { useState } from "react";
import "./Contact.scss";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import emailjs from "emailjs-com";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Modal,
  Typography,
} from "@mui/material";

const Contact = () => {
  const [modal, setModal] = useState(false);
  const serviceID = "service_empxgwh";
  const templateID = "template_p5ekyrs";
  const userID = "r_RiIwtDiTIr1C7fQ";
  const [templateParams, setTempleteParams] = useState({
    name: "",
    email: "",
    addr: "",
    message: "",
  });
  function handleSubmit(e) {
    const templateParamsDemo = {
      from_name: templateParams.name,
      from_email: templateParams.email,
      from_address: templateParams.addr,
      message: templateParams.message,
    };
    e.preventDefault();
    console.log(templateParamsDemo);
    emailjs
      .send(serviceID, templateID, templateParamsDemo, userID)
      .then((response) => {
        console.log("Email sent successfully:", response);
        if (response.status == 200) {
          setModal(true);
        }
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  }
  return (
    <>
      <div className="Contact">
        <div className="hero">
          <img src="/materials/media/conatct.5d3ac94d.jpeg" alt="" />
        </div>
        <div className="contact-section">
          <h1>Contact Us</h1>
          <br />
          <br />
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={templateParams.name}
                onChange={(e) =>
                  setTempleteParams({ ...templateParams, name: e.target.value })
                }
                required
              />
            </div>
            <br />
            <div className="form-row">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="addr"
                value={templateParams.addr}
                onChange={(e) =>
                  setTempleteParams({ ...templateParams, addr: e.target.value })
                }
                required
              />
            </div>
            <br />
            <div className="form-row">
              <label htmlFor="contact">Email</label>
              <input
                type="email"
                id="contact"
                name="email"
                value={templateParams.email}
                onChange={(e) =>
                  setTempleteParams({
                    ...templateParams,
                    email: e.target.value,
                  })
                }
                required
              />
            </div>
            <br />
            <div className="form-row">
              <label htmlFor="describe">Enquiry For</label>
              <textarea
                name=""
                id="describe"
                cols="30"
                rows="10"
                value={templateParams.message}
                onChange={(e) =>
                  setTempleteParams({
                    ...templateParams,
                    message: e.target.value,
                  })
                }
              ></textarea>
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
              (window.location.href =
                "https://www.instagram.com/artyss_studio/")
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
              (window.location.href =
                "https://www.linkedin.com/company/artyss/")
            }
          />
        </div>
        <br />
      </div>
      <Dialog
        open={modal}
        style={{ textAlign: "center" }}
        className="modal"
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <br />
        <img
          src="/materials/mail.png"
          width={50}
          style={{ margin: "auto" }}
          alt=""
        />
        <DialogTitle id="alert-dialog-title">Thank You</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your Submission has been received.
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            We will be in touch and contact you soon.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {window.location.reload()}}
            variant="contained"
            style={{ backgroundColor: "#0E416A" }}
          >
            Return
          </Button>
          {/* <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button> */}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Contact;
