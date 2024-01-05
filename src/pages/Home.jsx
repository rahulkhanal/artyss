import React, { useState } from "react";
import Slider from "react-slick";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const NextArrow = ({ onClick }) => (
  <div className="custom-arrow-next" onClick={onClick}>
    <GrFormNext size={20} className="arrow" color="red" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow-prev" onClick={onClick}>
    <GrFormPrevious size={20} className="arrow" />
  </div>
);

const Home = () => {
  const [bannerData, setBannerDta] = useState([]);
  const settings = {
    dots: false,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    arrows: false,
  };
  return (
    <div>
      <Slider {...settings}>
        {bannerData.map((item, index) => {
          return (
            <article key={index}>
              <div className="home-carousel-overlay"></div>
              {/* <img
                  src={item.img}
                  alt={item.title}
                /> */}
            </article>
          );
        })}
      </Slider>
    </div>
  );
};

export default Home;
