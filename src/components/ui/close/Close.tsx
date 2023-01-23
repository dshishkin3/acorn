import React, { FC } from "react";
import { NavLink } from "react-router-dom";

import "../../../../public/images/close.svg";

const Close: FC = () => {
  return (
    <NavLink to="/">
      <img style={{ cursor: "pointer" }} src="./images/close.svg" alt="close" />
    </NavLink>
  );
};

export default Close;
