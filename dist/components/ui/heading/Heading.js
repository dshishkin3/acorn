import React from "react";
import "../../../../public/styles/main.css";
const Heading = ({ children }) => {
    return React.createElement("h1", { className: "ui__heading" }, children);
};
export default Heading;
