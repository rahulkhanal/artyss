import React from "react";
import Slider from "react-slick";
import YouTube from "react-youtube";
import "./Youtube.scss";

const Youtube = () => {
  const opts = {
    height: "300px",
    width: "90%",
    playerVars: {
      autoplay: 0,
    },
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "50px",

    responsive: [
      {
        breakpoint: 800,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="youtube">
      <div className="client-head">
        <h1>Video Testimonial</h1>
      </div>
      <br />
      <br />
      <div className="client-body">
        <Slider {...settings}>
          <div className="card">
            <YouTube videoId={`x2hZdYjsHG0`} opts={opts} />
          </div>
          <div className="card">
            <YouTube videoId={`ZJ8W3Y1V7-Y`} opts={opts} />
          </div>
          <div className="card">
            <YouTube videoId={`qI8J_kwealY`} opts={opts} />
          </div>
          <div className="card">
            <YouTube videoId={`zVt_Zk5QLdk`} opts={opts} />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Youtube;
