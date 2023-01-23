import { FC } from "react";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import { links } from "./data";

import "../../../../public/styles/main.css";

const Menu: FC = () => {
  let location = useLocation();

  return (
    <div className="menu">
      <div className="menu__header">
        <NavLink to="/">
          <img src="./images/logo.svg" alt="logo" />
        </NavLink>
        <img src="./images/profile.svg" alt="profile" />
      </div>
      <div className="menu__text">
        <p className="menu__text-caption">Branding & website development</p>
        <p className="menu__text-title">via MarTech Perspective</p>
        <p className="menu__text-subtitle">
          We develop visual communications using marketing technology for
          FinTech and Event companies
        </p>
      </div>
      {/* array with all links/cards */}
      <div className="menu__links">
        {links.map((link) => (
          <NavLink to={link.to} key={link.id}>
            <div
              className="menu__links-link"
              style={{
                background: `url(${link.image})`,
                filter: location.pathname !== "/" ? "grayscale(100%)" : "none", // если не home page, то цвет карточек ч/б
              }}
            >
              <p>{link.name}</p>
            </div>
          </NavLink>
        ))}
      </div>
      <div className="menu__policy">
        <div className="menu__policy_left">
          <p className="menu__policy-year">© 2022</p>
          <p className="menu__policy-privacy">Privacy Policy</p>
        </div>
        <p className="menu__policy-lang">En</p>
      </div>
    </div>
  );
};

export default Menu;
