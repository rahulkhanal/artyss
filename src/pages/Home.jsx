import React, { useRef, useState } from "react";
import "./home.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  const [bannerData, setBannerDta] = useState([
    {
      id: 1,
      title: "Thoughtfully curated Interiors Solution",
      slogan: "Artify Your Living Space",
      img: "/src/assets/media/banner1.62cc4589.png",
    },
    {
      id: 2,
      title: "Thoughtfully curated Interiors Solution",
      slogan: "Artify Your Living Space",
      img: "/src/assets/media/banner2.a5005769.png",
    },
    {
      id: 3,
      title: "Thoughtfully curated Interiors Solution",
      slogan: "Artify Your Living Space",
      img: "/src/assets/media/banner3.916aefb7.png",
    },
  ]);
  return (
    <>
      <Carousel
        className="heroBanner"
        showStatus={false}
        autoPlay={true}
        showArrows={true}
        infiniteLoop={true}
        showIndicators={true}
        showThumbs={false}
        swipeable={true}
      >
        {bannerData.map((item, index) => {
          return (
            <div key={item.id}>
              <div
                className="banner-body"
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "70vh",
                }}
              >
                <article>
                  <h1>{item.title}</h1>
                  <span>
                    <strong>{item.slogan}</strong>
                  </span>
                </article>
              </div>
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default Home;
