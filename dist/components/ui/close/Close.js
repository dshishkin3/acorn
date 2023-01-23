import React from "react";
import { NavLink } from "react-router-dom";
import "../../../../public/images/close.svg";
const Close = () => {
    return (React.createElement(NavLink, { to: "/" },
        React.createElement("img", { style: { cursor: "pointer" }, src: "./images/close.svg", alt: "close" })));
};
export default Close;
