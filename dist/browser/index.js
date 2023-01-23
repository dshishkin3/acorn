import React from "react";
import { BrowserRouter } from "react-router-dom";
//@ts-ignore
import { App } from "../components/App";
import { hydrate } from "react-dom";
//var window:any;
hydrate(React.createElement(BrowserRouter, null,
    React.createElement(App, { data: window.__INITIAL_DATA__ })), document.getElementById("app"));
