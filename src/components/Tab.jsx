import React, { useState } from "react";
import "./Tab.scss";

const ModulerKitchen = [
  {
    id: 1,
    img: "/src/assets/media/oneKitchen.ef12dc70.jpg",
  },
  {
    id: 2,
    img: "/src/assets/media/2kitchen.d9f740a9.jpg",
  },
  {
    id: 3,
    img: "/src/assets/media/3kitchen.4b06db37.jpg",
  },
  {
    id: 4,
    img: "/src/assets/media/4kitchen.8a6cbda5.jpg",
  },
  {
    id: 5,
    img: "/src/assets/media/5kitchen.8d1d9691.jpg",
  },
  {
    id: 6,
    img: "/src/assets/media/6kitchen.eb10ee31.jpg",
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
            onClick={() => setTab({ Moduler: false, Living: true, Bed: false })}
          >
            Living Rooms
          </li>
          <li
            style={
              tab.Bed ? { backgroundColor: "#0E416A", color: "#fff" } : null
            }
            onClick={() => setTab({ Moduler: false, Living: false, Bed: true })}
          >
            Bed Rooms
          </li>
        </ul>
      </div>
      <br />
      <div className="body">
        {arr.map((item, index) => {
          return (
            <div key={item.id}>
              <img src={item.img} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tab;
