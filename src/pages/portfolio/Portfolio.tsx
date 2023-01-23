import React, { FC } from "react";
import { NavLink } from "react-router-dom";

import Close from "../../components/ui/close/Close";
import Heading from "../../components/ui/heading/Heading";

import { portfolio } from "./data";

import "../../../public/styles/portfolio.css";

const Portfolio: FC = () => {
  return (
    <div className="portfolio">
      <div className="portfolio__header">
        <Heading>Portfolio</Heading>
        <Close />
      </div>
      <div className="portfolio__items">
        {portfolio.map((item) => (
          <NavLink to={item.to} key={item.id}>
            <div
              className="portfolio__items-item"
              style={{ background: `url(${item.image})` }}
            >
              <p>{item.name}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
