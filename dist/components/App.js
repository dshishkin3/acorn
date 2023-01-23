import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";
import Menu from "./ui/menu/Menu";
import "../../public/styles/main.css";
export class App extends Component {
    render() {
        return (React.createElement("div", { className: "container" },
            React.createElement(Menu, null),
            React.createElement(Switch, null, routes.map((route, i) => (React.createElement(Route, { key: i, path: route.path, exact: route.exact, component: route.component }))))));
    }
}
