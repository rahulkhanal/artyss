import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Consultation.scss";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const Consulatation = () => {
  const Navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const serviceID = "service_empxgwh";
  const templateID = "template_p5ekyrs";
  const userID = "r_RiIwtDiTIr1C7fQ";
  const [templateParams, setTempleteParams] = useState({
    name: "",
    email: "",
    addr: "Consultation required",
    message: "I need consultation please.",
    number: "",
  });
  function handleSubmit(e) {
    const templateParamsDemo = {
      from_name: templateParams.name,
      from_email: templateParams.email,
      from_address: templateParams.addr,
      message: templateParams.message,
      number: templateParams.number,
    };
    e.preventDefault();
    setloading(true);
    emailjs
      .send(serviceID, templateID, templateParamsDemo, userID)
      .then((response) => {
        console.log("Email sent successfully:", response);
        if (response.status == 200) {
          Navigate("/sucess-response", { state: { message: response.status } });
        }
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      })
      .finally(() => {
        setloading(false);
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
            <br />
            <input
              type="tel"
              placeholder="Contact Number"
              required
              value={templateParams.number}
              onChange={(e) =>
                setTempleteParams({ ...templateParams, number: e.target.value })
              }
            />
            <br />
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
            <button type="submit" disabled={loading}>
              {loading ? <ClipLoader color="#fff" size={25} /> : "Request"}
            </button>
          </form>
        </div>
        <br />
      </div>
    </>
  );
};

export default Consulatation;
