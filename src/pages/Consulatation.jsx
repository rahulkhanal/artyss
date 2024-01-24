import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Consultation.scss";
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

const Consulatation = () => {
  const [modal, setModal] = useState(false);
  const serviceID = "service_empxgwh";
  const templateID = "template_p5ekyrs";
  const userID = "r_RiIwtDiTIr1C7fQ";
  const [templateParams, setTempleteParams] = useState({
    name: "",
    email: "",
    addr: "Consultation required",
    message: "I need consultation please.",
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
      <div className="Consulatation">
        <div className="left">
          <img src="/materials/media/bookCov.15248870.jpg" alt="" />
        </div>
        <div className="right">
          <h1>Request here</h1>
          <br />
          <br />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              required
              value={templateParams.name}
              onChange={(e) =>
                setTempleteParams({ ...templateParams, name: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={templateParams.email}
              onChange={(e) =>
                setTempleteParams({ ...templateParams, email: e.target.value })
              }
            />
            <br />
            <button type="submit">Request</button>
          </form>
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
            onClick={() => {
              window.location.reload();
            }}
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

export default Consulatation;
