import Logo from "../assets/media/logo.png";
// import HamBurger from "./assets/hamburger.png";
import NavCss from "./Navigation.module.css";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { TiDelete } from "react-icons/ti";
import { BsCart4 } from "react-icons/bs";

const Navigation = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "500" : "none",
      // color: isActive ? "#ed1c22" : "",
    };
  };
  return (
    <>
      <nav className={NavCss.Navigation}>
        <div className={NavCss.allignResponsive}>
          <div className={NavCss.Logo}>
            <img
              src={Logo}
              alt="Nepal Canvas"
              onClick={() => navigate("/explore")}
            />
          </div>
          <div className={NavCss.HamBurger}>
            <img
              //   src={HamBurger}
              alt="Nepal Canvas"
              width={25}
              onClick={() => setShowMenu(true)}
            />
          </div>
        </div>
        <ul className={showMenu ? NavCss.body2 : NavCss.body}>
          <NavLink
            to="/"
            onClick={() => setShowMenu(false)}
            style={navLinkStyle}
          >
            Home
          </NavLink>
          <NavLink
            to="/explore-products"
            onClick={() => setShowMenu(false)}
            style={navLinkStyle}
          >
            Blog
          </NavLink>
          <NavLink
            to="/"
            onClick={() => setShowMenu(false)}
            style={navLinkStyle}
          >
            Portfolio
          </NavLink>
          <NavLink to="/">Contact Us</NavLink>
          <TiDelete
            size={35}
            className={NavCss.crossBtn}
            onClick={() => setShowMenu(false)}
            style={navLinkStyle}
          />
          <div className={NavCss.cart}>
            <NavLink
              to="/admin"
              onClick={() => setShowMenu(false)}
              className={NavCss.loginBtn}
              style={navLinkStyle}
            >
              Book a Consultation
            </NavLink>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
