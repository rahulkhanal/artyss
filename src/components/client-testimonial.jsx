import React from "react";
import "./client-testimonial.scss";
import Slider from "react-slick";

const Client = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // centerMode: true,
    // centerPadding: "50px",
    dots: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="client">
      <div className="client-head">
        <h1>Hear it from our clients!</h1>
      </div>
      <br />
      <div className="client-body">
        <Slider {...settings}>
          <div className="card">
            <p>
              When we asked for most of our furniture to be made in veneer,
              Artyss confidently accepted it & delivered it with a great finesse
            </p>
            <i>Rahul & Ranjana</i>
          </div>
          <div className="card">
            <p>
              Design was never a priority, we wanted a space that reflected good
              vibes, and the designer helped us in achieving it through
              thoughtful designing.
            </p>
            <i>Deepak</i>
          </div>
          <div className="card">
            <p>
              We chose Artyss when we saw a house of our friends & instantly
              fell in love with their unique designs & flawless finishing.
              Needless to say, they have surpassed our expectations
            </p>
            <i>Vishnu & Ram</i>
          </div>
          <div className="card">
            <p>
              Your dream of home interiors requires good designs as well as
              knowledge of the functionalities. Artyss offered us the best of
              both worlds.
            </p>
            <i>Vinuth & Dhanya</i>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Client;
