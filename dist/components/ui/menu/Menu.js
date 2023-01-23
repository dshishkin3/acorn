import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { links } from "./data";
import "../../../../public/styles/main.css";
const Menu = () => {
    let location = useLocation();
    return (React.createElement("div", { className: "menu" },
        React.createElement("div", { className: "menu__header" },
            React.createElement(NavLink, { to: "/" },
                React.createElement("img", { src: "./images/logo.svg", alt: "logo" })),
            React.createElement("img", { src: "./images/profile.svg", alt: "profile" })),
        React.createElement("div", { className: "menu__text" },
            React.createElement("p", { className: "menu__text-caption" }, "Branding & website development"),
            React.createElement("p", { className: "menu__text-title" }, "via MarTech Perspective"),
            React.createElement("p", { className: "menu__text-subtitle" }, "We develop visual communications using marketing technology for FinTech and Event companies")),
        React.createElement("div", { className: "menu__links" }, links.map((link) => (React.createElement(NavLink, { to: link.to, key: link.id },
            React.createElement("div", { className: "menu__links-link", style: {
                    background: `url(${link.image})`,
                    filter: location.pathname !== "/" ? "grayscale(100%)" : "none", // если не home page, то цвет карточек ч/б
                } },
                React.createElement("p", null, link.name)))))),
        React.createElement("div", { className: "menu__policy" },
            React.createElement("div", { className: "menu__policy_left" },
                React.createElement("p", { className: "menu__policy-year" }, "\u00A9 2022"),
                React.createElement("p", { className: "menu__policy-privacy" }, "Privacy Policy")),
            React.createElement("p", { className: "menu__policy-lang" }, "En"))));
};
export default Menu;
