import React, { useState } from "react";
import "./Tab.scss";

const ModulerKitchen = [
  {
    id: 1,
    img: "/materials/media/oneKitchen.ef12dc70.jpg",
  },
  {
    id: 2,
    img: "/materials/media/2kitchen.d9f740a9.jpg",
  },
  {
    id: 3,
    img: "/materials/media/3kitchen.4b06db37.jpg",
  },
  {
    id: 4,
    img: "/materials/media/4kitchen.8a6cbda5.jpg",
  },
  {
    id: 5,
    img: "/materials/media/5kitchen.8d1d9691.jpg",
  },
  {
    id: 6,
    img: "/materials/media/6kitchen.eb10ee31.jpg",
  },
];
const LivingRoom = [
  {
    id: 1,
    img: "/materials/media/L4.66988f9c.jpg",
  },
  {
    id: 2,
    img: "/materials/media/L6.c64f19f9.jpg",
  },
  {
    id: 3,
    img: "/materials/media/L5.31140891.jpg",
  },
  {
    id: 4,
    img: "/materials/media/L1.d6c59dc3.jpg",
  },
  {
    id: 5,
    img: "/materials/media/L2.e9c5cb86.jpg",
  },
  {
    id: 6,
    img: "/materials/media/L2.e9c5cb86.jpg",
  },
];
const BedRoom = [
  {
    id: 1,
    img: "/materials/media/B4.a046cdcc.jpg",
  },
  {
    id: 2,
    img: "/materials/media/B3.48e79bb7.jpg",
  },
  {
    id: 3,
    img: "/materials/media/B5.cc34f7d7.jpg",
  },
  {
    id: 4,
    img: "/materials/media/B6.a9c05abe.jpg",
  },
  {
    id: 5,
    img: "/materials/media/B1.6102cc42.jpg",
  },
  {
    id: 6,
    img: "/materials/media/B2.95a4cd78.jpg",
  },
];
const Tab = () => {
  const [tab, setTab] = useState({
    Moduler: true,
    Living: false,
    Bed: false,
  });
  const [arr, setArr] = useState(ModulerKitchen);

  return (
    <div className="tab-section">
      <div className="head">
        <h1>Check out our projects!</h1>
        <ul className="tab-main">
          <li
            onClick={() => {
              setArr(ModulerKitchen);
              setTab({ Moduler: true, Living: false, Bed: false });
            }}
            style={
              tab.Moduler ? { backgroundColor: "#0E416A", color: "#fff" } : null
            }
          >
            Moduler Kitchens
          </li>
          <li
            style={
              tab.Living ? { backgroundColor: "#0E416A", color: "#fff" } : null
            }
            onClick={() => {
              setArr(LivingRoom);
              setTab({ Moduler: false, Living: true, Bed: false });
            }}
          >
            Living Rooms
          </li>
          <li
            style={
              tab.Bed ? { backgroundColor: "#0E416A", color: "#fff" } : null
            }
            onClick={() => {
              setArr(BedRoom);
              setTab({ Moduler: false, Living: false, Bed: true });
            }}
          >
            Bed Rooms
          </li>
        </ul>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="body">
        {arr.map((item, index) => {
          return (
            <div key={item.id} className="tab-card">
              <div className="overlay">
                {/* <center> */}
                  <button>View Details</button>
                {/* </center> */}
              </div>
              <img src={item.img} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tab;
