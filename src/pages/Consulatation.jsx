import React from "react";
import "./Consultation.scss";

const Consulatation = () => {
  return (
    <div className="Consulatation">
      <div className="left">
        <img src="/src/assets/media/bookCov.15248870.jpg" alt="" />
      </div>
      <div className="right">
        <h1>Request here</h1>
        <br />
        <br />
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <br />
          <button type="submit">Request</button>
        </form>
      </div>
    </div>
  );
};

export default Consulatation;
