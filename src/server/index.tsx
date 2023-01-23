import React from "react";
import { StaticRouter, matchPath } from "react-router-dom";

//@ts-ignore
import express, { Application, Request, Response, NextFunction } from "express";
import { renderToString } from "react-dom/server";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import serialize from "serialize-javascript";
import validator from "express-validator";
import session from "express-session";
import mongoose from "mongoose";
import passport from "passport";
import flash from "connect-flash";

import Error from "../interfaces/Error";
import { App } from "../components/App";
import Routes from "../components/routes";

import portfolio from "./routers/portfolio";
import about from "./routers/about";

const app: Application = express();
const CONNECTION_URI: any = process.env.MONGODB_URI;
//const port = process.env.PORT || 5000;

require("dotenv/config");
/*
mongoose.connect(
  CONNECTION_URI || process.env.CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  },
  () => {
    console.log('Connection with database Users completed');
  }
);
*/
app.use(function (req: Request, res: Response, next: NextFunction) {
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1.
  res.setHeader("Pragma", "no-cache"); // HTTP 1.0.
  res.setHeader("Expires", "0");
  //res.setHeader('Content-Type', 'application/json');
  res.setHeader("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(validator());
app.use(cookieParser());
app.use(
  session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// pages
app.use("/portfolio", portfolio);
app.use("/about", about);

app.get("*", (req: Request, res: Response, next: NextFunction) => {
  const activeRouter: any =
    Routes.find((route: any) => matchPath(req.url, route)) || {};
  const promise = activeRouter.fetchInitialData
    ? activeRouter.fetchInitialData(req.path)
    : Promise.resolve();
  promise
    .then((data: any) => {
      const context: object = { data };
      const user: object = { name: "Artem" };
      const markup = renderToString(
        <StaticRouter location={req.url} context={context}>
          <App data={data} />
        </StaticRouter>
      );

      const html = `<!DOCTYPE html>
            <html>
                <head>
                  <title>collab</title>
                  <link rel="stylesheet" type="text/css" href="../main.css">
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                      <script src='bundles/bundle.js' defer></script>
                        <script>window.__INITIAL_DATA__= ${serialize(
                          user
                        )}</script>
                            <title>COLLAB</title>
                          </head>
                        <body>
                       <div id="app">
                     ${markup}
                  </div>
                </body>
            </html>`;

      return res.send(html);
    })
    .catch(next);
});
/*
app.use((error:any, req: Request, res: Response, next: NextFunction) => {
  res.status(error.status);
    res.json({
    status: error.status,
    message: error.message,
    stack: error.stack
  });
});
*/

app.use((req: Request, res: Response, next: NextFunction) => {
  //<-- заменить если появится непредвиденная ошибка
  var err: Error = new Error("Noooo");
  err.status = 404;
  next(err);
});

app.listen(8888, () => {
  console.log("Server started!");
});
