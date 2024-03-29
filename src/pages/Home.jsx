import React, { useRef, useState } from "react";
import "./home.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Tab from "../components/Tab";
import Client from "../components/client-testimonial";
import Youtube from "../components/Youtube";
import Blog from "./Blog";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const Navigate = useNavigate();
  const [bannerData, setBannerDta] = useState([
    {
      id: 1,
      title: "Thoughtfully curated Interiors Solution",
      slogan: "Artify Your Living Space",
      img: "/materials/media/banner1.62cc4589.png",
    },
    {
      id: 2,
      title: "Thoughtfully curated Interiors Solution",
      slogan: "Artify Your Living Space",
      img: "/materials/media/banner2.a5005769.png",
    },
    {
      id: 3,
      title: "Thoughtfully curated Interiors Solution",
      slogan: "Artify Your Living Space",
      img: "/materials/media/banner3.916aefb7.png",
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
        emulateTouch={true}
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
      <div className="home2">
        <div className="home2-f">
          <h1>Who are we?</h1>
          <p>
            Artyss Design Studio is a team of passionate and experienced
            designers who are committed to providing you with an experience
            unlike any other, where you can enjoy great design and
            craftsmanship. We are experts in creating personalized designs at
            affordable prices. We work closely with our customers to understand
            their ideas and help them convert them into reality.
          </p>
          <br />
          <br />
          <div className="img-layer">
            <img
              src="/materials/media/interior-design-living-area.1ac04d0b.jpg"
              alt=""
            />
            <img src="/materials/media/interier-2.97a7c44c.jpg" alt="" />
            <img src="/materials/media/interier-3.e937159f.jpg" alt="" />
          </div>
          <br />
          <br />
          <button onClick={() => Navigate("/portfolio")}>Learn More</button>
        </div>
        <div className="home2-s">
          <img src="/materials/media/aboutImg.277b4001.jpg" alt="" />
        </div>
      </div>
      <div className="home3">
        <div>
          <h1>Bringing your dream house into a reality!</h1>
          <br />
          <br />
          <p>
            The designers at Artyss are acutely aware of the styles of design
            and aim to combine innovation and practicality in our designs. We
            give ample time to understand the needs of our customers and offer
            transparent services from the conception to the execution of a
            project. Every house should reflect the personality of those who
            reside in it. At Artyss, we strive to fulfil this goal.
          </p>
          <br />
          <br />
          <button onClick={() => Navigate("/consultation")}>
            Book a Consultation
          </button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Tab />
      <br />
      <br />
      <br />
      <div className="choose">
        <h1>Why choose us?</h1>
        <br />
        <br />
        <br />
        <div>
          <article>
            <img src="/materials/choose1.png" alt="" />
            <br />
            <strong>EXPERIENCED</strong>
          </article>
          <article>
            <img src="/materials/choose2.png" alt="" />
            <br />
            <strong>STATE - OF THE ART FACTORY</strong>
          </article>
          <article>
            <img src="/materials/choose3.png" alt="" />
            <br />
            <strong>3D & VR RENDERING</strong>
          </article>
          <article>
            <img src="/materials/choose1.png" alt="" />
            <br />
            <strong>ON-TIME DELIVERY & INSTALLATION</strong>
          </article>
        </div>
      </div>
      <br />
      <Client />
      <br />
      <Youtube />
      <br />
      <Blog />
      <br />
      <div className="subscribe">
        <main>
          <h1>Subscribe to our Email</h1>
          <h2>list to receive design inspirations straight to your inbox!</h2>
          <br />
          <div>
            <input type="email" placeholder="Your Email Address" />
            <button>Subscribe</button>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
