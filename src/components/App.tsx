import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import routes from "./routes";

import Menu from "./ui/menu/Menu";

import "../../public/styles/main.css";

export class App extends Component<any> {
  render() {
    return (
      <div className="container">
        <Menu />
        <Switch>
          {routes.map((route: any, i: number) => (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </div>
    );
  }
}
